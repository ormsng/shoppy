import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Outlet } from "react-router";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MiniProduct from './MiniProduct';
import { logInAction } from '../redux/actions/userActions';
import { logOut } from '../user_api/user';
import axios from 'axios';


export function Navbar() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const products = useSelector((state) => state.allProducts);
    const user = useSelector((state) => state.user);
    const { cart } = products;
    const current_price = cart.length > 0 ? cart.map((prod) => JSON.parse(prod)).reduce((a, b) => ({ price: a.price + b.price })).price.toFixed(2) : 0;

    const [isOpen, setIsOpen] = useState(false);
    const [toggleBox, setToggleBox] = useState(false);
    const [toggleUserBox, setUserToggleBox] = useState(false);


    async function getUser() {
        return axios({
            method: 'get',
            withCredentials: true,
            url: 'https://orms-shoppy.herokuapp.com/user'
        }).then(async (res) => {
            if (res.data) dispatch(logInAction(res));

        });
    }
    useEffect(() => {
        getUser();
    }
        // eslint-disable-next-line 
        , [])
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center ">
                            <Link to="/">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-35"
                                        src="https://i.imgur.com/9ipca1Q.png"
                                        alt="Workflow"
                                    />
                                </div>
                            </Link>
                            <div className="flex-shrink-0 flex items-center">
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-end h-16 ">

                                <div className="hidden md:block ">
                                    <div className="ml-10 flex items-baseline space-x-4 ">
                                        <div className="relative group " onMouseEnter={() => {
                                            setToggleBox(true)
                                            setUserToggleBox(false);
                                        }}
                                            onMouseLeave={() => {
                                                setTimeout(() => {
                                                    setToggleBox(false);
                                                }, 900);
                                            }}

                                        >

                                            <div slot=" icon" className="relative">
                                                <div id="first"

                                                    className=" cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    <i className="fas fa-shopping-cart"></i>
                                                </div>
                                                <div className=" absolute text-xs rounded-full -mt-0.5 -mr-1.5 px-1 font-bold top-0 right-0 bg-red-700 text-white ">{cart.length}</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart w-6 h-0">

                                                </svg>
                                            </div>

                                            <div id="dropdownButton"

                                                className={`absolute z-10 bg-grey-200 group-hover:block ${!toggleBox ? " hidden" : "visible"}`}

                                            >
                                                {cart.length === 0 ? <div className=" bg-white flex justify-center block px-4 py-2 text-normal text-gray-900 w-48 shadow-xl">Your cart is empty 😟</div> : <div className="absolute top-1 right-28 w-full rounded-b border-t-0 z-10  ">
                                                    <div className="shadow-xl w-64 ">
                                                        {cart.map((product) => <MiniProduct key={Math.random()} product={JSON.parse(product)} />)}
                                                        <div className="p-4 justify-center flex bg-white">

                                                            {!user.loggedIn ? (<button onClick={(e) => setShowModal
                                                                (true)} className="text-base  bg-white undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
            hover: bg-teal-700 hover: text-teal-100
            bg-teal-100
            text-teal-700
            border duration-200 ease-in-out
            border-teal-600 transition">Checkout ${current_price}
                                                            </button>
                                                            )
                                                                : (

                                                                    <Link to="/checkout"
                                                                        onClick={(e) => setShowModal
                                                                            (false)}
                                                                        className="text-base  bg-white undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover: bg-teal-700 hover: text-teal-100
                bg-teal-100
                text-teal-700
                border duration-200 ease-in-out
                border-teal-600 transition">Checkout ${current_price}

                                                                    </Link>
                                                                )
                                                            }
                                                            {showModal ? (
                                                                <>
                                                                    <div
                                                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                                    >
                                                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                                                    <h3 className="text-3xl font-semibold">
                                                                                        Log In
                                                                                    </h3>
                                                                                    <button
                                                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                                        onClick={() => setShowModal(false)}
                                                                                    >
                                                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                                            ×
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="relative p-6 flex-auto">

                                                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                                        You must be logged in to checkout.
                                                                                    </p>
                                                                                </div>
                                                                                {/*footer*/}
                                                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                                    <button onClick={() => setShowModal(false)} type="button" className=" m-2 w-full px-3 py-4 text-white font-semibold bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" >Close</button>

                                                                                    <Link to="/login" onClick={() => setShowModal(false)} type="button" className=" flex items-center justify-center
                hover: bg-white text-blue-700 font-semibold  m-2 w-full py-4 px-3 border border-blue-500 rounded-md text-white  " > Log in	</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                                </>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                </div>
                                                }
                                            </div>
                                        </div>
                                        {user.loggedIn ? <div className="relative group">
                                            <div
                                                onMouseEnter={() => {
                                                    setUserToggleBox(true)
                                                    setToggleBox(false);
                                                }}
                                                onMouseLeave={() => {
                                                    setTimeout(() => {
                                                        setUserToggleBox(false);
                                                    }, 500);
                                                }}
                                                className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                <i className="fas fa-user"></i>
                                            </div>

                                            <div className={`absolute z-10 bg-grey-200 group-hover:block ${!toggleUserBox ? " hidden" : "visible"}`}>

                                                <div className="absolute top-1.5 left-24 w-full  rounded-b border-t-0 z-10">
                                                    <div className="shadow-xl w-64">

                                                        <div className="absolute right-0 w-40 py-2 bg-white border  shadow-xl">
                                                            <Link to="/history" className=" cursor-pointer block px-4 py-2 text-normal text-gray-900 hover:bg-gray-300 hover:text-white">History</Link>
                                                            <div className="py-2">
                                                                <hr></hr>
                                                            </div>
                                                            <div onClick={() => logOut(dispatch)} className="cursor-pointer block px-4 py-2 text-normal text-gray-900 hover:bg-gray-300 hover:text-white">
                                                                Logout
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                            : <div className="relative group">
                                                <div
                                                    onMouseEnter={() => {
                                                        setUserToggleBox(true)
                                                        setToggleBox(false);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setTimeout(() => {
                                                            setUserToggleBox(false);
                                                        }, 500);
                                                    }}
                                                    className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    <i className="fas fa-user"></i>
                                                </div>

                                                <div className={`absolute z-10 bg-grey-200 group-hover:block ${!toggleUserBox ? " hidden" : "visible"}`}>

                                                    <div className="absolute top-1.5 left-24 w-full  rounded-b border-t-0 z-10">
                                                        <div >
                                                            <div className="absolute right-0 w-40 py-2 bg-white border  shadow-xl">

                                                                <Link to="/login" className="cursor-pointer block px-4 py-2 text-normal text-gray-900  hover:bg-gray-300 hover:text-white">
                                                                    Login
                                                                </Link>
                                                            </div>
                                                            :
                                                            <div>

                                                            </div>




                                                        </div>

                                                    </div>
                                                </div>
                                            </div>}

                                        {/* <div
                                        
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <i class="fas fa-info-circle"></i>
                                     /div> */}
                                    </div>
                                </div>
                            </div >
                        </div >
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div >
                </div >

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/"

                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link to="/checkout"

                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Checkout
                                </Link>
                                {!user.loggedIn ?
                                    <Link to="/login"

                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Login
                                    </Link>

                                    :
                                    <button
                                        onClick={() => logOut(dispatch)}

                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Logout
                                    </button>}

                                <div

                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    History
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Outlet></Outlet>
                </div>
            </main>
        </div >
    );
}

export default Navbar;