"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TinderGenderInterest = () => {
  const [selectedGender, setSelectedGender] = useState("")

  const genders = ["Woman", "Man", "Everyone"]






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
    <div className="flex flex-col h-screen bg-white">
      {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-5/12"></div>
        </div>

      {/* Header */}
      <div className="p-4">
        <button
                  onClick={() => navigate(-1)} 
        className="p-1">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Who are you interested in seeing?</h1>

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














     {/* Footer */}
     <div className="px-4 py-6 ">
      




      {/* Next Button */}
      <div className="px-4 pb-8">
        <button
                        onClick={() => navigate("/looking-for")}
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




    </div>
  )
}

export default TinderGenderInterest
