import { useState } from 'react'
import product1 from '../../../asset/logo1.PNG'
import product2 from '../../../asset/logo2.PNG'
import product3 from '../../../asset/logo3.PNG'
import Footer1 from '../../../components/common/Footer1'
import LoginPopup from '../../../components/common/Login'
import Navbar1 from '../../../components/common/Navbar1'

const Subscription = () => {

  const [showPopup, setShowPopup] = useState(false)


  return (
<>

    <div className="min-h-screen  ">

      <Navbar1 />
      <div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>

        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription Tiers</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upgrade to Plus, Gold, or Platinum for an enhanced Tinder experience.
            </p>
          </div>

          {/* Subscription Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Tinder Plus Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">

                <img src={product1} alt="product1" className='w-40' />


              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Unlimited Likes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Unlimited Rewinds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Passport™ To Any Location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Hide Advertisements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Go Incognito</span>
                </li>
              </ul>
            </div>

            {/* Tinder Gold Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">

                <img src={product3} alt="product2" className='w-40' />

              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>See Who Likes You</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>New Top Picks every day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Weekly Super Likes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <div>
                    <span>1 Free Boost a month</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Free monthly Boost only available to 1 month or longer subscriptions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>
                    And everything you love from <span className="font-medium">Tinder Plus™</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Tinder Platinum Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">

                <img src={product2} alt="product3" className='w-40' />

              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Message before Matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Prioritized Likes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>See the Likes you've sent in the last 7 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>
                    And everything you love from <span className="font-medium">Tinder Gold™</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <div className="max-w-6xl mx-auto">


        {/* Comparison Table */}
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Subscription Tiers at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border">Features</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-700 border">
                    <div className="flex justify-center items-center">

                      <img src={product1} alt="logo1" className='w-28' />

                    </div>
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-700 border">
                    <div className="flex justify-center items-center">
                      <img src={product1} alt="logo1" className='w-28' />

                    </div>
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-700 border">
                    <div className="flex justify-center items-center">
                      <img src={product3} alt="logo1" className='w-40' />

                    </div>
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-700 border">
                    <div className="flex justify-center items-center">
                      <img src={product2} alt="logo1" className='w-40' />

                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Match. Chat. Meet.</td>
                  <td className="py-3 px-4 border text-center text-black">•</td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Unlimited Likes</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Unlimited Rewinds</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Passport™ To Any Location</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Hide Advertisements</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Go Incognito</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600">•</td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Weekly Super Likes</td>
                  <td className="py-3 px-4 border text-center text-black"></td>
                  <td className="py-3 px-4 border text-center text-red-600"></td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>

                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">
                    <div>
                      <p>1 Free Boost a month</p>
                      <p className="text-xs text-gray-500">
                        Free monthly Boost only available for 1 month or longer subscriptions.
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">See Who Likes You</td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">New Top Picks every day</td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-amber-800">•</td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Message before Matching</td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">Prioritized Likes</td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
                <tr className="bg-white text-2xl">
                  <td className="py-3 px-4 border text-sm">See the Likes you've sent in the last 7 days</td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center"></td>
                  <td className="py-3 px-4 border text-center text-gray-600">•</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 max-w-5xl mx-auto">
            * Super Likes and Boosts available through Tinder Gold™ and Tinder Platinum™ subscriptions expire if unused.
            Some Gold subscribers with plans of 1 month or longer may not receive a monthly Boost due to testing. Check
            subscription details in Tinder to see what's included.
          </p>
        </div>

        {/* What is Tinder Section */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Tinder?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Tinder® was introduced on a college campus in 2012 and is the world's most popular app for meeting new
              people. It's been downloaded more than 340 million times and is available in 190 countries and 40+
              languages.
            </p>
            <p>
              Tinder® is a place built on a world of possibility. The possibility of forming connections that could lead
              to more. If you're here to meet new people, expand your social network, meet locals when you're traveling,
              or just live in the now, you've come to the right place.
            </p>
            <p>
              Tinder® is simple and fun — use the Swipe Right™ feature to Like someone, and if someone likes you back,
              it's a Match™! Just tap through the people you're interested in meeting to spark something new.
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button onClick={() => setShowPopup(true)}  className="bg-tinder-red bg-red-400 text-white px-8 py-3 rounded-full font-medium hover:bg-tinder-red/90 transition-colors">
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

export default Subscription

