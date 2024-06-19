
import { useEffect } from 'react';
import ConsultDashboard from '../components/Dashboard/ConsultDashboard';
import Notifications from '../components/Dashboard/Notifications';
import Profile from '../components/Dashboard/Profile';
import ReviewDashboard from '../components/Dashboard/ReviewDashboard';
import { useDispatch } from 'react-redux';
import { clearError } from '../redux/user/userSlice';


const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearError());
    }, []);

    return (
        <main className="w-11/12 py-20 md:py-40 mx-auto">
            <div className="upper flex mb-5 gap-5 flex-col md:flex-row justify-between">
                <Notifications />
                <ConsultDashboard />
                <Profile />
            </div>
            {/* <ReviewDashboard /> */}
        </main>
    );
};

export default Dashboard;
