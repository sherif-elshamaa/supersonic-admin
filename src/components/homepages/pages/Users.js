import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Closeaccount from './tools/Closeaccount';


function User({ item }) {
    const state = useSelector((state) => state);
    const [info, SetInfo] = useState(state.subscribersData)
    const [subscriptions, setSubscriptions] = useState(state.subscriptions)
    const subInfo = info.filter(info => info.userId === item._id)
    const subState = subscriptions.filter(sub => sub.userId === item._id)
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show)
    }
    const [open, setOpen] = useState(false)
    const handleCloseAccount = (e) => {
        e.preventDefault();
        setOpen(true)
    }
    return <>
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {item.firstName + " " + item.lastName}
                    </p>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {item.email}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {item.phone ? item.phone : "N/A"}
                    </span>
                </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={handleClick} className="text-gray-600 hover:text-gray-900">
                    {show ? "close" : "show"}
                </button>
            </td>
        </tr>
        <tr className={`${show ? "w-full h-40 bg-gray-50" : "invisible -mt-40"}`}>
            <td colSpan="3" className={`${show ? "pl-5" : "p-0 hidden"}`}>
                {subInfo.length !== 0 ?

                    <table className="table-auto w-full text-gray-500">
                        <tbody>
                            <tr>
                                <td className=' tdstrong'>User ID</td>
                                <td>{subInfo[0].userId}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Company Name</td>
                                <td>{subInfo[0].companyName}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Number of Employees</td>
                                <td>{subInfo[0].numberOfEmployees}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Business Number</td>
                                <td>{subInfo[0].businessNumber}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Business Address</td>
                                <td>{subInfo[0].address}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>City/Country</td>
                                <td>{subInfo[0].city + " " + subInfo[0].country}</td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <table className="table-auto w-full text-gray-500">
                        <tbody>
                            <tr>
                                <td className=' tdstrong'>User ID</td>
                                <td>{item._id}</td>
                            </tr>
                        </tbody>
                    </table>
                }
                {subState.length !== 0 ?
                    <>
                        <br />
                        <hr />
                        <br />
                        <table className="table-auto w-full text-gray-500">
                            <tbody>
                                <tr>
                                    <td className=' tdstrong'>Plan Type</td>
                                    <td>{subState[0].planType}</td>
                                </tr>
                                <tr>
                                    <td className=' tdstrong'>Stripe Subscription ID</td>
                                    <td>{subState[0].stripeSubID}</td>
                                </tr>
                                <tr>
                                    <td className=' tdstrong'>Start Date</td>
                                    <td>{subState[0].startDate}</td>
                                </tr>
                                {subState[0].invoiceUrl &&
                                    <tr>
                                        <td className=' tdstrong'>Invoice</td>
                                        <td><a target="_blank" rel="noreferrer" className="text-red-500" href={subState[0].invoiceUrl}>View</a></td>
                                    </tr>

                                }
                            </tbody>
                        </table>
                        <br />
                    </>
                    :
                    ""
                }
            </td>
            <td colSpan="1" className={`${show ? "p-0" : "p-0 hidden"}`}>
                <button onClick={handleCloseAccount} className="relative hover:bg-red-100 flex mx-auto items-center p-2 bg-white  border border-gray-500 rounded-md focus:border-gray-600 focus:ring-opacity-40  focus:ring-gray-600  focus:ring  focus:outline-none">
                    Close Account
                </button>
            </td>
        </tr>

        <Closeaccount open={open} setOpen={setOpen} item={item} />
    </>
}

function Users() {
    const state = useSelector((state) => state);
    const [user, setUser] = useState(state.subscribers)
    useEffect(() => {
        setUser(state.subscribers)
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
                                            Full Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Email Address
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item, i) => <User item={item} key={i} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>;
}

export default Users;
