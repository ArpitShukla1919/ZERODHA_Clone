import React from 'react';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto my-8 px-4">
            {/* Hero Section */}
            <div className="px-0 sm:px-12 md:px-24 lg:px-48 text-center w-full sm:mt-20 pt-12 p-8 md:p-16 tracking-wide leading-relaxed ">
                <img
                    src="/landing.png"
                    className="w-full h-40 sm:h-auto mb-12 md:mb-16"
                    alt="Zerodha"
                />
                <h1 className="font-medium text-5xl sm:text-3xl md:text-5xl m-8 text-gray-700">
                    Invest in everything
                </h1>
                <h5 className="font-normal text-xl sm:text-lg md:text-xl text-gray-700 tracking-wide leading-relaxed">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </h5>
                <button className="mt-10 md:mt-12 font-medium text-lg sm:text-xl btn btn:sm sm:btn-lg my-5 w-fit sm:w-52 bg-[#387ed1] text-white sm:px-0 px-8 py-2 rounded">
                    Sign up for free
                </button>
            </div>

            {/* Trust Section */}
            <div className="mx-0 sm:mx-8 md:mx-24 h-full flex flex-col md:flex-row jufstify-between py-8 md:py-16 space-y-8 md:space-y-0">
                <div className="md:w-2/5 w-full space-y-8">
                    <h2 className="text-[32px] text-nowrap sm:text-2xl md:text-4xl font-medium text-gray-700">
                        Trust with confidence
                    </h2>
                    <div>
                        <h3 className="text-xl sm:text-lg md:text-xl font-medium text-gray-700">
                            Customer-first always
                        </h3>
                        <p className="text-gray-600 mt-2 tracking-wide leading-relaxed">
                            That’s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-lg md:text-xl font-medium text-gray-700">
                            No spam or gimmicks
                        </h3>
                        <p className="text-gray-600 mt-2 tracking-wide leading-relaxed">
                            No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-lg md:text-xl font-medium text-gray-700">
                            The Zerodha universe
                        </h3>
                        <p className="text-gray-600 mt-2 tracking-wide leading-relaxed">
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-lg md:text-xl font-medium text-gray-700">
                            Do better with money
                        </h3>
                        <p className="text-gray-600 mt-2 tracking-wide leading-relaxed">
                            With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>

                {/* Image and Links Section */}
                <div className="md:w-1/2 text-center my-5 md:my-0">
                    <a href="#">
                        <img src="/ecosystem.png" className="w-full h-auto" alt="Ecosystem" />
                    </a>
                    <div className="sm:flex  flex-col sm:flex-row space-x-0 sm:space-x-6 items-center justify-center mt-5">
                        <a href="#" className="text-blue-500 font-medium mt-2 mr-6 sm:mt-0">
                            Explore our products &rarr;
                        </a>
                        <a href="#" className="text-blue-500 font-medium mt-2 sm:mt-0">
                            Try Kite Demo &rarr;
                        </a>
                    </div>
                </div>
            </div>

            {/* Press Logos */}
            <div className="flex justify-center items-center mt-8 mb-16 md:mb-32">
                <a href="#">
                    <img
                        src="https://zerodha.com/static/images/press-logos.png"
                        className="w-full h-auto mt-5"
                        alt="Press Logos"
                    />
                </a>
            </div>

            {/* Pricing Section */}
            <div className="mx-0 sm:mx-8 md:mx-24 flex flex-col md:flex-row justify-between items-start md:items-center mb-20 md:mb-40">
                <div className="md:w-2/5 mb-8 md:mb-0">
                    <h1 className="text-[36px] sm:text-3xl md:text-4xl font-medium text-gray-600 ">
                        Unbeatable pricing
                    </h1>
                    <p className="text-md sm:text-base sm:font-normal mt-4 text-gray-700 tracking-wide leading-relaxed">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-blue-500 mt-4 inline-block font-medium">
                        See pricing &rarr;
                    </a>
                </div>

                <div className="md:w-3/5 sm:flex justify-start md:justify-end">
                    <div className="flex items-center text-start mr-4">
                        <img src="/pricing.svg" alt="Free Account Opening" className="w-24 h-24 md:w-32 md:h-32" />
                        <p className="text-xs -ml-4 text-gray-700">
                            Free account <br /> opening
                        </p>
                    </div>
                    <div className="flex items-center text-start mr-4">
                        <img src="/pricing.svg" alt="Free Equity Delivery" className="w-24 h-24 md:w-32 md:h-32" />
                        <p className="text-xs -ml-5 text-gray-700">
                            Free equity delivery <br /> and direct mutual funds
                        </p>
                    </div>
                    <div className="flex items-center text-start">
                        <img src="/other.svg" alt="Intraday and F&O" className="w-24 h-24 md:w-32 md:h-32" />
                        <p className="text-xs -ml-2 text-gray-700">
                            Intraday and <br /> F&O
                        </p>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="px-0 sm:px-8 md:px-24 flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2">
                    <img
                        src="/index.svg"
                        className="w-auto h-auto -mt-8"
                        alt="Varsity"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">
                        Free and open market education
                    </h1>
                    <p className="text-sm sm:text-base mt-12 text-gray-700">
                        Varsity, the largest online stock market education book in the world covering
                        everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="text-blue-500 mt-4 inline-block font-medium">
                        Varsity &rarr;
                    </a>
                    <p className="text-sm sm:text-base mt-12 text-gray-700">
                        TradingQ&A, the most active trading and investment community in India for all
                        your market-related queries.
                    </p>
                    <a href="#" className="text-blue-500 mt-4 inline-block font-medium">
                        TradingQ&A &rarr;
                    </a>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center justify-center mt-16 md:mt-32 text-gray-700 font-medium">
                <h2 className="text-[36px] sm:text-2xl md:text-3xl text-center my-6 sm:my-12">
                    Open a Zerodha Account
                </h2>
                <p className="text-md font-normal sm:text-md text-gray-600 text-center leading-relaxed">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button className="mt-8 md:mt-12 font-medium text-lg sm:text-xl btn btn-lg my-5 w-fit sm:px-0 px-4 sm:w-52 bg-[#387ed1] text-white py-2 rounded">
                    Sign up for free
                </button>
            </div>
        </div>
    );
};

export default Home;
