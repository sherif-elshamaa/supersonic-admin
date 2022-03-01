import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Closeticket from './tools/Closeticket'


function Ticket({ item }) {
    const state = useSelector((state) => state);
    const [info, SetInfo] = useState(state.subscribers)
    const subInfo = info.filter(info => info._id === item.userId)
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show)
    }
    const [open, setOpen] = useState(false)
    const handleCloseTicket = (e) => {
        e.preventDefault();
        setOpen(true)
    }
    return <>
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {item.ticketType}
                    </p>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {item.ticketDate}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className={`relative inline-block px-3 py-1 font-semibold ${item.status === "open" ? "text-green-900" : "text-red-900"} leading-tight`}>
                    <span aria-hidden="true" className={`absolute inset-0 ${item.status === "open" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}>
                    </span>
                    <span className="relative">
                        {item.status}
                    </span>
                </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={handleClick} className="text-gray-600 hover:text-gray-900">
                    {show ? "close" : "show"}
                </button>
            </td>
        </tr>
        <tr className={`${show ? "w-full h-40 bg-white" : "invisible -mt-40"}`}>
            <td colSpan="3" className={`${show ? "pl-5" : "p-0 hidden"}`}>
                <table className="table-auto w-full text-gray-500">
                    <tbody>
                        {
                            subInfo[0] ?
                                <>
                                    <tr>
                                        <td className=' tdstrong'>UserId: </td>
                                        <td>{subInfo[0]?._id}</td>
                                    </tr>
                                    <tr>
                                        <td className=' tdstrong'>Name</td>
                                        <td>{subInfo[0]?.firstName + " " + subInfo[0]?.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td className=' tdstrong'>Email</td>
                                        <td>{subInfo[0]?.email}</td>
                                    </tr>
                                </>

                                : ""
                        }
                        <tr>
                            <td className='w-32 tdstrong'>Ticket message: </td>
                            <td>{item.ticket}</td>
                        </tr>
                        {item.reply ?
                            <tr>
                                <td className=' tdstrong'>Ticket reply: </td>
                                <td>{item.reply}</td>
                            </tr>
                            : <tr></tr>
                        }
                    </tbody>
                </table>
            </td>
            {item.status === "closed" ?
                <td colSpan="1" className={`${show ? "p-0" : "p-0 hidden"}`}>
                </td>
                :
                <td colSpan="1" className={`${show ? "p-0" : "p-0 hidden"}`}>
                    <button onClick={handleCloseTicket} className="relative hover:bg-red-100 flex items-center p-2 bg-white  border border-gray-500 rounded-md focus:border-gray-600 focus:ring-opacity-40  focus:ring-gray-600  focus:ring  focus:outline-none">
                        Close Ticket
                    </button>
                </td>
            }
            <Closeticket open={open} setOpen={setOpen} item={item} />

        </tr>
    </>;
}


function Tickets() {
    const state = useSelector((state) => state);
    const [ticket, setTicket] = useState(state.ticket)
    useEffect(() => {
        setTicket(state.ticket)
    }, [state])
    return <>
        <main className="bg-gray-100  rounded-2xl h-full w-full overflow-hidden relative">
            <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <div className="overflow-auto pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                    <div className="py-8">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Ticket Type
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            status
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ticket.map((item, i) => <Ticket item={item} key={i} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>;
}

export default Tickets;
