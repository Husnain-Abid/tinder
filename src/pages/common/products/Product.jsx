import React, { useState } from 'react'
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Navbar1 from '../../../components/common/Navbar1'

import product1 from '../../../asset/product1.webp'
import product2 from '../../../asset/product2.webp'
import product3 from '../../../asset/product3.webp'
import Footer1 from '../../../components/common/Footer1'
import LoginPopup from '../../../components/common/Login'


export default function Product() {

  const [showPopup, setShowPopup] = useState(false)



  return (
<>

    <div className="min-h-screen flex flex-col bg-white w-full">
      {/* Navigation Bar */}

      <Navbar1 />

      {/* Hero Section */}
      <div className="bg-[#f0f2f4]">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12  py-16 px-4 md:px-8 container mx-auto ">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Match. Chat. Meet.
                <br />
                Tinder<sup className="text-lg">®</sup>.
              </h1>
              <p className="text-gray-600 mb-8">
                Go beyond your social circle and connect with people near and far. You're about to have the best online
                dating experience — all you need are some good pics and a solid bio to stand out.
              </p>
              <div className='text-center'>
                <button onClick={() => setShowPopup(true)} className="bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
                  Join Now
                </button>

              </div>
            </div>

            <div className="w-full max-w-xs">
              <div className="rounded-xl overflow-hidden ">
                <img src={product1} alt="Tinder Profile" />
              </div>
            </div>
          </div>

        </div>

      </div>



      <div className="max-w-6xl mx-auto">

        {/* Swipe Feature Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12 mb-24 px-4 md:px-8">
          <div className="flex justify-center  w-full md:w-1/2">
            <div className="flex space-x-[-20px]">
              <img
                src={product2}
                alt="Tinder App Like"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              It Starts with a Swipe<sup>®</sup>
            </h2>
            <p className="text-gray-600">
              See what happens when you Like someone with our iconic Swipe Right<sup>™</sup> feature.
            </p>
          </div>
        </div>

        {/* Audiobook Section */}
        {/* <div className="flex justify-end mb-8">
          <div className="flex items-start max-w-md">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Paperback or audiobook?
            </button>
            <div className="ml-4 bg-gray-200 rounded-lg p-3 relative">
              <div className="absolute left-[-8px] top-3 w-0 h-0 border-t-8 border-r-8 border-b-0 border-l-0 border-gray-200"></div>
              <p className="text-sm text-gray-700">The multitasker in me says audiobook.</p>
            </div>
          </div>
        </div> */}

        {/* Say More Than Hey Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 px-4 md:px-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Say More Than Hey</h2>
            <p className="text-gray-600">
              Chat with your matches with ease. And when you're at a loss for words, react with GIFs and emojis.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={product3} alt="cxv" className='w-80' />
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-tinder-red text-white bg-red-400 px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors"
          onClick={() => setShowPopup(true)}
          
          >
            Get Started
          </button>
        </div>

















      </div>



      {/* Footer */}
      <Footer1 />



    </div>



  {/* Responsive Mobile Menu */}
  <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

</>



  )
}
