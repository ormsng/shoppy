import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../user_api/user';
import { useDispatch } from 'react-redux';

export default function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [userExists, setUserExists] = useState(false);
    const dispatch = useDispatch();

    return (
        //min-h-screen
        <div className="flex items-center bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
                        <p className="text-gray-500 dark:text-gray-400">Create your account</p>
                    </div>
                    <div className="m-7">
                        <form action="">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onChange={(e) => setRegisterEmail(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onChange={(e) => setRegisterPassword(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-4 text-white bg-gray-800 rounded-md focus:bg-gray-800 focus:outline-none" onClick={() => {
                                    register(registerEmail, registerPassword, dispatch, setUserExists);
                                }}>Sign up</button>
                            </div>
                            {
                                userExists ? <p className="text-sm text-center text-red-500 py-2">User already exists!</p> : null
                            }
                            <div> <p className="text-sm text-center text-gray-400">Already have an account? <Link to="/login" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Log in</Link>.</p> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
