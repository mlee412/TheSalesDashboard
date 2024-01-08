import Sidebar from './components/Sidebar.jsx';
 import Header from './Header';
import Statistics from './Statistics';
import Revenue from './Revenue';
import RecentTransactions from './RecentTransactions';

export default function Dashboard() {
    return (
        <div>
            <Sidebar />
            <div className="mainTop">
            <Header />
            <Statistics />
            <div className="mainBottom">
                <Revenue />
                <RecentTransactions />
            </div>
            </div>
        </div>

    );
}

