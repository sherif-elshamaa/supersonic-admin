import React, { useState } from 'react'
import Acountoverview from './Acountoverview';
import Editprofile from './Editprofile';



function Profilepage() {
    const [page, setPage] = useState("Account overview");
    const [show, setShow] = useState(false)
    
    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    const Switch = (page) => {
        switch (page) {
            case "Account overview":
                return <Acountoverview />;
            case "Edit Profile":
                return <Editprofile />;
            default:
                return <></>

        }
    };
    const isActive = "bg-gray-200"

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4  sm:px-6">
                <div className="container lg:flex max-w-7xl mx-auto">
                    <div className="flex flex-col invisible -mt-[200px] lg:mt-0 lg:visible w-[340px]  px-4 py-8 bg-white   ">

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <button onClick={()=>{setPage("Account overview")}} className={` ${page === "Account overview" ? isActive : ""}  flex items-center px-4 py-2  text-gray-600 transition-colors duration-200 transform rounded-md  hover:bg-gray-100  hover:text-gray-700`} href="">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Account overview</span>
                                </button>

                                <hr className="my-6 border-gray-200 " />

                                <button onClick={()=>{setPage("Edit Profile")}} className={`${page === "Edit Profile" ? isActive : ""} flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md  hover:bg-gray-100  hover:text-gray-700`} href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>

                                    <span className="mx-4 font-medium">Edit Profile</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                    <div className=" relative inline-block lg:hidden w-full ">

                        <button onClick={handleShow} className="relative flex z-10 w-full items-center p-2 text-sm text-gray-600 bg-white border border-gray-500 rounded-md focus:border-gray-600 focus:ring-opacity-40  focus:ring-gray-600  focus:ring   focus:outline-none">
                            <span className="mx-1 grow">{page}</span>
                            <svg className="w-5 h-5 -ml-[40px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                            </svg>
                        </button>


                        <div className={`${show ? "" : "hidden"}  absolute right-0  w-full border border-gray-500 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl `}>
                            <button onClick={()=>{setPage("Account overview");setShow(!show);}} className="w-full flex items-center justify-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="mx-1">
                                    Account overview
                                </span>
                            </button>

                            <hr className="border-gray-200  " />

                            <button onClick={()=>{setPage("Edit Profile");setShow(!show);}} className="w-full flex items-center justify-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>

                                <span className="mx-1">Edit Profile</span>
                            </button>
                        </div>
                    </div>
                    <div className=" flex flex-col w-full  md:px-4 py-8  ">
                        {Switch(page)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profilepage