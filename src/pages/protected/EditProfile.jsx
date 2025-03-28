import { useState } from "react"
import image1 from "../../asset/image1.jpeg"
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("edit")
    const [smartPhotos, setSmartPhotos] = useState(false)
    const [showGender, setShowGender] = useState(true)
    const [showAge, setShowAge] = useState(true)

    return (
        <div className="bg-gray-50 min-h-screen pb-20 text-xs">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 border-b border-gray-200">
                <button className="text-gray-500"></button>
                <button className="text-gray-500 font-bold">Edit Info</button>
                {/* <div className="flex space-x-4">
          <button
            className={`font-medium ${activeTab === "edit" ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("edit")}
          >
            Edit Info
          </button>
          <button
            className={`font-medium ${activeTab === "preview" ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
        </div> */}
                <button className="text-pink-500 font-medium" onClick={()=>navigate("/home")}>Done</button>
            </div>

            {/* Main Content */}
            <div className="">
                {/* Profile Photos */}
                <div className="mt-4 px-4">
                    <h2 className="text-xs font-bold text-gray-500 mb-2">PROFILE PHOTOS</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <div
                                key={item}
                                className={`aspect-square rounded-lg border   flex items-center bg-gray-100 justify-center overflow-hidden ${index === 0 ? "relative" : "border-gray-600 border-dashed relative"}`}
                            >
                                {index === 0 ? (
                                    <>
                                        <img
                                            src={image1}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                        <button className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                    </>
                                ) : (
                                    <button className="absolute bottom-0 right-0 w-5 h-5  rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
                                )}
                            </div>
                        ))}
                    </div>


                    <p className="text-center text-xs mt-4 "> Add a video, pic, or Loop to get 4% closer to completing your profile and you may even even get more Likes. </p>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium py-3 rounded-full mt-4">Add Media</button>



                </div>



                <div className="flex py-2 px-4 justify-between items-center mt-4  border-t border-gray-200 bg-white ">
                    <div>
                        <h3 className="font-medium">Smart Photos</h3>

                    </div>


                    <div className="relative inline-block w-12 align-middle select-none">
                        <input
                            type="checkbox"
                            name="toggle-age"
                            id="toggle-age"
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                            checked={!showAge}
                            onChange={() => setShowAge(!showAge)}
                        />
                        <label
                            htmlFor="toggle-age"
                            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${!showAge ? "bg-pink-500" : "bg-gray-300"}`}
                        ></label>
                    </div>
                </div>


                <div className=" py-2 px-4" >
                    <p className="text-xs text-gray-500 ">
                        Intelligently sorts all of your profile photos to get you more matches
                    </p>

                </div>


                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <h3 className="text-xs font-medium text-gray-500 mb-2">ABOUT ME (0%)</h3>
                    <button className="flex items-center justify-between w-full py-2 ">
                        <span className="text-gray-400 py-2"></span>
                        <span className="text-pink-500 text-xs">Add</span>
                    </button>
                </div>




                {/* Passions Section */}
                <div className="py-2 px-4  border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">PASSIONS</h3>
                        <span className="text-xs font-medium text-pink-500">0/5</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add passions</span>
                        <div className="bg-pink-500 rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Prompts Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">PROMPTS</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add prompts</span>
                        <div className="bg-pink-500 rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Height Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">HEIGHT</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add height</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Relationship Goals Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">RELATIONSHIP GOALS</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Looking for...</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Languages Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">LANGUAGES</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add languages I know</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Basics Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">BASICS</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Zodiac</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Education</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Family Plans</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">COVID Vaccine</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Personality Type</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Communication Style</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Love Style</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Lifestyle Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">LIFESTYLE</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Drinking</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Smoking</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Workout</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Dietary Preference</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Social Media</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Sleeping Habits</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Job Title Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">JOB TITLE</h3>
                        <span className="text-xs font-medium bg-pink-100 text-pink-500 px-1 rounded text-[10px]">RECOMMENDED</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add job title</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Company Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">COMPANY</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add Company</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* School Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">SCHOOL</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Add School</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Living In Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">LIVING IN</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Living in...</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Ask Me About Section */}
                <div className="py-2 px-4 border-t border-gray-200 ">
                    <h3 className="text-xs font-medium text-gray-500 mb-2">ASK ME ABOUT</h3>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Dating Out</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">We + My Phone</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Spotify Anthem Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">SPOTIFY ANTHEM</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Choose an Anthem</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Top Spotify Artists Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs font-medium text-gray-500">TOP SPOTIFY ARTISTS</h3>
                        <span className="text-xs font-medium text-pink-500">0%</span>
                    </div>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-400">Connect Spotify</span>
                        <span className="text-pink-500">Add</span>
                    </button>
                </div>

                {/* Control Your Profile Section */}
                <div className="py-2 px-4 border-t border-gray-200 bg-white">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-xs font-medium text-gray-500">CONTROL YOUR PROFILE</h3>
                        <span className="text-xs font-medium bg-pink-100 text-pink-500 px-1 rounded text-[10px]">RECOMMENDED</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-800">Don't Show My Age</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-age"
                                id="toggle-age"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={!showAge}
                                onChange={() => setShowAge(!showAge)}
                            />
                            <label
                                htmlFor="toggle-age"
                                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${!showAge ? "bg-pink-500" : "bg-gray-300"}`}
                            ></label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-800">Don't Show My Distance</span>
                        <div className="relative inline-block w-12 align-middle select-none">
                            <input
                                type="checkbox"
                                name="toggle-distance"
                                id="toggle-distance"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                                checked={false}
                                onChange={() => { }}
                            />
                            <label
                                htmlFor="toggle-distance"
                                className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer bg-gray-300"
                            ></label>
                        </div>
                    </div>
                </div>

                {/* Gender Section */}
                <div className="py-2 px-4 border-t border-gray-200">
                    <h3 className="text-xs font-medium text-gray-500 mb-2">GENDER</h3>
                    <button className="flex items-center justify-between w-full py-2">
                        <span className="text-gray-800">Woman</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Custom CSS for toggle switches */}
            <style jsx>{`
        .toggle-checkbox:checked {
          transform: translateX(100%);
          border-color: #ec4899;
        }
        .toggle-label {
          transition: background-color 0.2s ease-in;
        }
      `}</style>
        </div>
    )
}

export default EditProfile

