import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios';
import catchError from '../../../../utils/catchErrors';
import { useDispatch } from "react-redux";
import { posttoast, delaccount } from "../../../../JS/Actions/actions"
import baseUrl from '../../../../utils/baseUrl'

function Closeaccount({ open, setOpen, item }) {

    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const cancelButtonRef = useRef(null)
    const [text, setText] = useState("")

    const handleCloseError = e => {
        e.preventDefault();
        setErrorMsg(null)
    }

    const handlePriceChange = e => {
        setText(e.target.value)
    }

    const handleCloseaccount = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        if (text === "") {
            setFormLoading(false)
            setErrorMsg("Please fill Id before sumbit")
            return
        }
        try {
            const { data } = await axios.delete(
                `${baseUrl}/api/admin/closeaccount`,
                {
                    withCredentials: true,
                    params: { id: item._id }
                }
            )
            setFormLoading(false)
            setText("")
            dispatch(delaccount(data.subscriber._id))
            dispatch(posttoast({ toast: { state: 'success', text: 'Account closed successfully!', show: true } }))
            setErrorMsg(null)
            setOpen(false)
        } catch (error) {
            setFormLoading(false);
            const errorMsg = catchError(error);
            setErrorMsg(errorMsg.msg);
            console.log(error);
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    {formLoading ?
                        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
                            <span className="text-blue-500 opacity-75 right-10 top-60 my-0 mx-auto block relative w-0 h-0">
                                <svg xmlns="http://www.w3.org/2000/svg"  >
                                    <circle cx="50" cy="50" fill="none" stroke="#1d3f72" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                                    </circle>
                                </svg>
                            </span>
                        </div>
                        : ""
                    }
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                            <div>
                                {errorMsg !== null ?
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Holy smokes!</strong>
                                        <span className="block sm:inline"> {errorMsg}</span>
                                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                            <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                        </span>
                                    </div>
                                    :
                                    ""}
                            </div>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Close Account permentally.
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 mb-4">
                                                Are you sure you have permission from subscriber to his close ?
                                            </p>
                                            <hr />
                                            <p className="text-sm text-gray-500 mb-4">
                                                Type subscriber id to confirm {item._id}
                                            </p>
                                            <br />
                                            <div className="flex">
                                                <label className="my-auto mr-2 ">ID: </label>
                                                <input
                                                    type="ID"
                                                    className="mt-1 bg-gray-100 focus:ring-gray-500 focus:border-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    value={text}
                                                    onChange={handlePriceChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className={`${text !== item._id ? "cursor-not-allowed" : ""} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
                                    onClick={handleCloseaccount}
                                    disabled={text !== item._id ? true : false}
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Closeaccount
