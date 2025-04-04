"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TinderInterest = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook


  const [hobbies, setHobbies] = useState([])

  const toggleHobby = (hobby) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((p) => p !== hobby))
    } else {
      setHobbies([...hobbies, hobby])
    }
  }

  const hobbyOptions = [
    "Traveling", "Hiking", "Cooking", "Photography", "Music", "Dancing", "Movies", "Reading",
    "Gaming", "Yoga", "Art", "Working Out", "Cycling", "Running", "Skiing", "Surfing", "Fashion",
    "Pets", "Crafting", "Writing", "Board Games", "Theater", "Volunteering", "Meditation",
    "Coffee", "Wine Tasting", "Bars", "Karaoke", "Camping", "Tech", "Netflix", "Foodie",
    "Gym", "Nightlife", "Anime", "Road Trips", "Spirituality", "Podcasts", "Sushi", "Museums"
  ]

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Progress Bar */}
   {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-9/12"></div>
        </div>



      {/* Header */}
      <div className="flex justify-between items-center p-4">
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
        <button className="text-gray-800 font-medium"
                                onClick={() => navigate("/add-photos")} 

        
        >Skip</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">What are you into?</h1>
          <p className="text-gray-600 mt-1">You like what you like. Now, let everyone know.</p>
        </div>

        {/* Hobbies List */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {hobbyOptions.map((hobby) => (
              <button
                key={hobby}
                className={`px-3 py-2 rounded-full text-sm ${
                  hobbies.includes(hobby)
                    ? "bg-gray-800 text-white border border-gray-300"
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                }`}
                onClick={() => toggleHobby(hobby)}
              >
                {hobby}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="px-4 py-8 border-t-2">
        <button
                        onClick={() => navigate("/add-photos")} 

          className={`w-full py-3.5 rounded-full text-center font-medium ${
            hobbies.length > 0
              ? "bg-gray-800 text-white border border-gray-300"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TinderInterest
