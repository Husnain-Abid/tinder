"use client"

import { useState, useEffect } from "react"

import LeftSidebar from './LeftSidebar';
import ProfileCard from './ProfileCard';

import image1 from "../../asset/image1.1.jpg"
import image3 from "../../asset/image1.2.jpg"
import image2 from "../../asset/image1.3.jpg"

import image4 from "../../asset/image4.jpg"
import image5 from "../../asset/image5.jpg"
import image6 from "../../asset/image7.jpg"

import image7 from "../../asset/image6.jpg"
import image8 from "../../asset/image8.jpg"
import image9 from "../../asset/image9.jpg"
import TinderProfileExpandDesktop from "./TinderProfileExpandDesktop";
import TinderDetailExpandDesktop from "./TinderDetailExpandDesktop";

export default function DesktopHome() {



    const [showAbout, setShowAbout] = useState(false)




    // Initial profiles data
    const initialProfiles = [
        {
            id: 1,
            name: "Huddha",
            age: 32,
            distance: "13 miles away",
            isActive: true,
            images: [image1, image2, image3],
            status: "Single",        // Added single
            gender: "Man",          // Added man, false because Mia is not a man
            orientation: "Straight",      // Added straight
            country: "Nepal",    // Added country
            hobbies: ["Hiking", "Reading", "Yoga"],  // Added hobbies
        },
        {
            id: 2,
            name: "Ramsey",
            age: 20,
            distance: "11 miles away",
            isActive: false,
            images: [image4, image5, image7],
            status: "Married",        // Added single
            gender: "Woman",          // Added man, false because Mia is not a man
            orientation: "Straight",      // Added straight
            country: "USA",      // Added country
            hobbies: ["Hiking", "Reading", "Yoga"],  // Added hobbies
        },
        {
            id: 3,
            name: "Mia",
            age: 28,
            distance: "15 miles away",
            isActive: true,
            images: [image6, image8, image9],
            status: "Single",        // Added single
            gender: "Man",          // Added man, false because Mia is not a man
            orientation: "Straight",      // Added straight
            country: "Canada",   // Added country
            hobbies: ["Hiking", "Reading", "Yoga"],  // Added hobbies
        },
    ];





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



    // tab 

    const [activeTab, setActiveTab] = useState("matches")






    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex min-h-screen bg-gray-100">
                {/* Left Sidebar */}
                <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />


                {/* Main Content */}
                <div className="flex flex-col flex-grow">

                    {/*  Profile Cards */}
                    {(activeTab === "matches" || activeTab === "messages") ?
                        (
                            <div className="relative flex-grow flex items-center justify-center z-0 bg-gray-100 p-4">

                                {profiles.map((profile, index) => (
                                    <div
                                        key={profile.id}
                                        className={`absolute ${index < currentIndex ? "hidden" : ""}`}
                                        style={{
                                            zIndex: profiles.length - index,
                                            display: index < currentIndex ? "none" : "block",
                                        }}
                                    >
                                        <ProfileCard profile={profile} onSwipe={handleSwipe} activeTab={activeTab} setActiveTab={setActiveTab} showAbout={showAbout} setShowAbout={setShowAbout} />
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
                        ) : ""
                    }


                    {/* Profile Info Expanded View */}

                    {(activeTab === "packages") &&
                        <TinderProfileExpandDesktop activeTab={activeTab} setActiveTab={setActiveTab} />
                    }

                    {(activeTab === "detail") &&
                        <TinderDetailExpandDesktop  activeTab={activeTab} setActiveTab={setActiveTab} />
                    }












                </div>




            </div>
        </>
    )
}
