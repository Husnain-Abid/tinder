import React, { useState } from 'react'
import Footer1 from '../../../components/common/Footer1'
import { Link } from 'react-router-dom'
import Navbar1 from '../../../components/common/Navbar1'
import plus from "../../../asset/gold1.PNG"
import plus1 from "../../../asset/gold2.PNG"
import plus2 from "../../../asset/gold3.PNG"
import plus3 from "../../../asset/gold4.PNG"
import plus4 from "../../../asset/gold5.PNG"
import plus5 from "../../../asset/gold6.PNG"
import plus6 from "../../../asset/gold7.PNG"
import LoginPopup from '../../../components/common/Login'

export default function Gold() {

    const [showPopup, setShowPopup] = useState(false)
  


return (
<>

    <div className="min-h-screen flex flex-col bg-white w-full">

      <Navbar1 />


      <div className="bg-[#f0f2f4]">
        {/* Header Section */}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl italic md:text-4xl font-bold text-gray-900 mb-6">
              Go for Gold And See Who Likes You
            </h1>
            <p className="text-left text-gray-600 mb-8">
              It doesn’t matter if you’re looking for love, a date, or something casual. When there are only so many hours in a day for dating, a little intel goes a long way. Tinder Gold™ saves time by letting you see who Likes you. Match, pass, and expand photos to view full profiles with a simple tap and get more efficient with your time online. With all your admirers in one place, it’s the best way to get a free confidence boost while you meet new people.
            </p>
            <button onClick={() => setShowPopup(true)}  className="bg-tinder-red bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
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

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus1} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Likes You</h2>
              <p className="text-gray-600">See all your admirers in one place so you can make an adult decision on who you Like and Nope.              </p>
            </div>
          </div>

          {/* Passport Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus2} alt="Tinder App Map View" className="w-12" />
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

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus3} alt="Tinder App Map View" className="w-12" />
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Unlimited Likes
              </h2>
              <p className="text-gray-600">Catch feelings for as many people as you want.              </p>
            </div>
          </div>

          {/* Rewind Feature */}
          <div className="flex items-start mb-16">
            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus4} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Free weekly Super Likes<sup>™</sup>
              </h2>
              <p className="text-gray-600">Stand out from the crowd and increase your matchmaking potential by 3x.</p>
            </div>
          </div>

          {/* Rewind Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus5} alt="Tinder App Map View" className="w-12" />
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                1 Monthly Boost <sup>*</sup>
              </h2>
              <p className="text-gray-600">Get more attention by being one of the top profiles in your local area for 30 minutes.</p>
            </div>
          </div>

          {/* Rewind Feature */}
          <div className="flex items-start mb-16">
            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus6} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Rewind<sup>®</sup>
              </h2>
              <p className="text-gray-600">Go back in time and redo your last Like or Nope.</p>
            </div>
          </div>

          {/* Upgrade Suggestion */}
          <div className="text-center mb-4">
            <p className="text-gray-600">
              Want More? Check out
              <Link to="/subscription-tiers" className="text-tinder-red font-medium hover:underline">
                Tinder Gold™
              </Link>
              or
              <Link to="/subscription-tiers" className="text-tinder-red font-medium hover:underline">
                Tinder Platinum™
              </Link>
              .
            </p>
          </div>



        </div>



      </div>


      <div className="max-w-6xl mx-auto">

        {/* Upgrade Suggestion */}
        <div className="text-left mb-8">
          <p className="text-gray-600 text-xs">
            * Some Gold subscribers with plans of 1 month or longer may not receive a monthly Boost due to testing. Check subscription details in Tinder to see what’s included.
          </p>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-tinder-red bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors" 
          onClick={() => setShowPopup(true)}  
          >
            Get Started
          </button>
        </div>

      </div>

      <Footer1 />


    </div>




  {/* Responsive Mobile Menu */}
  <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />



</>





  )
}
