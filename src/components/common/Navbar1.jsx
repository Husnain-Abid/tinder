import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../../asset/logo.png"


export default function Navbar1() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown

  const [safetyDropdownOpen, setSafetyDropdownOpen] = useState(false); // For dropdown


  return (
    <nav className="bg-white w-full px-4 md:px-8 py-4 flex justify-between items-center shadow-sm ">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className='w-32' />
        </Link>
        <div className="ml-6 hidden md:flex  space-x-4 text-gray-600 text-sm">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}

          >
            <Link to="/products" className=" text-gray-600 hover:text-red-600 hover:underline">
              Products
            </Link>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-3 -left-2 pt-2 space-y-1 bg-white shadow-lg mt-2 w-40 text-sm  p-4 rounded-lg py-2">
                <Link to="/premium" className="block  font-bold text-gray-600 hover:text-red-600 hover:underline ">
                  Premium Features
                </Link>
                <Link to="/subscription" className="block font-bold text-gray-600 hover:text-red-600 hover:underline ">
                  Subscription Tiers
                </Link>
                <Link to="/plus" className="block pl-6  text-gray-600 hover:text-red-600 hover:underline ">
                  Tinder Plus
                </Link>
                <Link to="/gold" className="block pl-6 text-gray-600 hover:text-red-600 hover:underline ">
                  Tinder Gold
                </Link>
                <Link to="/platinum" className="block pl-6 text-gray-600 hover:text-red-600 hover:underline ">
                  Tinder Platinum
                </Link>

                <Link to="/premium" className="block font-bold  text-gray-600 hover:text-red-600 hover:underline ">
                  Tinder SELECT
                </Link>

              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-600 hover:text-red-600 hover:underline">
            Learn
          </Link>



          <div
            className="relative"
            onMouseEnter={() => setSafetyDropdownOpen(true)}
            onMouseLeave={() => setSafetyDropdownOpen(false)}
          >

            <Link to="/safety" className="text-gray-600 hover:text-red-600 hover:underline">
              Safety
            </Link>

            {/* Dropdown Menu */}
            {safetyDropdownOpen && (
              <div className="absolute top-3 -left-2 font-medium bg-white mt-2 w-48 space-y-1 text-sm  p-4 rounded-lg py-2">

                <Link to="/community-guidelines" className="block  text-gray-600 hover:text-red-600 hover:underline ">
                  Community Guidelines
                </Link>

                <Link to="/safety-tips" className="block  text-gray-600 hover:text-red-600 hover:underline ">
                  Safety Tips
                </Link>

                <Link to="/safety-reporting" className="block   text-gray-600 hover:text-red-600 hover:underline ">
                  Safety & Reporting
                </Link>

                <Link to="/safety-policy" className="block  text-gray-600 hover:text-red-600 hover:underline ">
                  Safety & Policy
                </Link>

                <Link to="/security" className="block  text-gray-600 hover:text-red-600 hover:underline ">
                  Security
                </Link>


              </div>
            )}
          </div>







          <Link to="/support" className="  text-gray-600 hover:text-red-600 hover:underline">
            Support
          </Link>
          <Link to="/download" className=" text-gray-600 hover:text-red-600 hover:underline">
            Download
          </Link>
        </div>


      </div>






      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-xs text-gray-500">Dark Mode</span>
          <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-0.5">
            <div className="w-4 h-4 bg-white rounded-full shadow-md transform translate-x-5"></div>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <span className="text-sm text-gray-600">Language</span>
        </div>
        <button className=" text-white px-6 py-1 rounded-full  font-medium"
          style={{ background: "var(--custom-gradient)" }}
        >Log In</button>
      </div>

    </nav>

  )
}
