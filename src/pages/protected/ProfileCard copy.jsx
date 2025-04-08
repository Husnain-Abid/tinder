import React, { useState } from 'react'

import image1 from "../../asset/image1.jpeg"
import image3 from "../../asset/image2.jpg"
import image2 from "../../asset/image3.jpg"



export default function ProfileCard() {




    // profile card start

    // Sample profile data
    const profile = {
        name: "Huddha",
        age: 32,
        distance: "3 miles away",
        isActive: true,
        images: [
            image1,
            image2,
            image3,
        ],
    }





    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

    // profile card end



    return (
        <>



            {/* Main Content - Profile Card */}
            <div className=" relative flex-grow flex items-center justify-center z-0 bg-gray-100 p-4">
                <div className="relative w-full max-w-md h-[85vh] z-0 rounded-xl overflow-hidden shadow-lg">


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


                    {/*Profile Image */}
                    <div className="relative w-full h-full">
                        <img
                            src={profile.images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${profile.name}'s profile`}
                            className="w-full h-full object-cover"
                        />

                        {/* Navigation Buttons */}
                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
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
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-20 bg-gradient-to-t from-black/80 to-transparent">
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


                </div>



                {/* Action Buttons */}
                <div className="absolute  bottom-4 md:bottom-12 left-1/2 z-30 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4">
                    {/* Rewind Button */}
                    <button className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-500"
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
                            className="h-8 w-8 text-pink-500"
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
                            className="h-6 w-6 text-blue-500"
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
                            className="h-8 w-8 text-green-500"
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
                            className="h-6 w-6 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </button>
                </div>



            </div>



        </>
    )
}






