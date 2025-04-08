"use client"

import { useState } from "react"
import avatar from "../../asset/avatar.jpg"
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("matches")
    const [showReportPopup, setShowReportPopup] = useState(false)

    const handleTabChange = (tab) => {
        if (tab === "report") {
            setShowReportPopup(true)
        } else {
            setActiveTab(tab)
        }
    }




    return (
        <>


            <div className="flex flex-col h-screen bg-white shadow-md w-full max-w-md">
                
                {/* Top Header */}
                <div className="bg-gradient-to-r from-red-400 to-red-500 p-4 flex items-center justify-between">
                    {/* User Profile */}
                    <div className="flex items-center">
                        <img
                            src={avatar}
                            alt="Profile"
                            className="h-10 w-10 rounded-full border-2 border-white"
                        />
                        <span className="ml-2 text-white font-medium">Naini</span>
                    </div>



                    {/* Action Icons */}
                    <div className="flex space-x-2">

                        {/* Packages Icon */}
                        <button className="bg-red-700 p-2 rounded-full"
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
                        </button>

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
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Premium Packages</h2>
                            <p className="text-gray-500 mb-6">Upgrade your experience with our premium features.</p>
                            <div className="space-y-4">

                                {/* Tinder Gold Package */}
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-white text-lg">Tinder Gold</h3>
                                        <span className="bg-white text-yellow-500 text-xs px-2 py-1 rounded-full font-bold">POPULAR</span>
                                    </div>
                                    <p className="text-white text-sm mb-4">See who likes you & more!</p>
                                    <ul className="text-white text-sm space-y-2 mb-4">
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>See who likes you</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Unlimited likes</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>5 Super Likes per day</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-2 bg-white text-yellow-500 rounded-full font-bold">UPGRADE</button>
                                </div>

                                {/* Tinder Platinum Package */}
                                <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-white text-lg">Tinder Platinum</h3>
                                        <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full font-bold">PREMIUM</span>
                                    </div>
                                    <p className="text-white text-sm mb-4">All Gold features plus priority likes & more!</p>
                                    <ul className="text-white text-sm space-y-2 mb-4">
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>All Gold features</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Priority likes</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Message before matching</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-2 bg-white text-gray-800 rounded-full font-bold">UPGRADE</button>
                                </div>


                                {/* Tinder Plus Package */}
                                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-white text-lg">Tinder Plus</h3>
                                        <span className="bg-white text-blue-500 text-xs px-2 py-1 rounded-full font-bold">BASIC</span>
                                    </div>
                                    <p className="text-white text-sm mb-4">Enjoy unlimited swipes and more!</p>
                                    <ul className="text-white text-sm space-y-2 mb-4">
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Unlimited swipes</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>1 Super Like per day</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Passport to swipe anywhere</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-2 bg-white text-blue-500 rounded-full font-bold">UPGRADE</button>
                                </div>

                                {/* Tinder Boost Package */}
                                <div className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg p-4 shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-white text-lg">Tinder Boost</h3>
                                        <span className="bg-white text-pink-500 text-xs px-2 py-1 rounded-full font-bold">BOOST</span>
                                    </div>
                                    <p className="text-white text-sm mb-4">Get more visibility and matches with Boost!</p>
                                    <ul className="text-white text-sm space-y-2 mb-4">
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>1 Boost per month</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Increased profile visibility</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-2 bg-white text-pink-500 rounded-full font-bold">UPGRADE</button>
                                </div>




                            </div>
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
