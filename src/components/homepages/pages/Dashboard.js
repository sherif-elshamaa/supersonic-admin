import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'


function Dashboard() {
    const state = useSelector((state) => state);
    const [subscribers, setSubscribers] = useState(state.subscribers)
    const [subscriptions, setSubscriptions] = useState(state.subscriptions)
    const [invoices, setInvoices] = useState(state.invoice)
    useEffect(() => {
        setSubscribers(state.subscribers)
        setSubscriptions(state.subscriptions)
        setInvoices(state.invoice)
    }, [state])
    const freeUsers = subscriptions.filter(item => item.planType === "free").length;
    const proUsers = subscriptions.filter(item => item.planType === "PRO").length;

    const total = invoices.map(item => item.income).reduce((total, item) => total + item, 0)
    const expenses = invoices.map(item => item.expenses).reduce((total, item) => total + item, 0)
    return <>
        <main className="bg-gray-100 rounded-2xl h-full w-full overflow-hidden relative">
            <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <div className="overflow-auto pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">

                    <section className="px-4 py-12 mx-auto max-w-7xl">
                        <div className="flex flex-wrap items-center justify-between mb-4 space-y-1">
                            <h2 className="text-xl font-semibold text-gray-900">Analytics Overview</h2>

                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <div className="p-6 card">
                                <div className="flex items-start justify-between">
                                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">{subscribers.length}</h2>
                                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{subscribers.length * 100 + "%"}</span>
                                    </span>
                                </div>
                                <p className="text-sm leading-none text-gray-600">Users</p>
                            </div>
                            <div className="p-6 card">
                                <div className="flex items-start justify-between">
                                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">{subscriptions.length}</h2>
                                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{subscriptions.length * 100 + "%"}</span>
                                    </span>
                                </div>
                                <p className="text-sm leading-none text-gray-600">Subscribers</p>
                            </div>
                            <div className="p-6 card">
                                <div className="flex items-start justify-between">
                                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">{freeUsers}</h2>

                                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{freeUsers * 100 + "%"}</span>
                                    </span>
                                </div>
                                <p className="text-sm leading-none text-gray-600">Free Subscribers</p>
                            </div>
                            <div className="p-6 card">
                                <div className="flex items-start justify-between">
                                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">{proUsers}</h2>
                                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{proUsers * 100 + "%"}</span>
                                    </span>
                                </div>
                                <p className="text-sm leading-none text-gray-600">Pro Subscribers</p>
                            </div>
                        </div>
                    </section>
                    <section className="px-4 py-12 mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <div className="card">
                                <div className="p-5">
                                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Total Income</p>
                                    <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">{"$" + total}</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="p-5">
                                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Expenses</p>
                                    <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">{"$" + expenses}</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="p-5">
                                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Last 30 days</p>
                                    <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">{"$" + total}</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    </>;
}

export default Dashboard;
