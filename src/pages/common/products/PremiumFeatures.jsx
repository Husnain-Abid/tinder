import { Link } from "react-router-dom"

import product1 from '../../../asset/premium1.PNG'
import product2 from '../../../asset/premium2.PNG'
import product3 from '../../../asset/download1.PNG'
import Navbar1 from "../../../components/common/Navbar1"
import Footer1 from "../../../components/common/Footer1"



const PlusFeatures = () => {
  return (

    <div className="min-h-screen  bg-white">
      {/* Hero Section */}
            <Navbar1 />
    
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Take It Up A Notch</h1>
              <p className="text-gray-600 mb-8">
                When you're ready to get the most out of Tinder®, tap into our premium features to upgrade your Likes and
                elevate your experience.
              </p>

              <div className="text-center">

                <button className="bg-tinder-red bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
                  Join Now
                </button>

              </div>

            </div>
            <div className="w-full max-w-xs">
              <div className="rounded-xl overflow-hidden ">

                <img src={product1} alt="home" />

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Super Like Feature Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-3 mb-24">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg
                className="w-10 h-10 text-blue-500 bg-white rounded-full p-1 border"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
              Stand Out With A Super Like™
            </h2>
            <p className="text-gray-600 mb-2 text-center md:text-left">
              Increase your chances of matching by 3x and have convos that last 70% longer. All members get 1 free Super
              Like™ a month.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex justify-center">
              <div className="relative w-64 md:w-80">
                <img
                  src={product2}
                  alt="Tinder App Super Like"
                  className="w-full h-auto  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Boost Feature Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2 order-1">
            <div className="flex justify-center">
              <div className="relative w-64 md:w-80">
                <img
                  src={product3}
                  alt="Tinder App Boost"
                  className="w-full h-auto rounded-3xl "
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-2">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg
                className="w-10 h-10 text-purple-500 bg-white rounded-full p-1 border"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
              Boost Yourself To The Top
            </h2>
            <p className="text-gray-600 mb-2 text-center md:text-left">
              Get up to 10x more profile views with the tap of a button—maximize your time and match potential.
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-tinder-red bg-red-400  text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>


   

<Footer1/>


    </div>





  )
}

export default PlusFeatures

