"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const TinderBirthday = () => {
  const [date, setDate] = useState({
    day1: "",
    day2: "",
    month1: "",
    month2: "",
    year1: "",
    year2: "",
    year3: "",
    year4: "",
  })

  // Create refs for each input field
  const day1Ref = useRef(null)
  const day2Ref = useRef(null)
  const month1Ref = useRef(null)
  const month2Ref = useRef(null)
  const year1Ref = useRef(null)
  const year2Ref = useRef(null)
  const year3Ref = useRef(null)
  const year4Ref = useRef(null)

  // Handle input change
  const handleChange = (field, value, nextRef) => {
    // Only allow digits
    if (/^\d?$/.test(value)) {
      setDate((prev) => ({ ...prev, [field]: value }))

      // Move to next input if a digit was entered
      if (value && nextRef) {
        nextRef.current.focus()
      }
    }
  }

  // Handle backspace key
  const handleKeyDown = (e, field, prevRef) => {
    if (e.key === "Backspace") {
      if (!date[field] && prevRef) {
        prevRef.current.focus()
      }
    }
  }

  // Focus the first input on component mount
  useEffect(() => {
    day1Ref.current.focus()
  }, [])

  const navigate = useNavigate(); // Initialize the useNavigate hook



  return (
    <div className="flex flex-col h-screen bg-white md:max-w-6xl md:mx-auto">
      {/* Progress Bar */}
   {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-2/12"></div>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your b-day?</h1>

          {/* Date Input Fields */}
          <div className="flex items-center mb-4">
            {/* Day */}
            <div className="flex items-center">
              <input
                ref={day1Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.day1}
                onChange={(e) => handleChange("day1", e.target.value, day2Ref)}
                onKeyDown={(e) => handleKeyDown(e, "day1", null)}
              />
              <input
                ref={day2Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.day2}
                onChange={(e) => handleChange("day2", e.target.value, month1Ref)}
                onKeyDown={(e) => handleKeyDown(e, "day2", day1Ref)}
              />
            </div>

            <span className="mx-2 text-xl text-gray-500">/</span>

            {/* Month */}
            <div className="flex items-center">
              <input
                ref={month1Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.month1}
                onChange={(e) => handleChange("month1", e.target.value, month2Ref)}
                onKeyDown={(e) => handleKeyDown(e, "month1", day2Ref)}
              />
              <input
                ref={month2Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.month2}
                onChange={(e) => handleChange("month2", e.target.value, year1Ref)}
                onKeyDown={(e) => handleKeyDown(e, "month2", month1Ref)}
              />
            </div>

            <span className="mx-2 text-xl text-gray-500">/</span>

            {/* Year */}
            <div className="flex items-center">
              <input
                ref={year1Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.year1}
                onChange={(e) => handleChange("year1", e.target.value, year2Ref)}
                onKeyDown={(e) => handleKeyDown(e, "year1", month2Ref)}
              />
              <input
                ref={year2Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.year2}
                onChange={(e) => handleChange("year2", e.target.value, year3Ref)}
                onKeyDown={(e) => handleKeyDown(e, "year2", year1Ref)}
              />
              <input
                ref={year3Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.year3}
                onChange={(e) => handleChange("year3", e.target.value, year4Ref)}
                onKeyDown={(e) => handleKeyDown(e, "year3", year2Ref)}
              />
              <input
                ref={year4Ref}
                type="text"
                maxLength="1"
                className="w-8 h-10 text-center text-xl border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                value={date.year4}
                onChange={(e) => handleChange("year4", e.target.value, null)}
                onKeyDown={(e) => handleKeyDown(e, "year4", year3Ref)}
              />
            </div>
          </div>

          <p className="text-gray-600 text-sm">Your profile shows your age, not your date of birth.</p>
        </div>
      </div>

      {/* Next Button - Hidden in this view but included for consistency */}
      <div className="px-4 pb-8 opacity-1">
        <button className="w-full py-3.5 rounded-full text-center font-medium bg-gray-800 text-white"         
        
        onClick={() => navigate("/gender")}
        >Next</button>
      </div>
    </div>
  )
}

export default TinderBirthday

