"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TinderGender = () => {
  const [selectedGender, setSelectedGender] = useState("")

  const genders = ["Woman", "Man", "More"]



  const [showOnProfile, setShowOnProfile] = useState(false)

    
  const handleShowOnProfileToggle = () => {
    setShowOnProfile(!showOnProfile)
  }



  const navigate = useNavigate(); // Initialize the useNavigate hook




  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Progress Bar */}
   {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-3/12"></div>
        </div>

      {/* Header */}
      <div className="p-4">
        <button className="p-1"
        onClick={() => navigate(-1)}
        >
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">What's your gender?</h1>

          {/* Gender Selection Buttons */}
          {genders.map((gender) => (
            <div className="px-4 pb-4" key={gender}>
              <button
                onClick={() => setSelectedGender(gender)}
                className={`w-full py-3 border-2 rounded-full text-center font-medium 
                  ${selectedGender === gender
                    ? "border-gray-400 bg-gray-400 text-white"
                    : "border-gray-400 bg-white text-black"
                  }`}
              >
                {gender}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="px-4 pb-8">

      <div className="flex items-center justify-center mb-4">
          <div
            className={`w-5 h-5 border ${showOnProfile ? "border-gray-500 bg-gray-800" : "border-gray-300"} rounded flex items-center justify-center mr-2`}
            onClick={handleShowOnProfileToggle}
          >
            {showOnProfile && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="text-gray-600">Show my orientation on my profile</span>
        </div>


        <button
                onClick={() => navigate("/orientation")}

          className={`w-full py-3.5 rounded-full text-center font-medium 
            ${selectedGender
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-500"
            }`}
          disabled={!selectedGender}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TinderGender
