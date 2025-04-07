"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const TinderName = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook


  return (
    <div className="flex flex-col h-screen bg-white md:max-w-6xl md:mx-auto">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-1/12"></div>
      </div>





      {/* Header */}
      <div className="p-4">
        <button className="p-1" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 w-1/2">What's your first name?</h1>

          {/* Date Input Fields */}

          <input type="text" placeholder="Enter first name" className="border-b-2 p-2 w-full outline-none" />


          <p className="text-gray-600  mt-2">This is how it'll appear on your profile. </p>
          <p className="text-gray-600  font-bold ">Can't change it later. </p>
        </div>
      </div>

      {/* Next Button - Hidden in this view but included for consistency */}
      <div className="px-4 pb-8 opacity-1">
        <button className="w-full py-3.5 rounded-full text-center font-medium bg-gray-800 text-white"
          onClick={() => navigate("/birthday")}

        >Next</button>
      </div>








    </div>
  )
}

export default TinderName

