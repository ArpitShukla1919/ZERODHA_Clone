import React from 'react';
import FooterList from './Footerlist';

const Footer = () => {
    return (
        <footer className="bg-white border-t py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    {/* Left section */}
                    <div className="w-full lg:w-3/12 mb-4 lg:mb-0">
                        <img
                            src="https://zerodha.com/static/images/logo.svg"
                            className="h-6 w-36 mb-3"
                            alt="Zerodha Logo"
                        />
                        <h5 className="text-gray-700 text-lg sm:text-xl font-medium flex items-center">
                            <i className="fas fa-phone-alt mr-2"></i>
                            080 47181888
                        </h5>
                        <small className="text-gray-600 block mt-2">
                            &copy; 2010 - 2024, Zerodha Broking Ltd.
                            <br />
                            All rights reserved.
                        </small>
                        {/* Social Icons */}
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-facebook-square fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-linkedin-in fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Footer lists */}
                    <FooterList />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
