import React from 'react';
import Header from '../components/Navbar';
import Toaster from '../components/Toaster';
import Main from '../components/homepages/Main';



function Home() {

    return (

        <div className="flex flex-col h-screen ">
            <div className="h-20">
                <Header />
            </div>
            <div className="grow">
                <Toaster />
                <Main />
            </div>
        </div>

    )
}

export default Home
