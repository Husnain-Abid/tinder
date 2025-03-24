import { useEffect, useState } from "react"
import avatar from "../../asset/avatar.jpg"

import image1 from "../../asset/image1.jpeg"
import image2 from "../../asset/image2.jpg"
import image3 from "../../asset/image3.jpg"


const HomeAfterLogin = () => {

    const images = [
        image1,
        image2,
        image3,
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);




    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar */}
            <div className="w-full max-w-sm  bg-white shadow-md">
                {/* Top Navigation */}
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 flex items-center space-x-4">
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
                        <button className="bg-white p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>

                        {/* Explore Icon */}
                        <button className="bg-black p-2 rounded-full">
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

                        {/* Messages Icon */}
                        <button className="bg-black p-2 rounded-full">
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
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                />
                            </svg>
                        </button>

                        {/* Likes Icon */}
                        <button className="bg-black p-2 rounded-full">
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
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Goal-driven Dating Section */}
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Goal-driven dating</h2>
                    <p className="text-gray-600 mb-4">Find people with similar relationship goals</p>

                    {/* Relationship Goals Grid */}
                    <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[85vh] ">
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






            {/* Main Content - Profile Card */}
            <div className=" relative flex-grow flex items-center justify-center z-0 bg-gray-100 p-4">
                <div className="relative w-full max-w-md h-[85vh] z-0 rounded-xl overflow-hidden shadow-lg">
                    {/* Profile Image */}
                    <img src={image1} alt="Profile" className="w-full h-full object-cover" />

                    {/* Profile Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-20 bg-gradient-to-t from-black/80 to-transparent">
                        {/* Recently Active */}
                        <div className="flex items-center mb-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-white text-sm">Recently Active</span>
                        </div>

                        {/* Name and Age */}
                        <div className="flex items-center">
                            <h2 className="text-3xl font-bold text-white mr-2">Ramsey</h2>
                            <span className="text-2xl text-white">20</span>

                            {/* Info Button */}
                            <button className="ml-auto bg-black/30 p-1 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-up"><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /></svg>
                            </button>

                        </div>

                        {/* Location */}
                        <div className="flex items-center mt-1">
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
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="text-white ml-1">3 miles away</span>
                        </div>
                    </div>




                    {/* status bar */}
                    <div className="absolute top-4 left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-4">

                        {/* status dash */}
                        <div className="bg-white px-9 py-0.5  shadow-lg">

                        </div>
                        {/* status dash */}
                        <div className="bg-white px-9 py-0.5  shadow-lg">

                        </div>
                        {/* status dash */}
                        <div className="bg-gray-50 px-9 py-0.5  shadow-lg">

                        </div>
                        {/* status dash */}
                        <div className="bg-gray-50 px-9 py-0.5  shadow-lg">

                        </div>
                        {/* status dash */}
                        <div className="bg-gray-50 px-9 py-0.5  shadow-lg">

                        </div>


                    </div>



                </div>



                {/* Action Buttons */}
                <div className="absolute bottom-12 left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-4">
                    {/* Rewind Button */}
                    <button className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                            />
                        </svg>
                    </button>

                    {/* Dislike Button */}
                    <button className="bg-white p-5 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Super Like Button */}
                    <button className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </button>

                    {/* Like Button */}
                    <button className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Boost Button */}
                    <button className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </button>
                </div>



            </div>





        </div>
    )
}

export default HomeAfterLogin