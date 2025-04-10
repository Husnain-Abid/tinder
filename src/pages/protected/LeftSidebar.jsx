"use client"

import { useState } from "react"
import avatar from "../../asset/avatar.jpg"
import { useNavigate } from "react-router-dom";

import logo1 from "../../asset/logo1.PNG";
import logo2 from "../../asset/logo2.PNG";
import logo3 from "../../asset/logo3.PNG";

import logo4 from "../../asset/empty_logo.png";


const LeftSidebar = ({ activeTab, setActiveTab }) => {

    const navigate = useNavigate();

    // const [activeTab, setActiveTab] = useState("matches")
    const [showReportPopup, setShowReportPopup] = useState(false)

    const handleTabChange = (tab) => {
        if (tab === "report") {
            setShowReportPopup(true)
        } else {
            setActiveTab(tab)
        }
    }



    // packages start


    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState(false)
    const [pushNotifications, setPushNotifications] = useState(false)
    const [readReceipts, setReadReceipts] = useState(false)
    const [activityStatus, setActivityStatus] = useState(false)
    const [recentlyActive, setRecentlyActive] = useState(false)
    const [superLikesContent, setSuperLikesContent] = useState(false)
    const [topPicksContent, setTopPicksContent] = useState(false)
    const [distance, setDistance] = useState(25)
    const [ageRange, setAgeRange] = useState([18, 35])

    // packages end

    console.log("activeTab", activeTab);


    return (
        <>


            <div className="flex flex-col h-screen bg-white shadow-md w-full max-w-md">

                {/* Top Header */}
                <div className="bg-gradient-to-r from-red-400 to-red-500 p-4 flex items-center justify-between">
                    {/* User Profile */}


                    {(activeTab === "matches" || activeTab === "messages") ?
                        (
                            <>


                                <div className="flex items-center cursor-pointer transition-all duration-200 hover:bg-red-600 hover:rounded-full px-2 py-1"


                                    onClick={() => handleTabChange("packages")}>

                                    <img
                                        src={avatar}
                                        alt="Profile"
                                        className="h-10 w-10 rounded-full border-2 border-white "
                                    />
                                    <span className="ml-2 text-white font-medium">Naini</span>

                                </div>



                            </>
                        ) : (
                            <>
                                <div className="flex items-center px-2 py-1" onClick={() => handleTabChange("matches")}>


                                    <img
                                        src={logo4}
                                        alt="Profile"
                                        className="h-10 w-10 bg-red-700 rounded-full p-2 hover:bg-red-600"
                                    />

                                </div>

                            </>
                        )}









                    {/* Action Icons */}
                    <div className="flex space-x-2">

                        {/* Packages Icon */}
                        {/* <button className="bg-red-700 p-2 rounded-full"
                            onClick={() => handleTabChange("packages")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white hover:text-red-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button> */}

                        {/* Search/Filter Icon */}
                        <button className="bg-red-700 p-2 rounded-full"
                            onClick={() => handleTabChange("hobbies")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white hover:text-red-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                        </button>

                        {/* Travel/Location Icon */}
                        <button className="bg-red-700 p-2 rounded-full"
                            onClick={() => navigate("/meeting")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-red-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </button>

                        {/* Security/Shield Icon */}
                        <button className="bg-red-700 p-2 rounded-full"
                            onClick={() => handleTabChange("report")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-red-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>
                        </button>

                    </div>


                </div>

                {/* Tab Navigation */}
                {(activeTab === "matches" || activeTab === "messages") && (
                    <div className="flex border-b border-gray-200">
                        <button
                            className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "matches" ? "text-red-500 border-b-2 border-red-500" : "text-gray-600"
                                }`}
                            onClick={() => handleTabChange("matches")}
                        >
                            Matches
                        </button>
                        <button
                            className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "messages" ? "text-red-500 border-b-2 border-red-500" : "text-gray-600"
                                }`}
                            onClick={() => handleTabChange("messages")}
                        >
                            Messages
                        </button>
                    </div>
                )}





                {/* Tab Content */}
                <div className="flex-grow overflow-y-auto pb-16">
                    {/* Matches Tab Content */}
                    {activeTab === "matches" && (
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <div className="bg-gradient-to-b from-red-400 to-red-500 rounded-lg w-48 h-64 mb-6"></div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Matching</h2>
                            <p className="text-gray-500 text-center max-w-xs">
                                Matches will appear here once you start to Like people. You can message them directly from here when
                                you're ready to spark up the conversation.
                            </p>
                        </div>
                    )}

                    {/* Messages Tab Content */}
                    {activeTab === "messages" && (
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Messages</h2>
                                <button className="text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center h-64">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 text-gray-300 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                                <p className="text-gray-500 text-center">No messages yet. Start a conversation with your matches!</p>
                            </div>
                        </div>
                    )}

                    {/* Hobbies Tab Content */}
                    {activeTab === "hobbies" && (

                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Goal-driven dating</h2>
                            <p className="text-gray-600 mb-4">Find people with similar relationship goals</p>

                            {/* Relationship Goals Grid */}
                            <div className="grid grid-cols-2 gap-4  overflow-y-auto no-scrollbar">
                                {/* Long-term partner */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Rose Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Long-term partner</h3>
                                </div>

                                {/* Free Tonight */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Moon Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Free Tonight</h3>
                                </div>

                                {/* Short-term fun */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Sparkle Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Short-term fun</h3>
                                </div>

                                {/* New friends */}
                                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Circles Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">New friends</h3>
                                </div>

                                {/* Long-term partner */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Rose Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Long-term partner</h3>
                                </div>

                                {/* Free Tonight */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Moon Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Free Tonight</h3>
                                </div>

                                {/* Short-term fun */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Sparkle Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Short-term fun</h3>
                                </div>

                                {/* New friends */}
                                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Circles Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">New friends</h3>
                                </div>

                                {/* Long-term partner */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Rose Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Long-term partner</h3>
                                </div>

                                {/* Free Tonight */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Moon Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Free Tonight</h3>
                                </div>

                                {/* Short-term fun */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Sparkle Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Short-term fun</h3>
                                </div>

                                {/* New friends */}
                                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Circles Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">New friends</h3>
                                </div>

                                {/* Long-term partner */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Rose Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Long-term partner</h3>
                                </div>

                                {/* Free Tonight */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Moon Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Free Tonight</h3>
                                </div>

                                {/* Short-term fun */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Sparkle Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Short-term fun</h3>
                                </div>

                                {/* New friends */}
                                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Circles Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">New friends</h3>
                                </div>

                                {/* Long-term partner */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Rose Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Long-term partner</h3>
                                </div>

                                {/* Free Tonight */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Moon Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Free Tonight</h3>
                                </div>

                                {/* Short-term fun */}
                                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Sparkle Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">Short-term fun</h3>
                                </div>

                                {/* New friends */}
                                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                                    <div className="mb-auto">
                                        {/* Circles Icon */}
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-32 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold">New friends</h3>
                                </div>

                            </div>

                        </div>

                    )}

                    {/* Meeting Log Tab Content */}
                    {/* {activeTab === "meeting" && (
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Meeting Log</h2>
                            <p className="text-gray-500 mb-6">Keep track of your meetings and dates with your matches.</p>
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold">Coffee with Sarah</h3>
                                        <span className="text-sm text-gray-500">2 days ago</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Met at Starbucks on Main Street. Great conversation!</p>
                                    <div className="flex space-x-2">
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Great</span>
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Coffee</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold">Dinner with Alex</h3>
                                        <span className="text-sm text-gray-500">1 week ago</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Italian restaurant downtown. Planning to meet again.</p>
                                    <div className="flex space-x-2">
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Excellent</span>
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Dinner</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-6 w-full py-3 bg-red-500 text-white rounded-full font-medium">Add New Meeting</button>
                        </div>
                    )} */}

                    {/* Packages Tab Content */}
                    {activeTab === "packages" && (
                        <div className="p-4 bg-gray-50 ">

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


                    )}


                </div>

                {/* Report Popup */}
                {showReportPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl w-full max-w-md p-6 mx-4">
                            <div className="flex justify-center items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Safety Toolkit</h2>

                            </div>

                            <div className="space-y-3">
                                <button className="w-full text-left p-3 border-b border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 fill-current me-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                        <line x1="4" x2="4" y1="22" y2="15" />
                                    </svg>
                                    REPORT
                                </button>

                                <button className="w-full text-left p-3 border-b border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700 fill-current me-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                    </svg>
                                    SAFETY TIPS
                                </button>

                            </div>


                            <div className="mt-3 flex space-x-3">
                                <button
                                    onClick={() => setShowReportPopup(false)}
                                    className="flex-1 py-2  text-gray-700 font-medium"
                                >
                                    Cancel
                                </button>
                            </div>


                        </div>
                    </div>
                )}


            </div>

        </>



    )
}

export default LeftSidebar
