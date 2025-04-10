"use client"

import { useState } from "react"
import logo1 from "../../asset/logo1.PNG";
import logo2 from "../../asset/logo2.PNG";
import logo3 from "../../asset/logo3.PNG";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {

    const navigate = useNavigate();


    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [pushNotifications, setPushNotifications] = useState(true)
    const [readReceipts, setReadReceipts] = useState(true)
    const [activityStatus, setActivityStatus] = useState(true)
    const [recentlyActive, setRecentlyActive] = useState(true)
    const [superLikesContent, setSuperLikesContent] = useState(true)
    const [topPicksContent, setTopPicksContent] = useState(true)
    const [distance, setDistance] = useState(25)
    const [ageRange, setAgeRange] = useState([18, 35])

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                <button className="text-gray-500"></button>
                <h1 className="text-lg font-semibold">Settings</h1>
                <button className="text-pink-500 font-medium" onClick={() => navigate("/home")}>Done</button>
            </div>





            {/* Main Content */}
            <div className="px-4 my-2 space-y-3">
                {/* Account Settings */}
                <button className="py-4 flex items-center justify-center  w-full px-4 bg-white rounded-xl"
                    onClick={() => navigate("/package/platinum")}
                >
                    <div className="flex flex-col items-center justify-center ">

                        <img src={logo2} alt="logo1" className="w-44 mb-2" />

                        <p className="text-xs text-gray-500">Level up every action you take on Tinder</p>

                    </div>
                </button>

                {/* Tinder Plus/Gold */}
                <button className="py-4 flex items-center justify-center  w-full px-4 bg-white"
                    onClick={() => navigate("/package/gold")}
                >
                    <div className="flex flex-col items-center justify-center  ">

                        <img src={logo3} alt="logo1" className="w-44 mb-2" />

                        <p className="text-xs text-gray-500">Unlimit Like & More!</p>

                    </div>
                </button>

                {/* Verification */}
                <button
                    onClick={() => navigate("/package/plus")}
                    className="py-4  flex items-center justify-center  w-full px-4 bg-white">
                    <div className="flex flex-col items-center justify-center  ">

                        <img src={logo1} alt="logo1" className="w-36 mb-1" />

                        <p className="text-xs text-gray-500">See Who Likes You & More</p>

                    </div>
                </button>

                {/* Remaining */}
                <button
                    onClick={() => navigate("/package/all-plans")}
                    className=" relative pb-4  flex items-center justify-center  w-full px-4 bg-white">
                    <div className="flex flex-col  items-center justify-center  ">

                        {/* <img src={logo1} alt="logo1" className="w-36 mb-1" /> */}
                        <div className="relative -top-4 p-2 bg-white shadow-lg rounded-full">

                            <svg className="fill-purple-600 text-purple-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                        </div>

                        <h1>0 remaining</h1>

                        <p className="text-xs text-purple-600">Goto Moro Boosts</p>

                    </div>
                </button>

                {/* Go incognito */}
                <button
                    onClick={() => navigate("/package/boost")}
                    className=" relative py-4  flex items-center justify-center  w-full px-4 bg-white">
                    <div className="flex flex-col  items-center justify-center  ">

                        {/* <img src={logo1} alt="logo1" className="w-36 mb-1" /> */}
                        <div className="relative  p-2 bg-white shadow-lg rounded-full">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>                        </div>

                        <p className="text-xs text-gray-600">Go Incognito</p>

                    </div>
                </button>

                {/* Account Settings */}
                <div className="py-2 text-sm">
                    <h3 className="text-xs font-medium text-gray-500 py-2">ACCOUNT SETTINGS</h3>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Manage Payment Account</span>

                        <div className="flex items-center">
                            {/* <span className="text-gray-400">Verified</span> */}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Restore Purchases</span>

                        <div className="flex items-center">
                            {/* <span className="text-gray-400">Verified</span> */}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Email</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">test@gmail.com</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Phone Number</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">151276779403</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Connected Accounts</span>

                        <div className="flex items-center">
                            {/* <span className="text-gray-400">Verified</span> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>

                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Promo Code</span>

                        <div className="flex items-center">
                            {/* <span className="text-gray-400">Verified</span> */}
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg> */}

                        </div>

                    </button>



                    {/* 
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Show Email</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-email"
                                id="toggle-email"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={showEmail}
                                onChange={() => setShowEmail(!showEmail)}
                            />
                            <label
                                htmlFor="toggle-email"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${showEmail ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Show My Phone</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-phone"
                                id="toggle-phone"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={showPhone}
                                onChange={() => setShowPhone(!showPhone)}
                            />
                            <label
                                htmlFor="toggle-phone"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${showPhone ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div> */}




                </div>

                {/* Discovery Settings */}
                <button className="py-4 flex items-center justify-center  w-full px-4 bg-white">
                    <div className="flex flex-col  justify-center gap-2 text-xs text-left  ">
                        <p>Verified Phone Number and Email help secure your account</p>
                        <h1>PREMIUM DISCOVERY</h1>
                        <p>Preferences show you people you people who match your vibe, but won't limit who you see - you'll still be able ti match will people outside of your selections.</p>

                    </div>


                </button>


                <div className="py-2 border-b border-gray-100 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-800">Distance</span>
                        <span className="text-gray-400">{distance} mi.</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                </div>


                {/* bio start  */}

                <div className="text-sm divide-y">


                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Interest</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Loogking for</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Add Languages</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Add languages</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Zodiac</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Education</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Family Plans</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">COVID Vaccine</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Personality Type</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Communication Style</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Love Style</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Pets</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>


                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Drinking</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>


                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Smoking</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>


                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Workout</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Dietary Preference</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Social Media</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100 ">
                        <span className="text-gray-800">Sleeping Habits</span>

                        <div className="flex items-center">
                            <span className="text-gray-400">select</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </div>




                    </button>





                </div>





                {/* bio end   */}



                {/* Discovery Settings start  */}

                <div className="py-2 border-t border-gray-200 text-sm">
                    <h3 className="text-xs font-medium text-gray-500 py-2">DISCOVERY SETTINGS</h3>


                    <div className="py-2 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-800">Distance</span>
                            <span className="text-gray-400">{distance} mi.</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only show people within this distance</p>
                    </div>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Looking For</span>
                        <span className="text-gray-400">Women</span>
                    </button>

                    <div className="py-2 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-800">Age Range</span>
                            <span className="text-gray-400">
                                {ageRange[0]}-{ageRange[1]}
                            </span>
                        </div>
                        <div className="relative mt-2">
                            <input
                                type="range"
                                min="18"
                                max="100"
                                value={ageRange[0]}
                                onChange={(e) => setAgeRange([Number.parseInt(e.target.value), ageRange[1]])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <input
                                type="range"
                                min="18"
                                max="100"
                                value={ageRange[1]}
                                onChange={(e) => setAgeRange([ageRange[0], Number.parseInt(e.target.value)])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Only show people in this age range</p>
                    </div>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Global</span>
                        <span className="text-gray-400">Off</span>
                    </button>
                </div>





                {/* Discovery Settings end  */}





                {/* Control Who Sees You */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">CONTROL WHO SEES YOU</h3>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Standard</span>
                        <span className="text-pink-500 font-medium">Select</span>
                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Only People I've Liked</span>
                        <span className="text-gray-400">Select</span>
                    </button>
                </div>

                {/* Read Receipts */}
                <div className="py-2 border-t border-gray-200">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div>
                            <h3 className="text-gray-800">Read Receipts</h3>
                            <p className="text-xs text-gray-500">When enabled, matches can see when you've read their messages</p>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-receipts"
                                id="toggle-receipts"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={readReceipts}
                                onChange={() => setReadReceipts(!readReceipts)}
                            />
                            <label
                                htmlFor="toggle-receipts"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${readReceipts ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>
                </div>

                {/* Activity Status */}
                <div className="py-2 border-t border-gray-200">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div>
                            <h3 className="text-gray-800">Activity Status</h3>
                            <p className="text-xs text-gray-500">When enabled, matches can see when you were last active on Tinder</p>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-activity"
                                id="toggle-activity"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={activityStatus}
                                onChange={() => setActivityStatus(!activityStatus)}
                            />
                            <label
                                htmlFor="toggle-activity"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${activityStatus ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>
                </div>

                {/* Recently Active */}
                <div className="py-2 border-t border-gray-200">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div>
                            <h3 className="text-gray-800">Recently Active Status</h3>
                            <p className="text-xs text-gray-500">
                                When enabled, your profile may be shown more to people who are actively using Tinder
                            </p>
                        </div>
                        {/* <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-recently"
                                id="toggle-recently"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={recentlyActive}
                                onChange={() => setRecentlyActive(!recentlyActive)}
                            />
                            <label
                                htmlFor="toggle-recently"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${recentlyActive ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div> */}
                    </div>
                </div>

                {/* Notifications */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">NOTIFICATIONS</h3>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Email</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-email-notif"
                                id="toggle-email-notif"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={emailNotifications}
                                onChange={() => setEmailNotifications(!emailNotifications)}
                            />
                            <label
                                htmlFor="toggle-email-notif"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${emailNotifications ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Push Notifications</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-push"
                                id="toggle-push"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={pushNotifications}
                                onChange={() => setPushNotifications(!pushNotifications)}
                            />
                            <label
                                htmlFor="toggle-push"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${pushNotifications ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>
                </div>

                {/* Content Preferences */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">CONTENT PREFERENCES</h3>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Super Likes Content</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-superlikes"
                                id="toggle-superlikes"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={superLikesContent}
                                onChange={() => setSuperLikesContent(!superLikesContent)}
                            />
                            <label
                                htmlFor="toggle-superlikes"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${superLikesContent ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">Top Picks Content</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-toppicks"
                                id="toggle-toppicks"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={topPicksContent}
                                onChange={() => setTopPicksContent(!topPicksContent)}
                            />
                            <label
                                htmlFor="toggle-toppicks"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${topPicksContent ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>
                </div>

                {/* Payment Account */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">PAYMENT ACCOUNT</h3>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Manage Payment Account</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Restore Purchases</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Legal */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">LEGAL</h3>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Privacy Policy</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Terms of Service</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Licenses</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Help & Support */}
                <div className="py-2 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 py-2">HELP & SUPPORT</h3>

                    <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
                        <span className="text-gray-800">Help & Support</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Logout Button */}
                <div className="py-4 border-t border-gray-200">
                    <button className="w-full text-center text-pink-500 font-medium py-2">Log Out</button>
                </div>

                {/* Delete Account */}
                <div className="py-2">
                    <button className="w-full text-center text-gray-500 py-2">Delete Account</button>
                </div>

                {/* Version */}
                <div className="py-4 text-center">
                    <p className="text-xs text-gray-400">Version 12.4.0</p>
                </div>
            </div>

            {/* Custom CSS for toggle switches */}
            <style jsx>{`
        .toggle-checkbox:checked {
          transform: translateX(100%);
          border-color: #ec4899;
        }
        .toggle-label {
          transition: background-color 0.2s ease-in;
        }
        input[type=range] {
          -webkit-appearance: none;
          height: 7px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
        }
      `}</style>





        </div>
    )
}

export default SettingsPage

