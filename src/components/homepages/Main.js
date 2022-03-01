import React, { useState } from 'react';
import Minisidebar from './Minisidebar';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Emails from './pages/Emails';
import Plans from './pages/Plans';
import Tickets from './pages/Tickets';
import Users from './pages/Users';
import Reports from './pages/Reports';

function Main() {
    const [page, setPage] = useState("DASHBOARD");
    const [show, setShow] = useState(false);

    const Switch = (page) => {
        switch (page) {
            case "DASHBOARD":
                return <Dashboard />;
            case "PLANS":
                return <Plans />;
            case "TICKETS":
                return <Tickets />;
            case "EMAILS":
                return <Emails />;
            case "USERS":
                return <Users />;
            case "REPORTS":
                return <Reports />;
            default:
                return <></>

        }
    };
    return <div className="flex max-w-7xl mx-auto">
        {show ?
            <Sidebar page={page} setShow={setShow} setPage={setPage} />
            :
            <Minisidebar page={page} setShow={setShow} />
        }

        <div className="flex-grow">
            <div className="mx-auto px-4 sm:px-6">
                <div className="md:px-4 py-8">
                    {Switch(page)}
                </div>

            </div>
        </div>
    </div>;
}

export default Main;
