"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TinderAddPhotos = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [photos, setPhotos] = useState(Array(6).fill(null))

  const handleAddPhoto = (index) => {
    // In a real app, this would open a file picker
    // For this demo, we'll just simulate adding a photo
    const newPhotos = [...photos]
    newPhotos[index] = `/placeholder.svg?height=200&width=150&text=Photo+${index + 1}`
    setPhotos(newPhotos)
  }

  const photoCount = photos.filter((photo) => photo !== null).length

  return (
    <div className="flex flex-col h-screen bg-white md:max-w-6xl md:mx-auto">

      {/* Progress Bar */}

      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-11/12"></div>
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
      <div className="flex-1 px-4 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add your recent pics</h1>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[3/4] relative border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center"
            >
              {photo && (
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

              <button
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center shadow-md"
                onClick={() => handleAddPhoto(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-8">
        <div className="flex items-center mb-4 text-sm">
          <div className="font-bold text-gray-800 mr-2 flex items-center justify-center w-10 h-10 border rounded-full ">{photoCount} / 6</div>
          <div className="text-gray-600">Hey! Let's add 2 to start. We recommend a face pic.</div>
        </div>

        <button
                                onClick={() => navigate("/home")} 
          className={`w-full py-3.5 rounded-full text-center font-medium ${
            photoCount >= 2 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          Next
        </button>

        {/* Bottom Indicator */}
        {/* <div className="flex justify-center mt-6">
          <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
        </div> */}
      </div>
    </div>
  )
}

export default TinderAddPhotos

