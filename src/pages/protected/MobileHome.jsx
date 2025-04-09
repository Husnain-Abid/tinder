import React, { useEffect, useState } from 'react'
import avatar from "../../asset/image3.jpg"
import redlogo from "../../asset/logo.png"
import { redirect, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import TinderProfileExpand from './TinderProfileExpand'




import image1 from "../../asset/image1.jpeg"
import image3 from "../../asset/image2.jpg"
import image2 from "../../asset/image3.jpg"

import image4 from "../../asset/image4.jpg"
import image5 from "../../asset/image5.jpg"
import image6 from "../../asset/image7.jpg"

import image7 from "../../asset/image6.jpg"
import image8 from "../../asset/image8.jpg"
import image9 from "../../asset/image9.jpg"
import ProfileCard from './ProfileCard'
import ResponsiveProfileCard from './ResponsiveProfileCard'





export default function MobileHome() {


  const [showProfileInfo, setShowProfileInfo] = useState(false)

  const toggleProfileInfo = () => {
    setShowProfileInfo(!showProfileInfo)
  }



  // carosal start 

  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);




  const packages = [

    {
      name: "Tinder Platinum™",
      description: "Level up every action you take on Tinder",
      bgColor: "bg-gray-800",
      color: "text-gray-800",
      fillColor: "fill-gray-800",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-gray-800"
          fill="fill-gray-800"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
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
      ),
      buttonText: "Get Tinder Platinum™",
      redirect: "/package/platinum"
    },

    {
      name: "See Who Likes You",
      description: "See Who Likes You &",
      bgColor: "bg-amber-500",
      color: "text-amber-500",
      fillColor: "fill-yellow-800",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-amber-500 text-amber-500"
          fill="fill-yellow-800"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
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
      ),
      buttonText: "Get Tinder Gold™",
      redirect: "/package/gold"
    },

    {
      name: "Tinder Plus™",
      description: "Unlimited likes, Rewinds and More!",
      bgColor: "bg-red-800",
      color: "text-red-800",
      fillColor: "fill-red-800 ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-red-800 text-red-800"
          fill="fill-red-800"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
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
      ),
      buttonText: "Get Tinder Plus™",
      redirect: "/package/plus"
    },

    {
      name: "Upgrade Your Love Life",
      description: "Subscribe to Tinder and get access to premium features",
      bgColor: "bg-red-600",
      color: "text-red-600",
      fillColor: "fill-red-600 ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-red-500 text-red-500"
          fill="fill-red-600 "
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
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
      ),
      buttonText: "See All Plans",
      redirect: "/package/all-plans"
    },

    {
      name: "Boost",
      description: "Be a top profile in your area for 30 minutes to get more matches.",
      bgColor: "bg-pink-500",
      color: "text-pink-500",
      fillColor: "fill-pink-500",
      icon: (


        <svg xmlns="http://www.w3.org/2000/svg" className='fill-pink-500 text-pink-500' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>


      ),
      buttonText: "My Boosts",
      redirect: "/package/boost"
    },


  ];

  // Use effect to automatically change the index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPackageIndex((prevIndex) => (prevIndex === packages.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [packages.length]);



  // carosal end 


  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }



  // profile card start


  // Initial profiles data
  const initialProfiles = [
    {
      id: 1,
      name: "Huddha",
      age: 32,
      distance: "3 miles away",
      isActive: true,
      images: [image1, image2, image3],
    },
    {
      id: 2,
      name: "Ramsey",
      age: 20,
      distance: "1 mile away",
      isActive: false,
      images: [image4, image5, image7],
    },
    {
      id: 3,
      name: "Mia",
      age: 28,
      distance: "5 miles away",
      isActive: true,
      images: [image6, image8, image9],
    },
  ]

  // State for profiles and swipe history
  const [profiles, setProfiles] = useState(initialProfiles)
  const [swipeHistory, setSwipeHistory] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle swipe action
  const handleSwipe = (action, profile) => {
    // Add to swipe history
    setSwipeHistory([...swipeHistory, { profile, action }])

    // Move to next profile
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }


  // Reset profiles when all have been swiped
  useEffect(() => {
    if (currentIndex >= profiles.length) {
      // Optional: You could fetch new profiles here
      // For now, we'll just reset to the initial profiles after a delay
      const timer = setTimeout(() => {
        setProfiles(initialProfiles)
        setCurrentIndex(0)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, profiles.length])



  // profile card end


  return (

    <div className=" flex md:hidden flex-col h-screen bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto pb-16">
        {/* Home Tab Content */}
        {activeTab === "home" && (
          <div className="p-4">
            {/* Tinder Logo */}
            <div className="mb-4 flex justify-between items-center">
              <img src={redlogo} alt="logo" className='w-24' />
              <div className='p-2 bg-white rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-pink-500' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
            </div>

            {/* Main Content - Profile Card */}
            <div className="flex flex-col justify-center items-center " style={{ minHeight: "calc(100vh - 20vh)" }}>
              {/* Profile Cards */}
              <div className="relative flex-grow w-full flex items-center justify-center z-0 bg-gray-100 p-4">
                {profiles.map((profile, index) => (
                  <div
                    key={profile.id}
                    className={`absolute ${index < currentIndex ? "hidden" : ""}`}
                    style={{
                      zIndex: profiles.length - index,
                      display: index < currentIndex ? "none" : "block",
                    }}
                  >
                    <ResponsiveProfileCard profile={profile} onSwipe={handleSwipe} showProfileInfo={showProfileInfo} setShowProfileInfo={setShowProfileInfo} toggleProfileInfo={toggleProfileInfo}/>
                  </div>
                ))}

                {/* Show message when all profiles are swiped */}
                {currentIndex >= profiles.length && (
                  <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No more profiles</h2>
                    <p className="text-gray-600">Check back later for more matches!</p>
                  </div>
                )}
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line


                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line

                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line


                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line

                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line


                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line

                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line


                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line

                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line


                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line

                >
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
                <div className="bg-purple-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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
                <div className="bg-red-400 rounded-xl p-4 h-56 flex flex-col justify-end"
                  onClick={() => setActiveTab("home")} // Update this line
                >
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

          <div className="flex flex-col  bg-white">
            {/* Main Content Area */}
            <div className="flex-grow overflow-y-auto ">
              <div className="flex flex-col items-center pt-20 pb-16">
                {/* Profile Image with Completion Ring */}
                <div className="relative mb-2">
                  <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden">
                    <img src={image2} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  {/* Completion Ring */}
                  <svg className="absolute -top-2 -left-2 w-32 h-32" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#f0f0f0" strokeWidth="4" />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#ff4d67"
                      strokeWidth="4"
                      strokeDasharray="289"
                      strokeDashoffset="248" // 289 - (289 * 0.14) to show 14% completion
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  {/* Completion Percentage */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold py-1 px-3 text-center w-32 rounded-full shadow-md">
                    14% complete
                  </div>
                </div>

                {/* Name and Verification */}
                <div className="flex items-center mt-6 ">
                  <h1 className="text-3xl font-normal text-gray-800">Alicia, 27</h1>
                  <svg className="w-6 h-6 ml-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between w-full max-w-xs px-4 mt-4">
                  {/* Settings Button */}
                  <div className=" relative top-0 flex flex-col items-center" onClick={() => navigate("/setting")} >
                    <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
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
                    </button>
                    <span className="text-xs text-gray-700">Settings</span>
                  </div>

                  {/* Edit Profile Button */}
                  <div className="relative top-6 flex flex-col items-center" onClick={() => navigate("/edit-profile")}>
                    <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-2 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full"></div>
                    </button>
                    <span className="text-xs text-gray-700">Edit Profile</span>
                  </div>

                  {/* Add Media Button */}
                  <div className="relative top-0 flex flex-col items-center" onClick={() => navigate("/add-media")}>
                    <button className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-2">
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
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <span className="text-xs text-gray-700">Add Media</span>
                  </div>

                </div>
              </div>

              {/* Curved Divider */}
              <div className="relative h-12 bg-gray-100 shadow-2xl shadow-gray-100">
                <div className="absolute top-0 left-0 right-0 h-12 bg-white rounded-b-[50%] shadow-2xl shadow-gray-100"></div>
              </div>

              {/* Tinder Platinum Section */}

              <div className="bg-gray-100 px-6 py-8 flex flex-col items-center">


                {/* Carousel Section with sliding animation */}
                <div className="relative overflow-hidden mt-2 w-full max-w-lg">
                  {/* Slide Wrapper */}
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentPackageIndex * 100}%)` }}
                  >



                    {packages.map((pkg, index) => (
                      <>

                        <div
                          key={index}
                          className="flex-shrink-0 w-full px-4 flex flex-col items-center "
                        >
                          <div className="flex items-center mb-2">
                            {pkg.icon}

                            <span className="text-lg font-bold text-gray-800">{pkg.name}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-8 text-center">{pkg.description}</p>
                        </div>
                      </>

                    ))}


                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex space-x-2 mb-6">
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${currentPackageIndex === index ? pkg.bgColor : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>




                {/* Get packages Button */}
                <button

                  // onClick={()=>navigate(packages[currentPackageIndex].redirect)}

                  onClick={() => {
                    console.log(packages[currentPackageIndex].redirect); // Debugging
                    navigate(packages[currentPackageIndex].redirect);
                  }}


                  className={`bg-white ${packages[currentPackageIndex].color} text-gray-800 font-bold py-3 px-8 rounded-full border border-gray-300 shadow-sm`}>
                  {packages[currentPackageIndex].buttonText}



                </button>



              </div>


            </div>



            {/* Bottom Tab Indicator */}

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
          {/* <span className="text-xs mt-1">Home</span> */}
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
          {/* <span className="text-xs mt-1">Explore</span> */}
        </button>

        <button
          onClick={() => handleTabChange("upgrade")}
          className={`flex flex-col items-center justify-center w-1/5 h-full ${activeTab === "upgrade" ? "text-tinder-red" : "text-gray-500"
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkle-icon lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
          {/* <span className="text-xs mt-1">Upgrade</span> */}
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
          {/* <span className="text-xs mt-1">Messages</span> */}
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
          {/* <span className="text-xs mt-1">Profile</span> */}
        </button>
      </div>







      {/* Profile Info Expanded View */}
      {showProfileInfo && <TinderProfileExpand showProfileInfo={showProfileInfo} setShowProfileInfo={setShowProfileInfo} toggleProfileInfo={toggleProfileInfo} />}





    </div>


  )
}