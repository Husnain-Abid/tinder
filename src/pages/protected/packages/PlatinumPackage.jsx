import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const PlatinumPackage = () => {

  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("6-months")

  // Plan data array
  const plans = [
    {
      id: "6-months",
      label: "Best Value",
      duration: "6 Months",
      price: "$15.83/wk",
      save: "Save 69%",
      isBestValue: true
    },
    {
      id: "1-month",
      label: "Placeholder",
      duration: "1 Week",
      price: "$22.49/wk",
      save: "",
      isBestValue: false
    },
    {
      id: "12-months",
      label: "Most Popular",
      duration: "12 Months",
      price: "$14.99/wk",
      save: "Save 30%",
      isBestValue: false
    },
  ];




  return (
    <div className="bg-gradient-to-b from-slate-200 min-h-screen ">
      <div className="max-w-md mx-auto relative ">
        {/* Header with close button and logo */}
        <div className="flex items-center justify-between  p-6">
          <button className="text-gray-500" onClick={()=>navigate("/home")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center">
            {/* <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 fill-current">
              <path d="M12.007 2.888c.176-.21.36-.366.55-.473a2.25 2.25 0 0 1 .72-.235c.695-.094 1.303.039 1.705.283.402.244.7.59.905.934.415.69.573 1.407.573 1.407s.552-.15 1.146.018c.594.169 1.125.642 1.463 1.463.437 1.055.293 2.223.293 2.223s.572.169 1.026.61c.455.44.738 1.12.738 2.037 0 .918-.455 1.781-1.177 2.24-.723.457-1.537.494-1.537.494s.022.488-.234 1.055c-.257.566-.773 1.157-1.737 1.463-.964.305-1.876.137-1.876.137s-.257.511-.793.96c-.537.45-1.364.81-2.497.81-1.134 0-1.953-.36-2.482-.81-.53-.45-.793-.96-.793-.96s-.913.168-1.876-.137c-.964-.306-1.48-.897-1.737-1.463-.257-.567-.234-1.055-.234-1.055s-.814-.037-1.537-.494C2.455 12.74 2 11.877 2 10.96c0-.918.283-1.598.738-2.037.454-.44 1.026-.61 1.026-.61s-.144-1.168.293-2.223c.338-.821.87-1.294 1.463-1.463.594-.169 1.146-.018 1.146-.018s.158-.718.573-1.407c.205-.343.503-.69.905-.934.402-.244 1.01-.377 1.705-.283.26.035.502.118.72.235.19.107.374.262.55.473.088.105.17.218.249.335a.382.382 0 0 0 .64 0c.079-.117.161-.23.249-.335z" />
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>

            <span className="ml-1 text-lg font-bold">tinder</span>
            <span className="ml-1 px-2 py-0.5 bg-gray-600 text-white text-xs font-bold rounded">PLATINUM</span>


          </div>
          <div className="w-6"></div> {/* Empty div for spacing */}
        </div>

        {/* Main heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8 p-6">
          Upgrade your Likes and Super Likes with Tinder Platinum.
        </h1>



        {/* Plan selection */}


        <div className="mb-4 px-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select a Plan</h2>
          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1.3}
            className="mySwiper"
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer h-44 relative ${selectedPlan === plan.id ? "border-gray-500" : "border-gray-300"}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.isBestValue && (
                    <div className="text-gray-700 font-medium">{plan.label}</div>
                  )}
                  <div className="text-2xl font-bold mb-4">{plan.duration}</div>
                  <div className="text-xl font-bold">{plan.price}</div>
                  {selectedPlan === plan.id && (
                    <div className="absolute top-4 right-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {plan.save && (
                    <div className="absolute bottom-4 right-4 bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                      {plan.save}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>







        {/* Features section */}
        <div className="mb-40 p-6">
          <div className="text-center text-sm text-gray-600 mb-4">Included with Tinder Platinum™</div>

          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Unlimited Likes</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">See Who Likes You</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Priority Likes</p>
                <p className="text-gray-600 text-sm">Your Likes will be seen sooner with Priority Likes.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Unlimited Rewinds</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">1 Free Boost per month</p>
                <p className="text-gray-600 text-sm">
                  Free monthly Boost only available for 1 month or longer subscriptions.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">3 Free Super Likes per week</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">3 Free First Impressions per week</p>
                <p className="text-gray-600 text-sm">Stand out with a message before matching.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Unlimited Passport™ Mode</p>
                <p className="text-gray-600 text-sm">Match and chat with people anywhere in the world.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Control Your Profile</p>
                <p className="text-gray-600 text-sm">Only show what you want them to know.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Control Who Sees You</p>
                <p className="text-gray-600 text-sm">Manage who you're seen by.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Control Who You See</p>
                <p className="text-gray-600 text-sm">Choose the type of people you want to connect with.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">Hide Ads</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Terms and subscription */}
        <div className="mt-8 fixed p-6 bottom-0 bg-white">
          <p className="text-xs text-gray-600 mb-4">
            By tapping Continue, you will be charged and your subscription will renew for the same price and package
            length until you cancel via Account Settings, and you agree to our{" "}
            <span className="text-blue-500">Terms</span>.
          </p>

          <div className="flex items-center justify-center">
            {/* <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 fill-current">
                <path d="M12.007 2.888c.176-.21.36-.366.55-.473a2.25 2.25 0 0 1 .72-.235c.695-.094 1.303.039 1.705.283.402.244.7.59.905.934.415.69.573 1.407.573 1.407s.552-.15 1.146.018c.594.169 1.125.642 1.463 1.463.437 1.055.293 2.223.293 2.223s.572.169 1.026.61c.455.44.738 1.12.738 2.037 0 .918-.455 1.781-1.177 2.24-.723.457-1.537.494-1.537.494s.022.488-.234 1.055c-.257.566-.773 1.157-1.737 1.463-.964.305-1.876.137-1.876.137s-.257.511-.793.96c-.537.45-1.364.81-2.497.81-1.134 0-1.953-.36-2.482-.81-.53-.45-.793-.96-.793-.96s-.913.168-1.876-.137c-.964-.306-1.48-.897-1.737-1.463-.257-.567-.234-1.055-.234-1.055s-.814-.037-1.537-.494C2.455 12.74 2 11.877 2 10.96c0-.918.283-1.598.738-2.037.454-.44 1.026-.61 1.026-.61s-.144-1.168.293-2.223c.338-.821.87-1.294 1.463-1.463.594-.169 1.146-.018 1.146-.018s.158-.718.573-1.407c.205-.343.503-.69.905-.934.402-.244 1.01-.377 1.705-.283.26.035.502.118.72.235.19.107.374.262.55.473.088.105.17.218.249.335a.382.382 0 0 0 .64 0c.079-.117.161-.23.249-.335z" />
              </svg>
              <div className="ml-2">
                <p className="text-sm font-semibold">1 Week</p>
                <p className="text-sm">$22.49/wk</p>
              </div>
            </div> */}
            <button className="bg-gray-800 w-full hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full">
              Continue
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlatinumPackage

