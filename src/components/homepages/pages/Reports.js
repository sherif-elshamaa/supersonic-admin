import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

function Invoice({ item }) {
    const state = useSelector((state) => state);
    const [info, setInfo] = useState(state.subscribers)
    const [subscriptions, setSubscriptions] = useState(state.subscriptions)
    useEffect(() => {
        setInfo(state.subscribers)
        setSubscriptions(state.subscriptions)
    }, [state])
    const subInfo = info.filter(info => info._id === item.userId)
    const subState = subscriptions.filter(sub => sub.userId === item.userId)
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show)
    }
    return <>
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {item.invoiceId}
                    </p>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    ${item.income}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    ${item.expenses}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    ${eval(item.income - item.expenses)}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={handleClick} className="text-gray-600 hover:text-gray-900">
                    {show ? "close" : "show"}
                </button>
            </td>
        </tr>
        <tr className={`${show ? "w-full h-40 bg-gray-50" : "invisible -mt-40"}`}>
            <td colSpan="5" className={`${show ? "pl-5" : "p-0 hidden"}`}>
                {subState[0] && subInfo[0] ?
                    <table className="table-auto w-full text-gray-500">
                        <tbody>
                            <tr>
                                <td className=' tdstrong'>Start Date</td>
                                <td>{subState[0].startDate}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>User ID</td>
                                <td>{item.userId}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Name</td>
                                <td>{subInfo[0].firstName + " " + subInfo[0].lastName}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Email</td>
                                <td>{subInfo[0].email}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Stripe SubscriptionID</td>
                                <td>{subState[0].stripeSubID}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Stripe CustomerID</td>
                                <td>{subState[0].customersID}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Invoice</td>
                                <td><a target='_blank' className="text-red-500" href={subState[0].invoiceUrl}>View</a></td>
                            </tr>
                        </tbody>
                    </table>

                    :
                    <table className="table-auto w-full text-gray-500">
                        <tbody>
                            <tr>
                                <td className=' tdstrong'>User ID</td>
                                <td>{item.userId}</td>
                            </tr>
                            <tr>
                                <td className=' tdstrong'>Invoice</td>
                                <td><a target='_blank' className="text-red-500" href={item.invoiceUrl}>View</a></td>
                            </tr>
                        </tbody>
                    </table>
                }


            </td>
        </tr>
    </>
}

function Reports() {
    const state = useSelector((state) => state);
    const [invoices, setInvoices] = useState(state.invoice)
    useEffect(() => {
        setInvoices(state.invoice)
    }, [state])
    const total = invoices.map(item => item.income).reduce((total, item) => total + item, 0)
    const expenses = invoices.map(item => item.expenses).reduce((total, item) => total + item, 0)
    const revenue = total - expenses
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
                                            invoice No.
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Income
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Expenses
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Revenue
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            {'total ---> '+ invoices.length}
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            ${total}
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            ${expenses}
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            ${revenue}
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((item, i) => <Invoice item={item} key={i} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>;
}

export default Reports;
