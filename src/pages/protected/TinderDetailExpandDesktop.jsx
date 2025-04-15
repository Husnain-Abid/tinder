import { useState } from "react"
import redlogo from "../../asset/logo.png"
import image1 from "../../asset/image1.1.jpg"
import image3 from "../../asset/image1.2.jpg"
import avatar from "../../asset/image1.3.jpg"


const TinderDetailExpandDesktop = ({ showAbout, setShowAbout, activeTab, setActiveTab }) => {

    const [showFullProfile, setShowFullProfile] = useState(true)
    const [showReportModal, setShowReportModal] = useState(false)

    const handleClose = () => {
        setShowFullProfile(false)
    }

    const toggleReportModal = () => {
        setShowReportModal(!showReportModal)
    }



    // profile card start

    // Sample profile data
    const profile = {
        name: "Huddha",
        age: 32,
        distance: "3 miles away",
        isActive: true,
        images: [
            avatar,
            image1,
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
        <div className="relative w-full max-w-md mx-auto min-h-screen bg-gray-100">


            {/* Main Profile Card */}
            <div className="relative h-screen w-full overflow-y-auto bg-white  pb-20">
                {/* Profile Image */}
                <div className="relative px-4 w-full mt-2">




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


                    {/* Profile Image */}
                    <div className="relative w-full h-96 ">
                        <img
                            src={profile.images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${profile.name}'s profile`}
                            className="w-full h-full object-cover rounded-md"
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



                        {/* Profile Info Overlay */}
                        <div className="absolute bottom-4 left-0 right-0 p-4  ">
                            {/* Recently Active */}

                            {/* Name and Age */}
                            <div className="flex items-center">

                                {/* Info Button */}
                                {/* <button onClick={toggleProfileInfo} className="ml-auto bg-black/30 p-1 rounded-full" >
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-down-icon lucide-circle-arrow-down"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg>
                        
                        
                        </button> */}


                            </div>


                        </div>



                    </div>




                </div>

                {/* Profile Info */}
                <div className="px-2">

                    {/* About Me Section */}
                    <div className="my-4 p-4 bg-slate-50 rounded-md">
                        <div className="flex items-center text-gray-500 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span className="text-sm">About me</span>
                        </div>
                        <p className="ml-6 text-gray-800">

                            My name is John, I am Stright man.I am looking for women,
                            i am 34 year old single no children, i live in libya.
                            I work is a banker and i am looking for long term relation.


                        </p>
                    </div>



                    {/* Block and Report Buttons */}
                    <div className="mt-8 space-y-3 w-1/2 mx-auto">
                        <button
                            className="w-full py-3 px bg-slate-800 border border-slate-800 rounded-full text-white font-medium hover:bg-white hover:text-black"
                            onClick={()=>setActiveTab("matches")}
                        >
                            Go Back
                        </button>

                    </div>

                </div>



            </div>









            {/* Report Modal */}
            {showReportModal && (
                <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50">
                    <div className="bg-white rounded-t-2xl w-full max-w-md p-4 animate-slide-up">
                        <h2 className="text-xl font-bold text-center mb-4">Report</h2>

                        <div className="space-y-3" >
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Inappropriate photos</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Feels like spam</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Inappropriate messages</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Offline behavior</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Someone is in danger</button>
                            <button className="w-full py-3 text-left px-4 border-b border-gray-200" onClick={toggleReportModal}>Under 18</button>
                            <button className="w-full py-3 text-left px-4">Other</button>
                        </div>

                        <button className="w-full py-3 mt-4 bg-gray-200 rounded-full font-medium" onClick={toggleReportModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Animation */}
            <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    )
}

export default TinderDetailExpandDesktop

