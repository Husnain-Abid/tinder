import { useState } from "react"
import redlogo from "../../asset/logo.png"
import image1 from "../../asset/image1.jpeg"


const TinderProfileExpand = ({ showProfileInfo, setShowProfileInfo }) => {
    const [showFullProfile, setShowFullProfile] = useState(true)
    const [showReportModal, setShowReportModal] = useState(false)

    const handleClose = () => {
        setShowFullProfile(false)
    }

    const toggleReportModal = () => {
        setShowReportModal(!showReportModal)
    }

    return (
        <div className="relative min-h-screen bg-gray-100">


            {/* Main Profile Card */}
            <div className="relative h-screen overflow-y-auto bg-white pb-20">
                {/* Profile Image */}
                <div className="relative">
                    <img src={image1} alt="Profile" className="w-full h-auto object-cover" />



                    {/* Status Indicator */}
                    {/* status bar */}
                    <div className="absolute top-4 left-1/2 overflow-hidden  z-30  transform -translate-x-1/2 flex items-center space-x-4">

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

                {/* Profile Info */}
                <div className="px-2">

                    {/* Looking For Section */}
                    <div className="my-4 p-4 bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
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
                            <span className="text-sm">Looking for</span>
                        </div>
                        <div className="flex items-center ml-4">
                            <div className="bg-yellow-100 rounded-full p-1 mr-2">
                                <span className="text-xl">🤔</span>
                            </div>
                            <span className="text-gray-800">Still figuring it out</span>
                        </div>
                    </div>

                    {/* About Me Section */}
                    <div className="my-4 p-4 bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span className="text-sm">About me</span>
                        </div>
                        <p className="ml-6 text-gray-800">Night 🌃 coffee</p>
                    </div>

                    {/* Essentials Section */}
                    <div className="my-4 p-4 bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
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
                            <span className="text-sm">Essentials</span>
                        </div>

                        <div className="ml-6 space-y-2">
                            {/* Distance */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800">5'00 miles away</span>
                            </div>

                            {/* Job */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-gray-800">Manager at Claires</span>
                            </div>

                            {/* CNC */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800">CNC</span>
                            </div>

                            {/* Gender */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-gray-800">Woman</span>
                            </div>
                        </div>
                    </div>

                    {/* Basics Section */}
                    <div className="my-4 p-4 text-sm bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <span className="text-sm">Basics</span>
                        </div>
                        {/* Basics content would go here */}


                        <div className="ml-6 space-y-2">
                            {/* Distance */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800 font-bold mr-2">Zodiac</span>
                                <span className="text-gray-800">Virgo</span>
                            </div>

                            {/* Job */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-gray-800 font-bold mr-2">Communication Style </span>
                                <span className="text-gray-800">Better in person </span>
                            </div>

                            {/* CNC */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800 font-bold mr-2">Education</span>
                                <span className="text-gray-800">Bachelors </span>
                            </div>

                            {/* Gender */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-gray-800 font-bold mr-2">Love Style</span>
                                <span className="text-gray-800">Thoughtful gestures </span>                            </div>
                        </div>


                    </div>

                    {/* Lifestyle Section */}
                    <div className="my-4 p-4 text-sm bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <span className="text-sm">Lifestyle</span>
                        </div>
                        {/* Basics content would go here */}


                        <div className="ml-6 space-y-2">
                            {/* Distance */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800 font-bold mr-2">Pets</span>
                                <span className="text-gray-800">Don't have but love</span>
                            </div>

                            {/* Job */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-gray-800 font-bold mr-2">Drinking </span>
                                <span className="text-gray-800">I don't drink </span>
                            </div>

                            {/* CNC */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
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
                                <span className="text-gray-800 font-bold mr-2">Smoking</span>
                                <span className="text-gray-800">Non-smoker </span>
                            </div>

                            {/* Gender */}
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-gray-800 font-bold mr-2">Workout</span>
                                <span className="text-gray-800">Often </span>                            </div>
                        </div>


                    </div>


                    {/* Block and Report Buttons */}
                    <div className="mt-8 space-y-3">
                        <button
                            className="w-full py-3 border border-gray-300 rounded-xl text-red-500 font-medium"
                            onClick={toggleReportModal}
                        >
                            Report Aleynna
                        </button>
                        <button className="w-full py-3 border border-gray-300 rounded-xl text-gray-700 font-medium">
                            Block Aleynna
                        </button>
                        <button className="w-full py-3 border border-gray-300 rounded-xl text-gray-700 font-medium">
                            Block Aleynna
                        </button>
                    </div>

                </div>



                {/* Action Buttons */}
                <div className="fixed  bottom-4  left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4 overflow-x-hidden">


                    {/* Dislike Button */}
                    <button onClick={() => setShowProfileInfo(false)} className="bg-white p-5 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-pink-500"
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
                            className="h-4 w-4 text-blue-500"
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
                            className="h-6 w-6 text-green-500"
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

                </div>


            </div>









            {/* Report Modal */}
            {showReportModal && (
                <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50">
                    <div className="bg-white rounded-t-2xl w-full max-w-md p-4 animate-slide-up">
                        <h2 className="text-xl font-bold text-center mb-4">Report</h2>

                        <div className="space-y-3" >
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Inappropriate photos</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Feels like spam</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Inappropriate messages</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Offline behavior</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Someone is in danger</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Under 18</button>
                            <button className="w-full py-3 text-left px-4">Other</button>
                        </div>

                        <button className="w-full py-3 mt-4 bg-gray-200 rounded-full font-medium" onClick={toggleReportModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Animation */}
            <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    )
}

export default TinderProfileExpand

