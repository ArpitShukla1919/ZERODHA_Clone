import React from 'react';

const Pricing = () => {
    return (
        <div className="flex-1 justify-center items-center mx-auto sm:mt-[150px] mt-16">
            <div className="text-center mb-12 sm:mb-[100px]">
                <h1 className="text-5xl font-medium text-gray-600 mb-8">Charges</h1>
                <h5 className="text-xl font-normal text-gray-400">List of all charges and taxes</h5>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-wrap text-center justify-center mb-12 mx-auto sm:mx-40 tracking-wide leading-relaxed">
                <div className="w-full lg:w-1/3  text-center justify-center">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="Free equity delivery" className="mx-auto sm:h-auto sm:w-auto h-40 w-40 sm:p-10" />
                    <h2 className="text-3xl font-semibold text-gray-600">Free equity delivery</h2>
                    <p className="mt-6 text-gray-500">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="w-full lg:w-1/3  text-center justify-center">
                    <img src="https://zerodha.com/static/images/other-trades.svg" alt="Intraday and F&O trades" className="mx-auto sm:h-auto sm:w-auto h-40 w-40 sm:p-10" />
                    <h2 className="text-3xl font-semibold text-gray-600">Intraday and F&O trades</h2>
                    <p className="mt-6 text-gray-500">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className="w-full lg:w-1/3  text-center justify-center">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="Free direct MF" className="mx-auto sm:h-auto sm:w-auto h-40 w-40 sm:p-10" />
                    <h2 className="text-3xl font-semibold text-gray-600">Free direct MF</h2>
                    <p className="mt-6 text-gray-500">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>

            {/* Charges Explained */}
            <div className="sm:mx-44 text-gray-700">
                <p className="text-2xl font-medium text-gray-700 text-start">Charges explained</p>

                <div className="sm:flex sm:grid-cols-2 gap-x-16 my-6">
                    <div className="sm:w-1/2 w-full">
                        {[
                            { title: 'Securities/Commodities transaction tax', description: 'Tax by the government when transacting on the exchanges. Charged on both buy and sell sides when trading equity delivery.' },
                            { title: 'Transaction/Turnover Charges', description: 'Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. BSE has revised rates effective from December 2022.' },
                            { title: 'Call & trade', description: 'Additional charges of ₹50 per order for orders placed through a dealer at Zerodha.' },
                            { title: 'Stamp charges', description: 'Stamp charges by the Government of India for transacting in instruments on the stock exchanges.' },
                            { title: 'NRI brokerage charges', description: '₹100 per order for futures and options. Other charges apply based on the type of account.' },
                            { title: 'Account with debit balance', description: 'Any order placed will be charged ₹40 per executed order instead of ₹20 if the account is in debit.' },
                            { title: 'Investor\'s Protection Fund Trust (IPFT)', description: 'Charges vary for equity, futures, and options as specified by NSE.' }
                        ].map((charge, idx) => (
                            <div key={idx} className="mb-6">
                                <h2 className="text-lg mt-6 mb-4">{charge.title}</h2>
                                <small className="text-gray-600">{charge.description}</small>
                            </div>
                        ))}
                    </div>

                    <div className="sm:w-1/2 w-full">
                        {[
                            { title: 'GST', description: 'Tax levied by the government on services rendered. 18% of brokerage and SEBI charges.' },
                            { title: 'SEBI Charges', description: '₹10 per crore + GST charged by SEBI for regulating the markets.' },
                            { title: 'DP charges', description: '₹15.34 per scrip, charged when stocks are sold, irrespective of quantity.' },
                            { title: 'Pledging charges', description: '₹30 + GST per pledge request per ISIN.' },
                            { title: 'AMC (Account maintenance charges)', description: 'Zero charges for BSDA demat account below ₹4,00,000 in holdings. ₹300/year for non-BSDA accounts.' },
                            { title: 'Corporate action order charges', description: '₹20 plus GST for OFS, buyback, takeover, or delisting orders.' },
                            { title: 'Off-market transfer charges', description: '₹25 or 0.03% of transfer value (whichever is higher).' },
                        ].map((charge, idx) => (
                            <div key={idx} className="mb-6">
                                <h2 className="text-lg mt-6 mb-4">{charge.title}</h2>
                                <small className="text-gray-600">{charge.description}</small>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8">
                    <p className="text-lg text-gray-700 my-4">Disclaimer</p>
                    <small className="text-gray-600">
                        For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                    </small>
                </div>

                {/* Charges for account opening */}
                <div className="sm:mt-28 mt-16 mb-20">
                    <h2 className="text-2xl font-medium text-gray-700 mb-6">Charges for account opening</h2>
                    <table className="min-w-full table-auto border-collapse border rounded border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 border border-r-0 py-2 text-left text-gray-700 font-normal">Type of account</th>
                                <th className="px-4 border border-l-0 py-2 text-left text-gray-700 font-normal">Charges</th>

                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { accountType: 'Online account', charge: 'FREE' },
                                { accountType: 'Offline account', charge: 'FREE' },
                                { accountType: 'NRI account (offline only)', charge: '₹ 500' },
                                { accountType: 'Partnership, LLP, HUF, or Corporate accounts (offline only)', charge: '₹ 500' }
                            ].map((account, idx) => (
                                <tr key={idx}>
                                    <td className=" text-base px-4 py-2">{account.accountType}</td>
                                    <td className="">
                                        <button
                                            className={`ml-4 text-sm rounded px-2 py-0.5 my-3 font-normal ${account.charge == '₹ 500' ? 'bg-white text-black' : 'bg-green-500  text-white'
                                                }`}
                                        >
                                            {account.charge}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-gray-700 mb-6">Charges for optional value added services</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-200">
                        <thead className="">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700 font-normal">Service</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-normal">Billing Frequency</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-normal">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-t px-4 py-2">Tickertape</td>
                                <td className="border-t px-4 py-2">Monthly / Annual</td>
                                <td className="border-t px-4 py-2">Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td className=" px-4 py-2">Smallcase</td>
                                <td className=" px-4 py-2">Per transaction</td>
                                <td className=" px-4 py-2">Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td className=" px-4 py-2">Kite Connect</td>
                                <td className=" px-4 py-2">Monthly</td>
                                <td className=" px-4 py-2">Connect: 2000 | Historical: 2000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
