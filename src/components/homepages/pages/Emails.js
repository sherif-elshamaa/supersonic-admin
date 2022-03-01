import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Sendemail from './tools/Sendemail'

function Email({ item }) {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(true)
    }
    return <>
        <li className="flex items-center my-6 space-x-2">
            <div className="flex flex-col grow">
                <span className="text-sm text-gray-900 font-semibold  ml-2">
                    {item.name}
                </span>
                <span className="text-sm text-gray-700  ml-2">
                    ( {item.email} )
                </span>
                <span className="text-sm text-gray-700  ml-2">
                    Message: {item.message}
                </span>
                {
                    item.reply ?
                        <span className="text-sm text-gray-700  ml-2">
                            Reply: {item.reply}
                        </span> : ""
                }
                <span className="text-sm text-gray-400  ml-2">
                    {item.updateDate}
                </span>
            </div>
            {
                item.replyState ? "" :
                    <div >
                        <button onClick={handleClick} className="relative hover:bg-red-100 flex items-center p-2 bg-white  border border-gray-500 rounded-md focus:border-gray-600 focus:ring-opacity-40  focus:ring-gray-600  focus:ring  focus:outline-none">
                            Send Email
                        </button>
                    </div>
            }
            <Sendemail open={open} setOpen={setOpen} item={item} />

        </li>
    </>;
}


function Emails() {
    const state = useSelector((state) => state);
    const [emails, setEmails] = useState(state.contactUs)
    useEffect(() => {
        setEmails(state.contactUs)
    }, [state])
    return <>
        <main className="bg-gray-100  rounded-2xl h-full w-full overflow-hidden relative">
            <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <div className="overflow-auto pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">

                    <div className="m-5 xl:w-1/3">
                        <div className="shadow-lg rounded-2xl p-4 bg-white  w-full">
                            <p className="font-bold text-md text-black ">
                                Messages
                            </p>
                            <ul>
                                {emails.map((item, i) => <Email item={item} key={i} />)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>;
}

export default Emails;
