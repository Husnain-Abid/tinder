"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TinderLookingFor = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    {
      id: "long-term",
      emoji: "💘",
      title: "Long-term partner",
    },
    {
      id: "long-term-open",
      emoji: "😍",
      title: "Long-term, open to short",
    },
    {
      id: "short-term-open",
      emoji: "🥂",
      title: "Short-term, open to long",
    },
    {
      id: "short-term",
      emoji: "🎉",
      title: "Short-term fun",
    },
    {
      id: "friends",
      emoji: "👋",
      title: "New friends",
    },
    {
      id: "figuring-out",
      emoji: "🤔",
      title: "Still figuring it out",
    },
  ]

  const handleOptionSelect = (id) => {
    setSelectedOption(id)
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Progress Bar */}
   {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-6/12"></div>
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Right now I'm looking for...</h1>
          <p className="text-gray-600 mt-1">Increase compatibility by sharing yours!</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              className={`flex flex-col h-28 items-center justify-center p-4 rounded-lg bg-gray-100 aspect-square ${
                selectedOption === option.id ? "ring-2 ring-gray-500" : ""
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <span className="text-3xl mb-2">{option.emoji}</span>
              <span className="text-center text-xs text-gray-800">{option.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="px-4 pb-8">
        <button
                          onClick={() => navigate("/lifestyle")} 

          className={`w-full py-3.5 rounded-full text-center font-medium ${
            selectedOption ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TinderLookingFor

