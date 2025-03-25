"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../asset/logo.png";
import LoginPopup from "./Login";


const ResponsiveNavbar = ({ isOpen, onClose }) => {
    const [expandedSections, setExpandedSections] = useState({
        products: false,
        safety: false,
    })

    const toggleSection = (section) => {
        setExpandedSections({
            ...expandedSections,
            [section]: !expandedSections[section],
        })
    }

    const [showPopup, setShowPopup] = useState(false)


    if (!isOpen) return null

    return (
        <>

            <div className="block md:hidden fixed font-Proxima inset-0 bg-white z-50 overflow-y-auto">
                <div className="p-4  ">
                    {/* Header with Logo and Close Button */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Tinder Logo */}
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-40" />
                        </div>

                        {/* Close Button */}
                        <button onClick={onClose} className="text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col justify-between h-[85vh]">

                        <div>

                            {/* Products Section */}
                            <div className="mb-2">
                                <button
                                    className="w-full flex justify-between items-center p-3 bg-gray-100 text-pink-600 font-bold"
                                    onClick={() => toggleSection("products")}
                                >
                                    Products

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transition-transform ${expandedSections.products ? "rotate-180" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedSections.products && (
                                    <div className="pl-4 font-bold">
                                        <Link to="/premium" className="block py-3 text-gray-600">
                                            Premium Features
                                        </Link>
                                        <Link to="/subscription" className="block py-3 text-gray-600">
                                            Subscription Tiers
                                        </Link>
                                        <Link to="/plus" className="block py-3 pl-4 text-gray-600">
                                            Tinder Plus<sup>®</sup>
                                        </Link>
                                        <Link to="/gold" className="block py-3 pl-4 text-gray-600">
                                            Tinder Gold<sup>™</sup>
                                        </Link>
                                        <Link to="/platinum" className="block py-3 pl-4 text-gray-600">
                                            Tinder Platinum<sup>™</sup>
                                        </Link>
                                        <Link to="/select" className="block py-3 text-gray-600">
                                            Tinder SELECT<sup>™</sup>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Learn Section */}
                            <div className="mb-2">
                                <Link to="/about" className="block p-3 bg-gray-100 text-gray-800 font-bold">
                                    Learn
                                </Link>
                            </div>

                            {/* Safety Section */}
                            <div className="mb-2">
                                <button
                                    className="w-full flex justify-between items-center p-3 bg-gray-100 text-gray-800 font-bold"
                                    onClick={() => toggleSection("safety")}
                                >
                                    Safety
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transition-transform ${expandedSections.safety ? "rotate-180" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedSections.safety && (
                                    <div className="pl-4 font-bold">
                                        <Link to="/safety-tips" className="block py-3 text-gray-600">
                                            Safety Tips
                                        </Link>
                                        <Link to="/community-guidelines" className="block py-3 text-gray-600">
                                            Community Guidelines
                                        </Link>
                                        <Link to="/safety-policy" className="block py-3 text-gray-600">
                                            Safety and Policy
                                        </Link>
                                        <Link to="/safety-reporting" className="block py-3 text-gray-600">
                                            Safety & Reporting
                                        </Link>
                                        <Link to="/security" className="block py-3 text-gray-600">
                                            Security
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Support Section */}
                            <div className="mb-2">
                                <Link to="/support" className="block p-3 bg-gray-100 text-gray-800 font-bold">
                                    Support
                                </Link>
                            </div>

                            {/* Download Section */}
                            <div className="mb-8">
                                <Link to="/download" className="block p-3 bg-gray-100 text-gray-800 font-bold">
                                    Download
                                </Link>
                            </div>

                        </div>


                        <div>

                            {/* Login Button */}
                            <div className="mb-6">
                                <button onClick={() => setShowPopup(true)} className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg">
                                    Log in
                                </button>
                            </div>

                            {/* Language Selector */}
                            <div className="flex justify-center items-center text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                                <span>Language</span>
                            </div>


                        </div>

                    </div>







                </div>
            </div>


            <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />


        </>


    )
}

export default ResponsiveNavbar

