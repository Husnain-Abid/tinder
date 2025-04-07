"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TinderOrientation = () => {
  const [selectedOrientations, setSelectedOrientations] = useState([])
  const [showOnProfile, setShowOnProfile] = useState(false)

  const orientations = [
    "Straight",
    "Gay",
    "Lesbian",
    "Bisexual",
    "Asexual",
    "Demisexual",
    "Pansexual",
    "Queer",
    "Questioning",
  ]

  const handleOrientationToggle = (orientation) => {
    if (selectedOrientations.includes(orientation)) {
      setSelectedOrientations(selectedOrientations.filter((item) => item !== orientation))
    } else {
      if (selectedOrientations.length < 3) {
        setSelectedOrientations([...selectedOrientations, orientation])
      }
    }
  }

  const handleShowOnProfileToggle = () => {
    setShowOnProfile(!showOnProfile)
  }

  const navigate = useNavigate(); // Initialize the useNavigate hook


  return (
    <div className="flex flex-col h-screen bg-white md:max-w-6xl md:mx-auto">
      {/* Status Bar */}



      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-4/12"></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
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
        <button className="text-gray-800 font-medium"
          onClick={() => navigate("/gender-interest")}
        >Skip</button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="py-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 w-2/3">Your sexual orientation?</h1>
          <p className="text-gray-500 mt-4">Select up to 3</p>
        </div>

        {/* Orientation Options */}
        <div className="py-2">
          {orientations.map((orientation, index) => (
            <button
              key={index}
              className={`w-full text-left py-4 px-1 border-b border-gray-100 flex items-center justify-between ${selectedOrientations.includes(orientation) ? "text-gray-950 font-semibold" : "text-gray-800"
                }`}
              onClick={() => handleOrientationToggle(orientation)}
            >
              <span>{orientation}</span>
              {selectedOrientations.includes(orientation) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
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
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-6 border-t-2">
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
          onClick={() => navigate("/gender-interest")}

          className={`w-full py-3.5 rounded-full text-center font-medium ${selectedOrientations.length > 0 ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-500"
            }`}
        >
          Next
        </button>

        {/* Bottom Progress Indicator */}
        <div className="flex justify-center mt-6">
          <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>


    </div>
  )
}

export default TinderOrientation

