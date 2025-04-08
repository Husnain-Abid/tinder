"use client"

import { useState } from "react"
import avatar from "../../asset/avatar.jpg"

const LeftSidebar = () => {
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
                            src="/placeholder.svg?height=40&width=40"
                            alt="Profile"
                            className="h-10 w-10 rounded-full border-2 border-white"
                        />
                        <span className="ml-2 text-white font-medium">Mohammed</span>
                    </div>

                    {/* Action Icons */}
                    <div className="flex space-x-2">
                        {/* Search/Filter Icon */}
                        <button className="bg-red-700 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Travel/Location Icon */}
                        <button className="bg-red-700 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                />
                            </svg>
                        </button>

                        {/* Security/Shield Icon */}
                        <button className="bg-red-700 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
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
                    <button
                        className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "hobbies" ? "text-red-500 border-b-2 border-red-500" : "text-gray-600"
                            }`}
                        onClick={() => handleTabChange("hobbies")}
                    >
                        Hobbies
                    </button>
                </div>

                {/* Bottom Tab Navigation */}
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2">
                    <button
                        onClick={() => handleTabChange("matches")}
                        className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "matches" || activeTab === "messages" ? "text-red-500" : "text-gray-500"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        <span className="text-xs mt-1">Matches</span>
                    </button>

                    <button
                        onClick={() => handleTabChange("hobbies")}
                        className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "hobbies" ? "text-red-500" : "text-gray-500"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-xs mt-1">Hobbies</span>
                    </button>

                    <button
                        onClick={() => handleTabChange("meeting")}
                        className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "meeting" ? "text-red-500" : "text-gray-500"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-xs mt-1">Meetings</span>
                    </button>

                    <button
                        onClick={() => handleTabChange("report")}
                        className={`flex flex-col items-center justify-center w-1/5 h-full ${showReportPopup ? "text-red-500" : "text-gray-500"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span className="text-xs mt-1">Report</span>
                    </button>

                    <button
                        onClick={() => handleTabChange("packages")}
                        className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "packages" ? "text-red-500" : "text-gray-500"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-xs mt-1">Packages</span>
                    </button>
                </div>

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
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Hobbies</h2>
                            <p className="text-gray-500 mb-6">Add your hobbies to find better matches with similar interests.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-red-100 rounded-lg p-4 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Movies</span>
                                </div>
                                <div className="bg-red-100 rounded-lg p-4 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                        />
                                    </svg>
                                    <span>Music</span>
                                </div>
                                <div className="bg-red-100 rounded-lg p-4 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span>Travel</span>
                                </div>
                                <div className="bg-red-100 rounded-lg p-4 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span>Sports</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full py-3 bg-red-500 text-white rounded-full font-medium">
                                Add More Hobbies
                            </button>
                        </div>
                    )}

                    {/* Meeting Log Tab Content */}
                    {activeTab === "meeting" && (
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
                    )}

                    {/* Packages Tab Content */}
                    {activeTab === "packages" && (
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Premium Packages</h2>
                            <p className="text-gray-500 mb-6">Upgrade your experience with our premium features.</p>
                            <div className="space-y-4">
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
                            </div>
                        </div>
                    )}




                </div>

                {/* Report Popup */}
                {showReportPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl w-full max-w-md p-6 mx-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Report an Issue</h2>
                                <button onClick={() => setShowReportPopup(false)} className="text-gray-500">
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
                            <p className="text-gray-600 mb-6">Please select the type of issue you'd like to report:</p>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                        />
                                    </svg>
                                    Inappropriate behavior
                                </button>
                                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    Fake profile
                                </button>
                                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                    Spam or scam
                                </button>
                                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Other issue
                                </button>
                            </div>
                            <div className="mt-6 flex space-x-3">
                                <button
                                    onClick={() => setShowReportPopup(false)}
                                    className="flex-1 py-2 border border-gray-300 rounded-full text-gray-700 font-medium"
                                >
                                    Cancel
                                </button>
                                <button className="flex-1 py-2 bg-red-500 rounded-full text-white font-medium">Continue</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>







            {/* Left Sidebar */}
            <div className="w-full max-w-sm  bg-white shadow-md">
                {/* Top Navigation */}
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-5 flex items-center space-x-4">
                    {/* User Profile */}
                    <div className="flex items-center">
                        <img
                            src={avatar}
                            alt="Your Profile"
                            className="h-10 w-10 rounded-full border-2 border-white"
                        />
                        <span className="ml-2 text-white font-medium">You</span>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex-grow flex justify-end space-x-2">
                        {/* Boost/Lightning Icon */}
                        <button className="bg-black/50 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>

                        {/* Explore Icon */}
                        <button className="bg-black/50 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
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

                        {/* meeting Icon */}
                        <button className="bg-black/50 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </button>

                        {/* Report Icon */}
                        <button className="bg-black/50 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>
                        </button>



                    </div>
                </div>

                {/* Goal-driven Dating Section */}
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Goal-driven dating</h2>
                    <p className="text-gray-600 mb-4">Find people with similar relationship goals</p>

                    {/* Relationship Goals Grid */}
                    <div className="grid grid-cols-2 gap-4 overflow-y-auto no-scrollbar max-h-[78vh] ">
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

            </div>

        </>



    )
}

export default LeftSidebar
