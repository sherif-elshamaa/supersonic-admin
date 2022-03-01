import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Editplans from './tools/Editplans';



function Plan({ item }) {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(true)
    }
    return <>
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {item.type}
                    </p>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {item.date}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    ${item.price}
                </p>
            </td>
            {item.type === "Free" ?
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                </td>
                :
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button onClick={handleClick} className="text-gray-600 hover:text-gray-900">
                        Edit plan
                    </button>
                </td>
            }
            <Editplans open={open} setOpen={setOpen} item={item} />
        </tr>
    </>;
}


function Plans() {
    const state = useSelector((state) => state);
    const [plans, setPlans] = useState(state.plans)
    useEffect(() => {
        setPlans(state.plans)
    },[state])
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
                                            Plan Type
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Price
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((item, i) => <Plan item={item} key={i} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>;
}

export default Plans;
