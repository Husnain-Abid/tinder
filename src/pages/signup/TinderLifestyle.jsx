"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TinderLifestyle = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook


  const [drinkingHabit, setDrinkingHabit] = useState(null)
  const [smokingHabit, setSmokingHabit] = useState(null)
  const [workoutHabit, setWorkoutHabit] = useState(null)
  const [pets, setPets] = useState([])

  const togglePet = (pet) => {
    if (pets.includes(pet)) {
      setPets(pets.filter((p) => p !== pet))
    } else {
      setPets([...pets, pet])
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white md:max-w-6xl md:mx-auto">
      {/* Progress Bar */}
   {/* Progress Bar */}
   <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-7/12"></div>
        </div>



      {/* Header */}
      <div className="flex justify-between items-center p-4">
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
        <button className="text-gray-800 font-medium"
                        onClick={() => navigate("/interest")}         
        >Skip</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Let's talk lifestyle habits, Judy</h1>
          <p className="text-gray-600 mt-1">Do their habits match yours? You go first.</p>
        </div>

        {/* Drinking Habits */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.78 4.22a1 1 0 0 0-1.42 0L17 7.58V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5.58L3.64 4.22a1 1 0 0 0-1.42 1.42L5 8.42V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.42l2.78-2.78a1 1 0 0 0 0-1.42zM17 21H7V3h10v18z" />
              </svg>
            </div>
            <span className="font-medium text-gray-800">How often do you drink?</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "Not for me" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("Not for me")}
            >
              Not for me
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "Sober" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("Sober")}
            >
              Sober
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "Sober curious" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("Sober curious")}
            >
              Sober curious
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "On special occasions" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("On special occasions")}
            >
              On special occasions
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "Socially on weekends" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("Socially on weekends")}
            >
              Socially on weekends
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${drinkingHabit === "Most Nights" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setDrinkingHabit("Most Nights")}
            >
              Most Nights
            </button>
          </div>
        </div>

        {/* Smoking Habits */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 10H7V8h13m0 6H7v-2h13m0 6H7v-2h13M3 8h2v2H3zm0 4h2v2H3zm0 4h2v2H3z" />
              </svg>
            </div>
            <span className="font-medium text-gray-800">How often do you smoke?</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-2 rounded-full text-sm ${smokingHabit === "Social smoker" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setSmokingHabit("Social smoker")}
            >
              Social smoker
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${smokingHabit === "Smoker when drinking" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setSmokingHabit("Smoker when drinking")}
            >
              Smoker when drinking
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${smokingHabit === "Non-smoker" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setSmokingHabit("Non-smoker")}
            >
              Non-smoker
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${smokingHabit === "Smoker" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setSmokingHabit("Smoker")}
            >
              Smoker
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${smokingHabit === "Trying to quit" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setSmokingHabit("Trying to quit")}
            >
              Trying to quit
            </button>
          </div>
        </div>

        {/* Workout Habits */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
              </svg>
            </div>
            <span className="font-medium text-gray-800">Do you workout?</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-2 rounded-full text-sm ${workoutHabit === "Everyday" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setWorkoutHabit("Everyday")}
            >
              Everyday
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${workoutHabit === "Often" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setWorkoutHabit("Often")}
            >
              Often
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${workoutHabit === "Sometimes" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setWorkoutHabit("Sometimes")}
            >
              Sometimes
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${workoutHabit === "Never" ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => setWorkoutHabit("Never")}
            >
              Never
            </button>
          </div>
        </div>

        {/* Pets */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.35 3c1.94 0 3.5 1.56 3.5 3.5 0 .58-.16 1.16-.47 1.66l-.12.2c-.44.73-.7 1.55-.7 2.39V12c0 1.1.9 2 2 2h.28c.35 0 .68-.16.89-.43l1.29-1.71c.35-.46.87-.71 1.44-.71h.31c1.15 0 2.11.89 2.21 2.03l.01.14c.05.59-.18 1.17-.61 1.57l-.06.06c-.75.75-1.7 1.16-2.71 1.16-.16 0-.32-.01-.48-.03A3.981 3.981 0 0 1 12 18c-2.21 0-4-1.79-4-4v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5c0 1.66 1.34 3 3 3 1.25 0 2.4-.77 2.83-1.96l.05-.14c.07-.23.1-.46.1-.69 0-.23-.04-.46-.11-.67l-.02-.06c-.08-.22-.22-.38-.39-.51l-.09-.07c-.12-.08-.26-.13-.4-.13h-.31c-.17 0-.33.05-.46.15l-.13.11c-.23.18-.39.45-.45.74l-.03.15c-.03.26-.22.47-.47.53l-.16.02c-.31.04-.64-.12-.78-.4l-.4-.78c-.09-.17-.14-.37-.14-.57V11c0-1.06.33-2.09.95-2.95l.05-.08c.17-.3.28-.63.28-.97 0-.83-.67-1.5-1.5-1.5-.5 0-.97.25-1.26.66l-.06.09c-.16.28-.44.45-.76.45-.43 0-.8-.28-.94-.7l-.04-.11c-.14-.43-.13-.89.02-1.31l.09-.23c.18-.43.55-.77 1-.91l.25-.07c.15-.04.3-.06.45-.06m0-2c-.39 0-.78.06-1.14.16-.69.18-1.3.58-1.74 1.16-.44.58-.7 1.26-.73 2-.03.72.19 1.41.61 2l.01.01c.42.58 1.07.92 1.76.97.69.05 1.38-.18 1.9-.62.05-.05.09-.1.14-.15.36-.42.89-.66 1.44-.66 1.38 0 2.5 1.12 2.5 2.5 0 .59-.22 1.15-.6 1.58-.63 1.13-1 2.38-1 3.67v.18c0 .32.08.62.22.89.44.86 1.3 1.43 2.29 1.43h.31c.29 0 .58-.06.84-.18.26-.12.49-.3.67-.53l1.29-1.71c.26-.35.67-.56 1.11-.56h.31c.4 0 .77.13 1.08.35.31.22.54.53.67.89.13.36.14.75.03 1.11-.11.36-.34.68-.65.89-.9.9-2.11 1.39-3.34 1.39-.2 0-.4-.01-.59-.04-.01 0-.02 0-.03 0-2.79 0-5.09-2.12-5.36-4.84-.95.86-2.2 1.38-3.58 1.38-2.97 0-5.38-2.42-5.38-5.38v-.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v.5c0 .14.01.28.04.42.38-.58.94-.92 1.6-.92h.28c.18 0 .35-.02.52-.06.01-.3.02-.61.02-.92V10.75c0-.64.2-1.26.58-1.77l.12-.2c.15-.25.23-.54.23-.83 0-.83-.67-1.5-1.5-1.5-.21 0-.41.04-.6.12-.19.08-.35.2-.48.35-.13.15-.22.33-.27.52-.05.19-.06.39-.03.59.08.47-.05.95-.35 1.32-.3.37-.74.6-1.21.64-.47.04-.94-.11-1.29-.42-.35-.31-.57-.74-.62-1.21-.04-.47.11-.94.42-1.29.3-.35.73-.57 1.2-.62.08-.01.16-.01.24-.01z" />
              </svg>
            </div>
            <span className="font-medium text-gray-800">Do you have any pets?</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-2 rounded-full text-sm ${pets.includes("Dog") ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => togglePet("Dog")}
            >
              Dog
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${pets.includes("Cat") ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => togglePet("Cat")}
            >
              Cat
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${pets.includes("Reptile") ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => togglePet("Reptile")}
            >
              Reptile
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${pets.includes("Amphibian") ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => togglePet("Amphibian")}
            >
              Amphibian
            </button>
            <button
              className={`px-3 py-2 rounded-full text-sm ${pets.includes("Bird") ? "bg-gray-600 text-white border border-gray-300" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
              onClick={() => togglePet("Bird")}
            >
              Bird
            </button>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="px-4 py-8 border-t-2">
        <button
                onClick={() => navigate("/interest")} 

          className={`w-full py-3.5 rounded-full text-center font-medium ${
            drinkingHabit || smokingHabit || workoutHabit || pets.length > 0
              ? "  bg-gray-800 text-white border border-gray-300 "
              : "bg-gray-200 text-gray-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TinderLifestyle

