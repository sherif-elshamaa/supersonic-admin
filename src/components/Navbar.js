import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios';
import cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signout } from '../JS/Actions/actions'
import baseUrl from '../utils/baseUrl'
import catchError from '../utils/catchErrors';
import {
  authorization,
  getsubscribers,
  getsubscribersdata,
  getsubscriptions,
  getcontactus,
  gettickests,
  getinvoice,
  getplans,
  posttoast
} from '../JS/Actions/actions'

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useNavigate()
  const [name, setName] = useState("")
  const [show, setShow] = useState(false)

  const [formLoading, setFormLoading] = useState(false);


  const handleRefresh = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {

      const info = await axios.get(`${baseUrl}/api/admin/getInfo`,{ withCredentials: true })
      console.log(info);
      dispatch(getsubscribers(info.data.subscriber));
      dispatch(getsubscribersdata(info.data.subscriberData));
      dispatch(getsubscriptions(info.data.subscription));
      dispatch(getcontactus(info.data.contactUs));
      dispatch(gettickests(info.data.ticket));
      dispatch(getinvoice(info.data.invoice));
      dispatch(getplans(info.data.plans));

      dispatch(posttoast({ toast: { state: 'success', text: 'All data has been updated.', show: true } }))
      setFormLoading(false)
    } catch (error) {
      setFormLoading(false);
      const errorMsg = catchError(error);
      console.log(errorMsg);
    }
  }

  useEffect(() => {
    const full = cookie.get("fullname")
    if (full !== "") {
      setName(full.toUpperCase())
    } else {

      setName("")
    }
  }, [name])
  const handleSignout = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`${baseUrl}/api/logout`,
      { withCredentials: true });

    const object = {
      isauthorized: false,
      user: [],
    }
    cookie.remove('fullname');
    cookie.remove('id');
    cookie.remove('connect.sid')
    localStorage.clear();
    dispatch(signout(object));
    history('/')
  }
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  }
  const handleLeave = (e) => {
    e.preventDefault();
    setShow(false);
  }
  return (
    <Popover className="z-20  relative bg-white" onMouseLeave={handleLeave} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 sm:h-20 md:justify-between md:space-x-10">
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
          <div className="flex justify-start h-20 w-20 lg:w-20  ">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-20 md:h-20 w-auto "
                src="/supersonic solutions-logos_black.png"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {name !== "" ?
            <div className="relative hidden  md:flex items-center justify-end   ">
              <button onClick={handleRefresh} className="hover:text-red-400 addMore" title="Refresh">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>

              <button onClick={handleShow} className="relative z-10 flex items-center p-2 bg-white  border border-gray-500 rounded-md focus:border-gray-600 focus:ring-opacity-40  focus:ring-gray-600  focus:ring  focus:outline-none">
                <span className="mx-1 text-base font-medium text-gray-500">{name}</span>
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                </svg>
              </button>


              <div className={`${show ? "" : "hidden"} absolute w-3/4 right-0 z-20  pt-2 mt-[127px] border border-gray-500 overflow-hidden bg-white rounded-md shadow-xl `}>
                <Link to="/profile" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="mx-1">
                    Profile
                  </span>
                </Link>
                <button onClick={handleSignout} className="flex items-center p-3 w-full -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="mx-1">
                    Sign out
                  </span>
                </button>
              </div>
            </div>
            :
            <div className="hidden md:flex items-center justify-end  lg:w-0">
              <Link to="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-600"
              >
                Sign up
              </Link>
            </div>}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-20 w-auto"
                    src="/supersonic solutions-logos_black.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {name !== "" ?
                <div className="mt-3 -ml-3  text-center text-base font-medium text-gray-500">
                  <Link to="/profile" className="flex text-gray-900 rounded-md  py-3 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {name}
                  </Link>
                </div> : ""
              }
            </div>
            <div className="py-6 px-5 space-y-6">
              {name ?
                <button onClick={handleSignout}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
                >
                  Sign out
                </button> :
                <div>
                  <Link to="/signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing account?{' '}
                    <Link to="/signin" className="text-gray-500 hover:text--500">
                      Sign in
                    </Link>
                  </p>
                </div>
              }
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
