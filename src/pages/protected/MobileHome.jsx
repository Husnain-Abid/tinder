import React, { useState } from 'react'
import image1 from "../../asset/image1.jpeg"
import image3 from "../../asset/image2.jpg"
import avatar from "../../asset/image3.jpg"
import redlogo from "../../asset/logo.png"



export default function MobileHome() {

  const [activeTab, setActiveTab] = useState("home")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (

    <div className=" flex md:hidden flex-col h-screen bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto pb-16">
        {/* Home Tab Content */}
        {activeTab === "home" && (
          <div className="p-4">
            {/* Tinder Logo */}
            <div className="mb-4 flex justify-between items-center">
              {/* <svg viewBox="0 0 519 123" className="h-8 w-auto text-tinder-red fill-current">
                <path
                  d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"
                  fill="currentColor"
                ></path>
              </svg> */}

              <img src={redlogo} alt="logo" className='w-24' />

              <div className='p-2 bg-white rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-pink-500' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>

              </div>


            </div>

            {/* Main Content - Profile Card */}
            <div className=" relative flex-grow flex items-center justify-center z-0 bg-gray-100 p-4">
              <div className="relative w-full max-w-md h-[70vh] z-0 rounded-xl overflow-hidden shadow-lg">
                {/* Profile Image */}
                <img src={image1} alt="Profile" className="w-full h-full object-cover" />

                {/* Profile Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-10 bg-gradient-to-t from-black/80 to-transparent">
                  {/* Recently Active */}
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-white text-sm">Recently Active</span>
                  </div>

                  {/* Name and Age */}
                  <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-white mr-2">Ramsey</h2>
                    <span className="text-2xl text-white">20</span>

                    {/* Info Button */}
                    <button className="ml-auto bg-black/30 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-up"><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /></svg>
                    </button>

                  </div>

                  {/* Location */}
                  <div className="flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
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
                    <span className="text-white ml-1">3 miles away</span>
                  </div>
                </div>




                {/* status bar */}
                <div className="absolute top-4 left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-4">

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



              {/* Action Buttons */}
              <div className="absolute  -bottom-4  left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4">
                {/* Rewind Button */}
                <button className="bg-white p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                    />
                  </svg>
                </button>

                {/* Dislike Button */}
                <button className="bg-white p-5 rounded-full shadow-lg">
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

                {/* Boost Button */}
                <button className="bg-white p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
              </div>



            </div>



          </div>
        )}

        {/* Habit Tab Content */}
        {activeTab === "habit" && (
          <>
          
          {/* Goal-driven Dating Section */}
          <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Goal-driven dating</h2>
          <p className="text-gray-600 mb-4">Find people with similar relationship goals</p>

          {/* Relationship Goals Grid */}
          <div className="grid grid-cols-2 gap-4 overflow-y-auto no-scrollbar max-h-[85vh] ">
              {/* Long-term partner */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Rose Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Long-term partner</h3>
              </div>

              {/* Free Tonight */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Moon Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Free Tonight</h3>
              </div>

              {/* Short-term fun */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Sparkle Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Short-term fun</h3>
              </div>

              {/* New friends */}
              <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Circles Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">New friends</h3>
              </div>

              {/* Long-term partner */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Rose Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Long-term partner</h3>
              </div>

              {/* Free Tonight */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Moon Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Free Tonight</h3>
              </div>

              {/* Short-term fun */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Sparkle Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Short-term fun</h3>
              </div>

              {/* New friends */}
              <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Circles Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">New friends</h3>
              </div>

              {/* Long-term partner */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Rose Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Long-term partner</h3>
              </div>

              {/* Free Tonight */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Moon Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Free Tonight</h3>
              </div>

              {/* Short-term fun */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Sparkle Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Short-term fun</h3>
              </div>

              {/* New friends */}
              <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Circles Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">New friends</h3>
              </div>

              {/* Long-term partner */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Rose Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Long-term partner</h3>
              </div>

              {/* Free Tonight */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Moon Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Free Tonight</h3>
              </div>

              {/* Short-term fun */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Sparkle Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Short-term fun</h3>
              </div>

              {/* New friends */}
              <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Circles Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">New friends</h3>
              </div>

              {/* Long-term partner */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Rose Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Long-term partner</h3>
              </div>

              {/* Free Tonight */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Moon Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Free Tonight</h3>
              </div>

              {/* Short-term fun */}
              <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Sparkle Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">Short-term fun</h3>
              </div>

              {/* New friends */}
              <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end">
                  <div className="mb-auto">
                      {/* Circles Icon */}
                      <div className="flex justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
                  <h3 className="text-white font-bold">New friends</h3>
              </div>

          </div>

      </div>

          </>
        
        
        )}

        {/* Upgrade Tab Content */}
        {activeTab === "upgrade" && (
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upgrade Your Experience</h2>

            <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl p-6 mb-4 text-white">
              <h3 className="text-xl font-bold mb-2">Tinder Gold™</h3>
              <p className="mb-4">See who likes you & more!</p>
              <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded-full">UPGRADE</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Super Like</h3>
                  <p className="text-gray-600 text-sm">Stand out with Super Likes</p>
                </div>
                <div className="ml-auto">
                  <button className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded-full text-sm">GET</button>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-500 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Boost</h3>
                  <p className="text-gray-600 text-sm">Get more matches faster</p>
                </div>
                <div className="ml-auto">
                  <button className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded-full text-sm">GET</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab Content */}
        {activeTab === "messages" && (
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>

            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search matches"
                className="w-full bg-gray-200 rounded-full py-2 px-4 pl-10"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 absolute left-3 top-2.5"
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
            </div>

            {/* New Matches */}
            <div className="mb-6">
              <h3 className="text-gray-600 font-medium mb-2">New Matches</h3>
              <div className="flex overflow-x-auto space-x-4 pb-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex-shrink-0">
                    <img src={avatar} alt='avatar' className="w-16 h-16 rounded-full bg-gray-300 border-2 border-pink-500 mb-1" />
                    <p className="text-xs text-center">Alex</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages List */}
            <div>
              <h3 className="text-gray-600 font-medium mb-2">Messages</h3>
              <div className="space-y-4">
                {[
                  { name: "Jessica", message: "Hey, how are you?", time: "2m", unread: true },
                  { name: "Michael", message: "Want to meet up this weekend?", time: "1h" },
                  { name: "Sarah", message: "That sounds great!", time: "3h" },
                  { name: "David", message: "Check out this restaurant", time: "1d" },
                ].map((chat, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg ${chat.unread ? "bg-pink-50" : "bg-white"}`}
                  >
                    <img src={image3} alt='avatar' className="w-12 h-12 rounded-full bg-gray-300 mr-3" />
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h4 className="font-bold">{chat.name}</h4>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className={`text-sm ${chat.unread ? "text-gray-900 font-medium" : "text-gray-600"}`}>
                        {chat.message}
                      </p>
                    </div>
                    {chat.unread && <div className="w-2 h-2 bg-pink-500 rounded-full"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab Content */}
        {activeTab === "profile" && (
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
              <button className="text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="relative">
                <img
                  src={image1}
                  alt="Your Profile"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Alex, 28</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  <span>Software Developer</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  <span>New York, NY</span>
                </div>
                <p className="text-gray-700">
                  Coffee enthusiast, dog lover, and avid hiker. Looking for someone to share adventures with!
                </p>
              </div>
            </div>

            {/* Settings Options */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-800">Settings</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-800">Activity</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 mr-3"
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
                  <span className="text-gray-800">Help & Support</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2">
        <button
          onClick={() => handleTabChange("home")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "home" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={activeTab === "home" ? 2.5 : 1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>

        <button
          onClick={() => handleTabChange("habit")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "habit" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={activeTab === "habit" ? 2.5 : 1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className="text-xs mt-1">Explore</span>
        </button>

        <button
          onClick={() => handleTabChange("upgrade")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "upgrade" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={activeTab === "upgrade" ? 2.5 : 1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span className="text-xs mt-1">Upgrade</span>
        </button>

        <button
          onClick={() => handleTabChange("messages")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "messages" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={activeTab === "messages" ? 2.5 : 1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-xs mt-1">Messages</span>
        </button>

        <button
          onClick={() => handleTabChange("profile")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "profile" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={activeTab === "profile" ? 2.5 : 1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>


    </div>


  )
}
