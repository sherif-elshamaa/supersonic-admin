import React from 'react';

function Minisidebar({ page, setShow }) {
    return <>
        <div onMouseOver={() => setShow(true)} className="h-screen my-4 relative w-[50px] ml-8 sm:ml-[40px]">
            <div className="bg-white h-full rounded-2xl ">
            <nav className="mt-6">
                    <div>
                        <button  className={`${page==="DASHBOARD"?" border-r-4 w-full border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase  flex items-center p-4 my-2 transition-colors duration-200 justify-start`}>
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        <button  className={`${page==="PLANS"?" border-r-4  border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase   flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-black`} >
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </span>
                        </button>
                        <button  className={`${page==="TICKETS"?" border-r-4  border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase   flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-black`} >
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                                </svg>
                            </span>
                        </button>
                        <button  className={`${page==="EMAILS"?" border-r-4  border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase   flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-black`} >
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                </svg>
                            </span>
                        </button>
                        <button  className={`${page==="USERS"?" border-r-4  border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase   flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-black`} >
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </span>
                        </button>
                        <button  className={`${page==="REPORTS"?" border-r-4  border-black bg-gradient-to-r from-white text-black":"text-gray-500"} w-full font-thin uppercase   flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-black`}>
                            <span className="text-left">
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>

    </>;
}

export default Minisidebar;
