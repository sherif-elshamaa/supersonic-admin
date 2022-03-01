import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Acountoverview() {
    const user = useSelector((states) => states.status.user)
    return (
        <>
            <div className="w-full h-full flex flex-col shadow overflow-hidden">
                <div className="mt-8 mx-auto md:ml-10 md:w-3/4 mb-8">
                    <h1 className="w-full mb-6 text-4xl text-gray-400">Acount overview</h1>
                    <article className="">
                        <h3 className="text-2xl text-gray-600">
                            Profile
                        </h3>
                        <section>
                            <table className="table-auto w-full text-gray-500">
                                <tbody>
                                    <tr>
                                        <td className=' tdstrong'>User ID</td>
                                        <td>{user.ID}</td>
                                    </tr>
                                    <tr>
                                        <td className=' tdstrong'>Full Name</td>
                                        <td>{user.firstName + ' ' + user.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td className=' tdstrong'>User Name</td>
                                        <td>{user.userName}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Acountoverview
