import React from 'react';

const FooterList = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-12 lg:col-3">
                <h5 className="text-lg text-gray-700 font-medium mb-4">Company</h5>
                <ul className="text-gray-600 font-normal list-none space-y-2">
                    <li><h6 className="hover:text-[#387ed1]">About</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Products</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Pricing</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Referral Programme</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Careers</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Press & media</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Zerodha Cares (CSR)</h6></li>
                </ul>
            </div>

            <div className="col-12 lg:col-3">
                <h5 className="text-lg text-gray-700 font-medium mb-4">Support</h5>
                <ul className="text-gray-600 font-normal list-none space-y-1">
                    <li><h6 className="hover:text-[#387ed1]">Contact</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Support Portal</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Z-Connect blog</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">List of charges</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Downloads & Resources</h6></li>
                </ul>
            </div>

            <div className="col-12 lg:col-3">
                <h5 className="text-lg text-gray-700 font-medium mb-4">Account</h5>
                <ul className="text-gray-600 font-normal list-none space-y-1">
                    <li><h6 className="hover:text-[#387ed1]">Open an account</h6></li>
                    <li><h6 className="hover:text-[#387ed1]">Fund Transfer</h6></li>
                </ul>
            </div>
        </div>
    );
}

export default FooterList;
