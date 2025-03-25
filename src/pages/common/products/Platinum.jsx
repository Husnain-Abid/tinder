import React, { useState } from 'react'
import Footer1 from '../../../components/common/Footer1'
import { Link } from 'react-router-dom'
import Navbar1 from '../../../components/common/Navbar1'
import plus from "../../../asset/platinum1.PNG"
import plus1 from "../../../asset/platinum2.PNG"
import plus2 from "../../../asset/platinum3.PNG"
import plus3 from "../../../asset/platinum4.PNG"
import plus4 from "../../../asset/platinum5.PNG"
import plus5 from "../../../asset/platinum6.PNG"
import plus6 from "../../../asset/platinum7.PNG"
import plus7 from "../../../asset/platinum8.PNG"
import plus8 from "../../../asset/platinum9.PNG"
import plus9 from "../../../asset/platinum10.PNG"
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
            Get Noticed by the People You Like With Tinder Platinum™
            </h1>
            <p className="text-left text-gray-600 mb-8">
            Increase your match-making potential and enjoy most of Tinder’s premium features with Tinder Platinum™! Dating online just got easier. See someone you’d love to meet and can’t wait to match? As a Platinum subscriber, you can attach a note to every Super Like you send, increasing your match-making potential by up to 25%. And when you do—feel free to stand out in a major way by complimenting their photos or giving them your best opener. By making the first move, you can speed up the process and start to chat with people sooner.
            </p>
            <button className="bg-tinder-red bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors" onClick={() => setShowPopup(true)} >
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
              <h2 className="text-xl font-bold text-gray-900 mb-2">Add a Note to Every Super Like</h2>
              <p className="text-gray-600">Get chatting faster by attaching a note to every Super Like you send.</p>
            </div>
          </div>

          {/* Unlimited Likes Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus2} alt="Tinder App Map View" className="w-16" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Priority Likes</h2>
              <p className="text-gray-600">The best things in life are free to Platinum subscribers, Priority Likes makes sure your profile is seen faster by the people you Like and Super Like.
              </p>
            </div>
          </div>

          {/* Unlimited Likes Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus3} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Likes You</h2>
              <p className="text-gray-600">See all your admirers in one place so you can make an adult decision on who you Like and Nope.
              </p>
            </div>
          </div>

          {/* Unlimited Likes Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus4} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Top Picks</h2>
              <p className="text-gray-600">Get a glance at 10 categorized profiles each day, tailored just for you.</p>
            </div>
          </div>

          {/* Passport Feature */}
          <div className="flex items-start mb-16">

            <div className="shadow-2xl rounded-full  mr-6">
              <img src={plus5} alt="Tinder App Map View" className="w-12" />
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
              <img src={plus6} alt="Tinder App Map View" className="w-12" />
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
              <img src={plus7} alt="Tinder App Map View" className="w-12" />
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
              <img src={plus8} alt="Tinder App Map View" className="w-12" />
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
              <img src={plus9} alt="Tinder App Map View" className="w-12" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Rewind<sup>®</sup>
              </h2>
              <p className="text-gray-600">Go back in time and redo your last Like or Nope.</p>
            </div>
          </div>


        </div>



      </div>


      <div className="max-w-6xl mx-auto">


        {/* Get Started Button */}
        <div className="flex justify-center mb-12">
          <button onClick={() => setShowPopup(true)} className="bg-tinder-red bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
            Get Started
          </button>
        </div>

      </div>

      <Footer1 />


    </div>


    <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />


</>





  )
}
