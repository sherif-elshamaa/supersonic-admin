import React from 'react'
import Navbar from '../components/Navbar';
import Profilepage from '../components/profilepages/Profilepage'
import Toaster from '../components/Toaster';

function Profile() {


    return (
        <div className="flex flex-col h-screen ">
            <div className="h-20">
                <Navbar />
            </div>
            <div className="grow">
                <Toaster />
                <Profilepage />
            </div>
        </div>
    )
}

export default Profile
