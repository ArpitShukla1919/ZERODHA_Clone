import React from 'react';
import Profile from './Profile';

const About = () => {
    return (
        <div className="mt-10 sm:mt-16 lg:mt-36 px-4 md:px-16 lg:px-24"> {/* Adjust padding for different breakpoints */}
            <div className="text-center sm:mt-0 mt-16 mb-12 sm:mb-16 lg:mb-24">
                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl sm:mt-0 mt-8 font-medium text-gray-700 tracking-wide leading-normal">
                    We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <hr className="my-5 sm:mx-10  -mx-8 lg:mx-40 mb-10 lg:mb-28" />
            <div className="sm:mx-12 md:mx-24 lg:mx-60 lg:flex lg:justify-between gap-x-12">
                <div className="lg:w-1/2 mb-5 text-[#424242] font-normal lg:mb-0 tracking-wider leading-relaxed">
                    <p className="mb-4">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className="mb-4">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className="mb-4">Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="lg:w-1/2 mb-5 text-[#424242] font-normal lg:mb-0 tracking-wider leading-relaxed">
                    <p className="mb-4">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className="mb-4"><a href='https://rainmatter.com/' className='text-blue-500 font-semibold' >Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p className="mb-4">And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='https://zerodha.com/z-connect/' className='font-semibold text-blue-500' >blog</a> or see what the media is saying about us.</p>
                </div>
            </div>

            {/* Zerodha people details */}
            <div className="sm:mx-16 md:mx-24 mt-16 lg:mt-32 mb-12">
                <h1 className="text-center text-4xl sm:text-2xl lg:text-3xl text-gray-700 font-medium mt-24 mb-12">People</h1>
                <div className="lg:flex lg:justify-center lg:items-center gap-x-6">
                    <div className="lg:w-1/3 mb-5 lg:mb-0 text-center">
                        <img
                            src="https://zerodha.com/static/images/nithin-kamath.jpg"
                            className="h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72 rounded-full my-2 mx-auto"
                            alt="Nithin Kamath"
                        />
                        <h5 className="text-lg sm:text-xl text-gray-700 mt-4 font-medium">Nithin Kamath</h5>
                        <p className="text-gray-600 mt-2 sm:mt-4 mb-8 sm:mb-0">Founder, CEO</p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-10 font-normal text-gray-700 tracking-wider leading-relaxed">
                        <p className="mb-4">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p className="mb-4">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p className="mb-4">Playing basketball is his zen.</p>
                        <p>Connect on <a href='https://nithinkamath.me/' className='text-blue-500 font-medium '>Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary" className="font-medium text-blue-500">TradingQnA</a> / <a href="https://x.com/Nithin0dha" className="font-medium text-blue-500">Twitter</a></p>
                    </div>
                </div>
                <Profile />
            </div>
        </div>
    );
};

export default About;
