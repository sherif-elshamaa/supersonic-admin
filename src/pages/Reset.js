import React from 'react';
import Resetbox from '../components/Resetbox'
import Header from '../components/Navbar';
import Toaster from '../components/Toaster';


function Reset() {
    return <>
        <div className="flex flex-col h-screen ">
            <div className="h-20">
                <Header />
            </div>
            <div className="grow">
                <Toaster />
                <Resetbox />
            </div>
        </div>
    </>;
}

export default Reset;