"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

import logo from '../../asset/empty_logo.png';


const TinderGetNumber = () => {

    const navigate = useNavigate(); // Initialize the useNavigate hook


    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState("US +1")
    const [showCountryDropdown, setShowCountryDropdown] = useState(false)

    // Sample country codes - in a real app, this would be more comprehensive
    const countryCodes = ["US +1", "UK +44", "CA +1", "AU +61", "IN +91", "DE +49", "FR +33"]

    const handlePhoneChange = (e) => {
        // Only allow numbers
        const value = e.target.value.replace(/\D/g, "")
        setPhoneNumber(value)
    }

    const handleCountrySelect = (country) => {
        setCountryCode(country)
        setShowCountryDropdown(false)
    }

    const toggleDropdown = () => {
        setShowCountryDropdown(!showCountryDropdown)
    }

    const handleClose = () => {
        // Handle close action
        console.log("Close button clicked")
        navigate("/")
    }

    return (
        <>

            {/* // desktop  */}
            <div className="hidden fixed inset-0 bg-white bg-opacity-50 md:flex items-center justify-center">
                <div className="w-full max-w-md p-6  border rounded-lg">
                    {/* Header with logo and close button */}
                    <div className="flex justify-between items-center mb-8">

                        <div >

                        </div>

                        <div>
                            <img src={logo} alt="logo" className="w-8" />
                        </div>



                        <button onClick={handleClose} className="text-gray-700">
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

                    {/* Main content */}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Can we get your number?</h1>

                        {/* Phone input section */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <label className="text-gray-700 font-medium">Country</label>
                                <label className="text-gray-700 font-medium">Phone Number</label>
                            </div>
                            <div className="flex gap-3">
                                {/* Country dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center justify-between w-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                                    >
                                        <span>{countryCode}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown menu */}
                                    {showCountryDropdown && (
                                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                                            {countryCodes.map((country) => (
                                                <button
                                                    key={country}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => handleCountrySelect(country)}
                                                >
                                                    {country}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Phone number input */}
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                    placeholder=""
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Verification message */}
                        <p className="text-gray-600 text-sm mb-6">
                            We'll text you a code to verify you're really you. Message and data rates may apply.{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                What happens if your number changes?
                            </a>
                        </p>
                    </div>

                    {/* Next button */}
                    <button

 onClick={() => navigate("/user-name")}

                        className={`w-full py-3 rounded-full text-center font-medium mt-8 ${phoneNumber.length > 0
                            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                            : "bg-gray-200 text-gray-500"
                            }`}
                        disabled={phoneNumber.length === 0}
                    >
                        Next
                    </button>
                </div>
            </div>




            {/* // mobile  */}
            <div className=" flex flex-col h-screen md:hidden bg-white md:max-w-6xl md:mx-auto">


                {/* Header */}

                <div className="flex justify-between items-center mb-8 px-4 py-2">
                    <div >

                    </div>

                    <div>
                        <img src={logo} alt="logo" className="w-8" />
                    </div>

                    <button onClick={handleClose} className="text-gray-700">
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







                {/* Main content */}
                <div className="flex-1 px-4 pb-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Can we get your number?</h1>

                    {/* Phone input section */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <label className="text-gray-700 font-medium">Country</label>
                            <label className="text-gray-700 font-medium">Phone Number</label>
                        </div>
                        <div className="flex gap-3">
                            {/* Country dropdown */}
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center justify-between w-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                                >
                                    <span>{countryCode}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown menu */}
                                {showCountryDropdown && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                                        {countryCodes.map((country) => (
                                            <button
                                                key={country}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                onClick={() => handleCountrySelect(country)}
                                            >
                                                {country}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Phone number input */}
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder=""
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Verification message */}
                    <p className="text-gray-600 text-sm mb-6">
                        We'll text you a code to verify you're really you. Message and data rates may apply.{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            What happens if your number changes?
                        </a>
                    </p>
                </div>











                {/* Next Button - Hidden in this view but included for consistency */}
                <div className="px-4 pb-8 opacity-1">

                    {/* Next button */}
                    <button
                        className={`w-full py-3 rounded-full text-center font-medium mt-8 ${phoneNumber.length > 0
                            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                            : "bg-gray-200 text-gray-500"
                            }`}
                        disabled={phoneNumber.length === 0}

                        onClick={() => navigate("/user-name")}


                    >
                        Next
                    </button>


                </div>












            </div>



        </>


    )
}

export default TinderGetNumber

