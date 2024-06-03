
import ConsultDashboard from '../components/Dashboard/ConsultDashboard';
import ListingDashboard from '../components/Dashboard/ListingDashboard';
import Profile from '../components/Profile';
import ReviewDashboard from '../components/Dashboard/ReviewDashboard';


const Dashboard = () => {

    return (
        <main className="w-10/12 my-16  mx-auto">
            <div className="upper flex mb-5 gap-5 flex-col-reverse md:flex-row justify-between">
                <ConsultDashboard />
                <ListingDashboard />
                <Profile />
            </div>
            <ReviewDashboard />
        </main>
    );
};

export default Dashboard;
