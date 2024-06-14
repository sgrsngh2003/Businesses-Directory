import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CardNotification from './CardNotification';
import { notificationFailure, notificationStart, notificationSuccess } from '../../redux/user/userSlice';

const Notifications = () => {
    const { currentUser, loading, error } = useSelector((state) => state.user);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    const dispatch = useDispatch();
    useEffect(() => {

        const getAllNotifications = async () => {

            try {
                dispatch(notificationStart());
                const res = await fetch(`/api/user/get-all-notification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: currentUser._id }),
                });
                const data = await res.json();
                if (data.success === false) {
                    dispatch(notificationFailure(data.message));
                    return;
                }
                dispatch(notificationSuccess(data.data));

            } catch (error) {
                dispatch(notificationFailure(error.message));
            }
        }
        getAllNotifications();
    }, []);
    return (
        <div className=' w-full md:w-4/12 shadow-md bg-custom-white md:p-11 p-5 rounded-lg  text-center'>
            <div className={`w-full flex flex-col gap-4 ${!isExpanded ? 'notifications' : ''}`}>
                <h4 className='text-2xl gilroy-bold tracking-wide'>Notifications</h4>
                {currentUser.notification ?
                    (
                        currentUser.notification.slice().reverse().map((notificationMsg, index) => (
                            <CardNotification key={index}
                                message={notificationMsg.message}
                                onClickPath={notificationMsg.data ? notificationMsg.data.onClickPath : undefined}
                                timeStamp={notificationMsg.timestamp}
                            />
                        ))
                    ) : <p>No notifications</p>}


            </div>
            <button
                className="text-blue-500 mt-4 text-xs"
                onClick={toggleIsExpanded}
            >
                {isExpanded ? 'Only recent' : 'View All'}
            </button>
        </div>
    )
};

export default Notifications;
