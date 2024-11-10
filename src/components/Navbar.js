import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <nav className="bg-white fixed top-0 left-0 right-0 border-b py-1 z-50">
                <div className="px-4 sm:px-6 lg:px-8 sm:mx-24 flex justify-between items-center py-3 md:py-4">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="https://zerodha.com/static/images/logo.svg"
                            alt="Logo"
                            className="h-4 w-28 sm:h-6 sm:w-32 lg:h-4 lg:w-36"
                        />
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 focus:outline-none z-50"
                    >
                        {!isOpen ? (
                            <>
                                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800"></span>
                            </>
                        ) : (
                            <div></div>
                        )}
                    </button>

                    {/* Desktop Menu (hidden on mobile) */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-12 text-md">
                        <ul className="flex space-x-6 xl:space-x-10">
                            <li>
                                <Link className="text-gray-500 hover:text-blue-500" to="/Signup">
                                    Signup
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-500 hover:text-blue-500" to="/About">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-500 hover:text-blue-500" to="/Product">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-500 hover:text-blue-500" to="/Pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-500 hover:text-blue-500" to="/Support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Fullscreen Mobile Menu (appears on mobile when menu is toggled) */}
                <div
                    className={`h-fit m-2 w-screen fixed inset-0 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0 bg-gray-200' : '-translate-x-full bg-transparent'} lg:hidden`}
                >

                    <div className="flex justify-end items-center py-4 px-2">
                        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="px-16">
                        <ul className="grid grid-cols-2 gap-4 text-md font-medium">
                            <li className="col-span-1">
                                <Link
                                    onClick={toggleMenu}
                                    className="text-gray-500 hover:text-blue-500"
                                    to="/Signup"
                                >
                                    Signup
                                </Link>
                            </li>
                            <li className="col-span-1">
                                <Link
                                    onClick={toggleMenu}
                                    className="text-gray-500 hover:text-blue-500"
                                    to="/About"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="col-span-1">
                                <Link
                                    onClick={toggleMenu}
                                    className="text-gray-500 hover:text-blue-500"
                                    to="/Product"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="col-span-1">
                                <Link
                                    onClick={toggleMenu}
                                    className="text-gray-500 hover:text-blue-500"
                                    to="/Pricing"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="col-span-1">
                                <Link
                                    onClick={toggleMenu}
                                    className="text-gray-500 hover:text-blue-500"
                                    to="/Support"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>

                        {/* Sign-up Button on Mobile */}
                        <div className="flex items-center justify-center m-8">
                            <button className="px-6 py-2 font-medium text-lg sm:text-xl bg-[#387ed1] text-white rounded-md w-fit sm:w-48">
                                Sign up for free
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
