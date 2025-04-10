"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const TinderMyBoost = () => {

  const navigate = useNavigate();


  const [activeBoost, setActiveBoost] = useState(1)
  const carouselRef = useRef(null)

  const boostPackages = [
    {
      id: 0,
      count: 1,
      price: "$5.99",
      name: "Be Seen",
      para: "Be a top profile in your area for 30 minutes to get more matches!",
      pricePerBoost: "$5.99 per Boost",
      savePercent: null,
      popular: false,
    },
    {
      id: 1,
      count: 5,
      price: "$19.99",
      name: "Be Seen",
      para: "Be a top profile in your area for 30 minutes to get more matches!",
      pricePerBoost: "$4.00 per Boost",
      savePercent: 33,
      popular: true,
    },
    {
      id: 2,
      count: 10,
      price: "$34.99",
      name: "Be Seen",
      para: "Be a top profile in your area for 30 minutes to get more matches!",
      pricePerBoost: "$3.50 per Boost",
      savePercent: 42,
      popular: true,
    },
    {
      id: 3,
      count: "Get Primetime Boosts",
      price: "$34.99",
      name: "Timing is everything!",
      para: "Get Primetime Boosts and be seen more during peak hours.",
      pricePerBoost: "$3.50 per Boost",
      savePercent: 42,
      popular: false,
    },
  ]

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft
      const itemWidth = carouselRef.current.offsetWidth
      const selectedIndex = Math.round(scrollPosition / itemWidth)
      setActiveBoost(selectedIndex)
    }
  }

  const scrollToBoost = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Initial scroll to the popular option
    const popularIndex = boostPackages.findIndex((pkg) => pkg.popular)
    if (popularIndex !== -1) {
      setTimeout(() => scrollToBoost(popularIndex), 100)
    }
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md md:max-w-6xl mx-auto bg-white md:bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center px-4 pt-4 border-gray-200">
          <button className="text-gray-500" onClick={() => navigate("/home")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-4">
          {/* Top Section - Changes based on selected boost */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {boostPackages[activeBoost].name}
            </h2>
            <p className="text-gray-600 ">
              {boostPackages[activeBoost].para}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mb-4">
            <div
              ref={carouselRef}
              className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide mx-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {boostPackages.map((pkg, index) => (
                <div key={pkg.id} className="flex-shrink-0 w-80 md:w-60 snap-center px-4">
                  <div
                    className={`
                      relative border-2 rounded-xl p-6 flex flex-col items-center 
                      justify-center border-gray-50 shadow-md  py-10
                      
                    `}
                    onClick={() => scrollToBoost(index)}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold w-full text-center px-3 py-4 rounded-t-lg ">
                        MOST POPULAR
                      </div>
                    )}

                    <div className="text-center  mt-4">
                      <p className="text-lg font-bold text-gray-800 mb-10">
                        {pkg.count} {pkg.count === 1 ? "Boost" : "Boosts"}
                      </p>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-purple-500 text-purple-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                      </div>
                    </div>

                    <div className="text-center my-4">

                      <p className="text-xl font-normal text-gray-800">{pkg.price}</p>
                    </div>

                    <div>
                      <button className=" px-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
                        Select
                      </button>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className=" md:hidden flex justify-center space-x-2 mb-4">
            {boostPackages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${activeBoost === index ? "bg-purple-500" : "bg-gray-300"}`}
                onClick={() => scrollToBoost(index)}
              />
            ))}
          </div>

          {/* divider */}
          <div className="relative w-full border-t-2">
            <div className="block md:hidden absolute left-36  -top-3 bg-white px-4"> or </div>


          </div>

          {/* Continue Button */}


          <div className="mt-10 relative border rounded-lg overflow-hidden">

            <div className="bg-slate-200 text-center py-1">1 free boost a month</div>
            <div className="flex justify-between items-center p-4">
              <div className="flex gap-2">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 fill-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                <h1 className="font-bold">


                  Get Tinder Gold

                </h1>

              </div>
              <button className="border rounded-full text-sm px-4 py-1">select</button>
            </div>



          </div>



        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default TinderMyBoost

