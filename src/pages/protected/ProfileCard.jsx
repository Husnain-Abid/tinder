"use client"

import { useState, useRef, useEffect } from "react"
import ActionBar from "./ActionBar"

export default function ProfileCard({ profile, onSwipe, activeTab, setActiveTab }) {
    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // State for swipe action
    const [swipeAction, setSwipeAction] = useState(null) // 'like', 'nope', or null
    const [swipeDirection, setSwipeDirection] = useState(null) // 'left', 'right', or null
    const [swipeOffset, setSwipeOffset] = useState(0)
    const [swipeOpacity, setSwipeOpacity] = useState(1)
    const [swipeRotation, setSwipeRotation] = useState(0)

    // Refs for touch/mouse events
    const cardRef = useRef(null)
    const startXRef = useRef(0)
    const startYRef = useRef(0)

    // Function to go to next image
    const nextImage = (e) => {
        e.stopPropagation()
        if (currentImageIndex < profile.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    // Function to go to previous image
    const prevImage = (e) => {
        e.stopPropagation()
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    // Function to handle direct navigation to a specific image
    const goToImage = (index) => {
        if (index >= 0 && index < profile.images.length) {
            setCurrentImageIndex(index)
        }
    }

    // Handle mouse/touch down
    const handleStart = (clientX, clientY) => {
        startXRef.current = clientX
        startYRef.current = clientY
    }

    // Handle mouse/touch move
    const handleMove = (clientX, clientY) => {
        const deltaX = clientX - startXRef.current
        const deltaY = clientY - startYRef.current

        // Only process horizontal swipes that are significant
        if (Math.abs(deltaX) > 20) {
            //   setSwipeOffset(deltaX)

            // Limit swipeOffset to between -250 and 250
            setSwipeOffset(Math.min(Math.max(deltaX, -250), 250))



            // Calculate rotation based on swipe distance (limited to +/- 15 degrees)
            const rotation = Math.min(Math.max(deltaX / 20, -15), 15)
            setSwipeRotation(rotation)

            // Determine swipe action based on direction
            if (deltaX > 50) {
                setSwipeAction("like")
                setSwipeDirection("right")
            } else if (deltaX < -50) {
                setSwipeAction("nope")
                setSwipeDirection("left")
            } else {
                setSwipeAction(null)
                setSwipeDirection(null)
            }
        }
    }

    // Handle mouse/touch end
    const handleEnd = () => {
        // If swipe was significant, complete the action
        if (swipeDirection === "right" && swipeOffset > 100) {
            completeSwipe("like")
        } else if (swipeDirection === "left" && swipeOffset < -100) {
            completeSwipe("nope")
        } else {
            // Reset if swipe wasn't significant
            resetSwipe()
        }
    }

    // Complete the swipe action
    const completeSwipe = (action) => {
        // Animate card off screen
        const direction = action === "like" ? 1 : -1
        // setSwipeOffset(direction * window.innerWidth)
        setSwipeOffset(direction * 250) // Maximum translation limit is 250

        setSwipeOpacity(0)

        // Notify parent component after animation
        setTimeout(() => {
            if (onSwipe) {
                onSwipe(action, profile)
            }
            resetSwipe()
        }, 300)
    }

    // Reset swipe state
    const resetSwipe = () => {
        setSwipeOffset(0)
        setSwipeRotation(0)
        setSwipeAction(null)
        setSwipeDirection(null)
        setSwipeOpacity(1)
    }

    // Handle button clicks for actions
    const handleActionButton = (action) => {
        if (action === "like") {
            setSwipeAction("like")
            setSwipeDirection("right")
            completeSwipe("like")
        } else if (action === "nope") {
            setSwipeAction("nope")
            setSwipeDirection("left")
            completeSwipe("nope")
        } else if (action === "superlike") {
            setSwipeAction("superlike")
            completeSwipe("superlike")
        }
    }

    // Mouse event handlers
    const handleMouseDown = (e) => {
        handleStart(e.clientX, e.clientY)
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    const handleMouseMove = (e) => {
        handleMove(e.clientX, e.clientY)
    }

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        handleEnd()
    }

    // Touch event handlers
    const handleTouchStart = (e) => {
        const touch = e.touches[0]
        handleStart(touch.clientX, touch.clientY)
    }

    const handleTouchMove = (e) => {
        const touch = e.touches[0]
        handleMove(touch.clientX, touch.clientY)
    }

    const handleTouchEnd = () => {
        handleEnd()
    }

    // Clean up event listeners
    useEffect(() => {
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [])

    console.log("swipeDirection", swipeDirection);
    console.log("tab", activeTab);


    const onOpenProfile = () => {
        setActiveTab("packages")
    }

    const onCloseProfile = () => {
        setActiveTab("matches")
    }




    return (

        <>


            <div
                ref={cardRef}
                className="relative mx-auto w-full max-w-md h-[80vh] rounded-xl overflow-hidden shadow-lg z-0"
                style={{
                    transform: `translateX(${swipeOffset}px) rotate(${swipeRotation}deg)`,
                    opacity: swipeOpacity,
                    transition: "opacity 500ms ease, transform 500ms ease", // Add smooth transition for transform
                }}


                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-between px-2 py-2">
                    {profile.images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 flex-1 mx-1 rounded-full ${index <= currentImageIndex ? "bg-white" : "bg-white/30"}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>

                {/* Swipe Action Overlay */}
                {swipeAction && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        {swipeAction === "nope" && (
                            <div className="transform -rotate-12 bg-pink-500 text-white text-5xl font-bold px-6 py-2 rounded-lg border-4 border-white shadow-lg">
                                NOPE
                            </div>
                        )}
                        {swipeAction === "like" && (
                            <div className="transform rotate-12 bg-green-500 text-white text-5xl font-bold px-6 py-2 rounded-lg border-4 border-white shadow-lg">
                                LIKE
                            </div>
                        )}
                        {swipeAction === "superlike" && (
                            <div className="transform bg-blue-500 text-white text-5xl font-bold px-6 py-2 rounded-lg border-4 border-white shadow-lg">
                                SUPER LIKE
                            </div>
                        )}
                    </div>
                )}




                {/* Profile Image */}
                <div className="relative w-full h-1/2 z-0">
                    <img
                        src={profile.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${profile.name}'s profile`}
                        className="w-full h-full object-cover"
                    />

                    {/* Navigation Buttons */}
                    <button
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-10"
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        style={{ opacity: currentImageIndex === 0 ? 0.5 : 1 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-10"
                        onClick={nextImage}
                        disabled={currentImageIndex === profile.images.length - 1}
                        style={{ opacity: currentImageIndex === profile.images.length - 1 ? 0.5 : 1 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>



                {/* Profile Info Overlay */}
                <div className="p-2 pb-28 bg-black  h-full">

                    <div className="bg-white p-2 border-2 text-xl font-medium space-y-2 border-gray-800 h-[42%]">

                        {/* Name and Age */}
                        <div className="flex items-start justify-between">
                            <div>
                                <span className=" ">Name:</span>
                                <span className=" ml-1">{profile.name}</span>
                            </div>

                            <div>
                                <span className=" ">Age:</span>
                                <span className=" ml-1">{profile.age}</span>
                            </div>
                        </div>

                        {/* Gender and Distance */}
                        <div className="flex items-start justify-between">
                            <div>
                                <span className=" ">Orientation:</span>
                                <span className=" ml-1">{profile.orientation}</span>
                            </div>



                            <div>
                                {/* <span className=" font-medium">Age:</span> */}
                                <span className="text-start">{profile.distance}</span>
                            </div>
                        </div>

                        {/* orientation and hoppies */}
                        <div className="flex items-start justify-between">
                            <div>
                                <span className=" ">Gender:</span>
                                <span className="ml-1">{profile.gender}</span>
                            </div>

                            <div className="w-2/6 text-end">
                                <span >Hobbies:</span>
                                <span >{profile.hobbies.join(", ")}</span>
                            </div>
                        </div>


                    </div>



                </div>





                {/* Action Buttons */}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4 z-50">
                    {/* Rewind Button */}
                    {(swipeDirection === null || swipeDirection !== 'left' && swipeDirection !== 'right') && (
                        <button className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="font-bold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                            </svg>
                        </button>
                    )}

                    {/* Dislike Button */}
                    {swipeDirection === null || swipeDirection === 'left' ? (
                        <button className="bg-white p-5 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" onClick={() => handleActionButton("nope")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ) : null}

                    {/* Super Like Button */}
                    {(swipeDirection === null || swipeDirection !== 'left' && swipeDirection !== 'right') && (
                        <button className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" onClick={() => handleActionButton("superlike")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                    )}

                    {/* Like Button */}
                    {swipeDirection === null || swipeDirection === 'right' ? (
                        <button className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" onClick={() => handleActionButton("like")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </button>
                    ) : null}

                    {/* Boost Button */}
                    {(swipeDirection === null || swipeDirection !== 'left' && swipeDirection !== 'right') && (
                        <button className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 fill-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>
                    )}
                </div>



            </div>



            {/* Custom buttons start */}

            <div className="flex items-center justify-center gap-8 bg-gray-100 py-2 px-4 mt-4 w-full">

                {/* Hide Button */}
                <button onClick={() => setActiveTab("detail")} className="bg-gray-800 text-white  px-12 border-2 border-gray-800  py-2 rounded-full text-sm font-medium hover:bg-white hover:text-gray-800">
                    Detail
                </button>

                {/* Hide Button */}
                <button onClick={() => setActiveTab("packages")} className="bg-white   px-12 border-2 border-gray-800  py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white">
                    Profile
                </button>

            </div>

            {/* Custom buttons end */}



            <ActionBar
                onHide={() => resetSwipe()}
                onNope={() => handleActionButton("nope")}
                onLike={() => handleActionButton("like")}
                onSuperLike={() => handleActionButton("superlike")}
                onOpenProfile={() => onOpenProfile()}
                onCloseProfile={() => onCloseProfile()}

                onNextPhoto={(e) => nextImage(e)}  // Ensure you pass the event here
            // onPreviousPhoto={(e) => prevImage(e)}  // Similarly for previous

            />








        </>

    )
}
