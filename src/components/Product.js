import React from 'react';

const Product = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36 xl:mx-72 mt-12 md:mt-24 lg:mt-36 tracking-wide leading-relaxed">
            <div className="text-center mb-16 md:mb-24 lg:mb-32">
                <h2 className="text-5xl sm:text-4xl lg:text-5xl font-medium text-gray-600 mt-16 mb-8 sm:my-6 lg:my-8">
                    Zerodha Products
                </h2>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-base text-gray-700">
                    Sleek, modern, and intuitive trading platforms
                </h4>
                <h4 className="text-md sm:text-lg lg:text-lgg font-normal my-2 lg:my-4">
                    Check out our <a href='#' className='text-blue-500'>investment offerings →</a>
                </h4>
            </div>

            <hr className='w-screen sm:w-auto -mx-8 sm:mx-0'/>

            <div className="flex flex-col lg:flex-row items-center justify-between my-10 md:my-20 gap-x-0 md:gap-x-20 lg:gap-x-40">
                <div className="lg:w-10/12">
                    <img src="https://zerodha.com/static/images/products-kite.png" className='h-full w-full' alt="Kite" />
                </div>
                <div className="lg:w-5/12 mt-5 tracking-wide leading-relaxed">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4">Kite</h1>
                    <p className="mb-4 text-gray-700">
                        Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                    </p>
                    <a href="#" className="text-blue-500">
                        Learn More &rarr;
                    </a>

                    <div className="flex mt-3">
                        <div className="w-1/2">
                            <a href="#">
                                <img
                                    src="https://zerodha.com/static/images/google-play-badge.svg"
                                    className="h-10 w-[120px] sm:w-[150px]"
                                    alt="Google Play Badge"
                                />
                            </a>
                        </div>
                        <div className="w-1/2">
                            <a href="#">
                                <img
                                    src="https://zerodha.com/static/images/appstore-badge.svg"
                                    className="ml-4 h-10 w-[120px] sm:w-[150px]"
                                    alt="App Store Badge"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-col lg:flex-row my-20  items-center justify-between">
                <div className="lg:w-4/12 mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4">Console</h1>
                    <p className="text-gray-700 mb-4">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations.</p>
                    <a href="#" className="text-blue-500 ">Learn More &rarr;</a>
                </div>

                <div className="lg:w-6/12 mt-5">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-console.png" className="w-full h-auto" alt="Console" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row my-20 items-center justify-between gap-y-5 md:gap-x-20 lg:gap-x-40">
                <div className="lg:w-7/12">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-coin.png" className="w-full h-auto" alt="Coin" />
                    </a>
                </div>
                <div className="lg:w-4/12 mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4">Coin</h1>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <a href="#" className="text-blue-500">Coin &rarr;</a>
                    <div className="flex mt-3">
                        <div className="w-1/2">
                            <a href="#">
                                <img
                                    src="https://zerodha.com/static/images/google-play-badge.svg"
                                    className="h-10 w-[120px] sm:w-[150px]"
                                    alt="Google Play Badge"
                                />
                            </a>
                        </div>
                        <div className="w-1/2">
                            <a href="#">
                                <img
                                    src="https://zerodha.com/static/images/appstore-badge.svg"
                                    className="ml-4 h-10 w-[120px] sm:w-[150px]"
                                    alt="App Store Badge"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-col lg:flex-row my-20 items-center justify-between">
                <div className="lg:w-4/12 mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4">Kite Connect API</h1>
                    <p className="text-gray-700">Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base.</p>
                    <a href="#" className="text-blue-500">Kite Connect &rarr;</a>
                </div>

                <div className="lg:w-6/12 mt-5">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-kiteconnect.png" className="w-full h-auto" alt="Kite Connect API" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row my-20 items-center justify-between gap-y-5 lg:gap-x-40">
                <div className="lg:w-7/12">
                    <img src="https://zerodha.com/static/images/varsity-products.png" className="w-full h-auto" alt="Varsity Mobile" />
                </div>
                <div className="lg:w-4/12 mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4">Varsity mobile</h1>
                    <p className="mb-4 text-gray-700">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <a href="#" className="text-blue-500">Learn More &rarr;</a>

                    <div className="flex mt-3">
                        <div className="w-1/2">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/google-play-badge.svg" className="h-10 w-[120px] sm:w-[150px]" alt="Google Play Badge" />
                            </a>
                        </div>
                        <div className="w-1/2">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/appstore-badge.svg" className="ml-4 h-10 w-[120px] sm:w-[150px]" alt="App Store Badge" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center my-32 sm:my-28">
                <h2 className='text-xl sm:text-xl font-normal text-gray-700 px-4 tracking-wide leading-relaxed'>
                    Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/' className='text-blue-500 font-medium'>Zerodha.tech</a> blog.
                </h2>
                <h2 className="text-3xl text-nowrap sm:text-none sm:text-3xl lg:text-4xl font-medium text-gray-700 m-0 sm:m-8 mt-12 mb-8 sm:mt-28 px-4">
                    The Zerodha Universe
                </h2>
                <p className='mb-12 sm:mb-20 text-gray-700 font-normal px-4'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 sm:gap-4 sm:gap-y-20 items-center justify-center px-4 sm:px-0">
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#" >
                            <img src="/zerodhafundhouse.png" className="mx-auto w-40 h-12 sm:w-48 sm:h-16 mb-2" alt="fundhouse" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                            </small>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#">
                            <img src="/sensibull-logo.svg" className="mx-auto w-40 h-16 sm:w-48 sm:h-20 mb-2" alt="sensibull" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                            </small>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#">
                            <img src="/tijori.svg" className="mx-auto w-40 h-12 sm:w-48 sm:h-16 mb-2" alt="tijori" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                            </small>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#">
                            <img src="/streak-logo.png" className="mx-auto w-40 h-12 sm:w-48 sm:h-16 mb-2" alt="streak" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Systematic trading platform that allows you to create and backtest strategies without coding.
                            </small>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#">
                            <img src="/smallcase-logo.png" className="mx-auto w-40 h-12 sm:w-48 sm:h-16 mb-2" alt="smallcase" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                            </small>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="#">
                            <img src="/ditto-logo.png" className="mx-auto w-24 h-10 sm:w-32 sm:h-12 mb-2" alt="ditto" />
                            <small className="text-gray-400 font-medium text-xs sm:text-sm w-48 sm:w-60 block">
                                Personalized advice on life and health insurance. No spam and no mis-selling.
                            </small>
                        </a>
                    </div>
                </div>

                <button className="mt-8 md:mt-12 font-medium text-lg sm:text-xl  btn btn-lg my-5 w-fit sm:px-0 px-8 sm:w-52 bg-[#387ed1] text-white py-2 rounded">
                    Sign up for free
                </button>
            </div>

        </div>
    )
}

export default Product;
