import React from 'react'
import { Link } from 'react-router-dom'
import plus from "../../../asset/plus1.PNG"
import Navbar1 from '../../../components/common/Navbar1'
import Footer1 from '../../../components/common/Footer1'

export default function Plus() {
  return (

    <div className="min-h-screen flex flex-col bg-white w-full">

      <Navbar1 />


      <div className="bg-[#f0f2f4]">
        {/* Header Section */}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl italic md:text-4xl font-bold text-gray-900 mb-6">
              Spread The Love With Tinder Plus<sup>®</sup>
            </h1>
            <p className="text-left text-gray-600 mb-8">
              Choosing who to Like on a dating app can be tough, so we made it easier with Unlimited Likes. That's right,
              you can catch feelings for as many people as you want whether it's love at first sight or you just like
              their photos. Send Likes to increase your match-making potential or just send Likes because it feels good.
              With an upgrade to a Tinder Plus subscription, you'll never run out of Likes again.
            </p>
            <button className="bg-tinder-red bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Phone Mockups Section */}
        <div className="flex justify-center mb-20 mt-6 max-w-xl mx-auto">

          <img src={plus} alt="Tinder App Map View" className="w-full h-auto" />

        </div>


        {/* Features Section */}
        <div className="max-w-3xl mx-auto md:mx-1">
          {/* Unlimited Likes Feature */}
          <div className="flex items-start mb-16">
            <div className="bg-white shadow-2xl rounded-full p-4 mr-6">
              <svg
                className="w-6 h-6 text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Unlimited Likes</h2>
              <p className="text-gray-600">Catch feelings for as many people as you want.</p>
            </div>
          </div>

          {/* Passport Feature */}
          <div className="flex items-start mb-16">
            <div className="bg-white shadow-2xl rounded-full p-4 mr-6">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Passport<sup>™</sup>
              </h2>
              <p className="text-gray-600">Match with people from all over the world.</p>
            </div>
          </div>

          {/* Rewind Feature */}
          <div className="flex items-start mb-16">
          <div className="bg-white shadow-2xl rounded-full p-4 mr-6 text-yellow-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
</div>



            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Rewind<sup>®</sup>
              </h2>
              <p className="text-gray-600">Go back in time and redo your last Like or Nope.</p>
            </div>
          </div>

          {/* Upgrade Suggestion */}
          <div className="text-center mb-12">
            <p className="text-gray-600">
              Want More? Check out{" "}
              <Link to="/subscription-tiers" className="text-tinder-red font-medium hover:underline">
                Tinder Gold™
              </Link>{" "}
              or{" "}
              <Link to="/subscription-tiers" className="text-tinder-red font-medium hover:underline">
                Tinder Platinum™
              </Link>
              .
            </p>
          </div>

          {/* Get Started Button */}
          <div className="flex justify-center mb-12">
            <button className="bg-tinder-red bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>



      </div>


      <Footer1 />


    </div>



  )
}
