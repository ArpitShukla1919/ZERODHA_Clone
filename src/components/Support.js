import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <>
            {/* Full-width Blue Background Section */}
            <div className="mt-16 bg-blue-500 text-white pb-16 sm:py-10">
                <div className="container mx-auto px-4 lg:px-32 py-2 sm:py-10">
                    <div className='flex sm:flex-col lg:flex-row justify-between'>
                        <h1 className="text-lg lg:text-2xl font-semibold mb-6">Support Portal</h1>
                        <h1 className="text-md font-semibold mb-6 underline">Track Tickets</h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8'>
                        <div>
                            <p className="sm:block hidden text-lg lg:text-2xl mb-8">
                                Search for an answer or browse help topics to create a
                                <br className="hidden lg:block" />
                                ticket
                            </p>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                                    className="w-full p-4 shadow-md text-gray-700"
                                />
                            </div>

                            <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <a href="#" className="text-white font-semibold text-md underline">Track account opening</a>
                                <a href="#" className="text-white font-semibold text-md underline">Track segment activation</a>
                                <a href="#" className="text-white font-semibold text-md underline">Intraday margins</a>
                                <a href="#" className="text-white font-semibold text-md underline lg:col-span-3">Kite user manual</a>
                            </div>
                        </div>

                        <div>
                            {/* Featured news */}
                            <div className="text-start flex-1 items-center justify-center">
                                <h3 className="text-lg lg:text-xl font-semibold mb-2 py-4">Featured</h3>
                                <ol className="ml-6 space-y-6 list-decimal pl-5">
                                    <li>
                                        <a href="#" className="underline text-md lg:text-lg font-semibold" aria-label="Rights Entitlements listing in November 2024">
                                        Rights Entitlements listing in November 2024
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="underline text-md lg:text-lg font-semibold" aria-label="Surveillance measure on scrips - November 2024">
                                        Surveillance measure on scrips - November 2024
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 lg:px-32 py-8 mb-16">
                <h3 className="my-5 text-xl lg:text-2xl font-normal text-gray-600 text-start">To create a ticket, select a relevant topic</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                    <SupportCategory
                        title="Account opening"
                        icon="fas fa-plus-circle"
                        items={[
                            'Getting started',
                            'Online',
                            'Offline',
                            'Charges',
                            'Charges at Zerodha',
                            'Company, Partnership and HUF',
                            'Non Resident Indian (NRI)'
                        ]}
                    />
                    <SupportCategory
                        title="Your Zerodha Account"
                        icon="fas fa-user-plus"
                        items={[
                            'Login Credentials',
                            'Your Profile',
                            'Account Modification and Segment Addition',
                            'CMR & DP ID',
                            'Nomination',
                            'Transfer and conversion of shares'
                        ]}
                    />
                    <SupportCategory
                        title="Trading and Markets"
                        icon="fas fa-business-time"
                        items={[
                            'Trading FAQs',
                            'Kite',
                            'Margins',
                            'Product and order types',
                            'Corporate actions',
                            'Kite features',
                        ]}
                    />
                    <SupportCategory
                        title="Funds"
                        icon="fas fa-money-check"
                        items={[
                            'Fund withdrawal',
                            'Adding funds',
                            'Adding Bank Accounts',
                            'eMandates',
                        ]}
                    />
                    <SupportCategory
                        title="Console"
                        icon="fas fa-volleyball-ball"
                        items={[
                            'IPO',
                            'Portfolio',
                            'Funds statement',
                            'Profile',
                            'Reports',
                            'Referral Program'
                        ]}
                    />
                    <SupportCategory
                        title="Coin"
                        icon="fas fa-coins"
                        items={[
                            'Understanding mutual funds and Coin',
                            'Coin app',
                            'Coin Web',
                            'Transactions and reports',
                            'National Pension Scheme (NPS)',
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

const SupportCategory = ({ title, icon, items }) => {
    return (
        <div className="p-4 bg-white rounded-lg">
            <h5 className="text-dark flex items-center font-normal">
                <i className={`${icon} mr-2`}></i> {title}
            </h5>
            <ul className="mt-3">
                {items.map((item, index) => (
                    <li key={index} className='mb-3 ml-6'>
                        <Link className="space-y-4 block text-sm text-[#387ed1]">
                            <p>{item}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Support;
