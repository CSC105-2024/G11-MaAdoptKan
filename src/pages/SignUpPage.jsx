import React, { useState } from "react";


const SignUpPage = () => {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F1F0F0] bg-orange-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

                <div className="text-center mb-8">
                    <div className="text-5xl text-primaryO mb-2">
                        <span className="font-bold">Logo na</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#E97A28]">Ma Adopt Kan</h2>
                </div>


                <form className="space-y-6">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maadopt@gmail.com"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E97A28] focus:outline-none"
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="**********"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E97A28] focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder="Mitsuki"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E97A28] focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="surname" className="block text-sm font-medium text-gray-600">
                            Surname
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Tanaiwa"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E97A28] focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-600">
                            Tel.
                        </label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            placeholder="029927685"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E97A28] focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-6 text-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#E97A28] text-white font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#E97A28] transition"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center">

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;