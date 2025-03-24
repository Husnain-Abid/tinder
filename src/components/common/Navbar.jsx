import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/whiteLogo.png";
import LoginPopup from "./Login";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown

  const [safetyDropdownOpen, setSafetyDropdownOpen] = useState(false); // For dropdown

  const [showPopup, setShowPopup] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.getElementById("testimonials");
      if (testimonialSection) {
        const rect = testimonialSection.getBoundingClientRect();
        setShowNavbar(rect.top > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav
        className={`bg-opacity-50 fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center ${showNavbar ? "block" : "hidden"
          }`}
      >
        {/* Left Section */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-40" />

          {/* Navbar Links */}
          <div className="ml-6 hidden md:flex  space-x-4 text-white">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}

            >
              <Link to="/products" className="text-lg text-white hover:text-red-600 hover:underline">
                Products
              </Link>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-3 left-0 mt-2 w-48  rounded-lg py-2">
                  <Link to="/premium" className="block font-bold  text-white hover:text-red-600 hover:underline ">
                    Premium Features
                  </Link>
                  <Link to="/subscription" className="block font-bold text-white hover:text-red-600 hover:underline ">
                    Subscription Tiers
                  </Link>
                  <Link to="/plus" className="block pl-6  text-white hover:text-red-600 hover:underline ">
                    Tinder Plus
                  </Link>
                  <Link to="/gold" className="block pl-6 text-white hover:text-red-600 hover:underline ">
                    Tinder Gold
                  </Link>
                  <Link to="/platinum" className="block pl-6 text-white hover:text-red-600 hover:underline ">
                    Tinder Platinum
                  </Link>

                  <Link to="/premium" className="block font-bold text-white hover:text-red-600 hover:underline ">
                    Tinder SELECT
                  </Link>

                </div>
              )}
            </div>

            <Link to="/about" className="text-lg text-white hover:text-red-600 hover:underline">
              Learn
            </Link>


            <div
              className="relative"
              onMouseEnter={() => setSafetyDropdownOpen(true)}
              onMouseLeave={() => setSafetyDropdownOpen(false)}
            >

              <Link to="/safety" className="text-lg text-white hover:text-red-600 hover:underline">
                Safety
              </Link>

              {/* Dropdown Menu */}
              {safetyDropdownOpen && (
                <div className="absolute top-3 left-0 mt-2 w-48 font-bold  rounded-lg py-2">

                  <Link to="/community-guidelines" className="block  text-white hover:text-red-600 hover:underline ">
                    Community Guidelines
                  </Link>

                  <Link to="/safety-tips" className="block  text-white hover:text-red-600 hover:underline ">
                    Safety Tips
                  </Link>

                  <Link to="/safety-reporting" className="block   text-white hover:text-red-600 hover:underline ">
                    Safety & Reporting
                  </Link>

                  <Link to="/safety-policy" className="block  text-white hover:text-red-600 hover:underline ">
                    Safety & Policy
                  </Link>

                  <Link to="/security" className="block  text-white hover:text-red-600 hover:underline ">
                    Security
                  </Link>


                </div>
              )}
            </div>



            <Link to="/support" className="text-lg  text-white hover:text-red-600 hover:underline">
              Support
            </Link>
            <Link to="/download" className="text-lg text-white hover:text-red-600 hover:underline">
              Download
            </Link>
          </div>


        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-white ">
          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm">Language</span>
          </div>
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium" onClick={() => setShowPopup(true)}  >
            Log In
          </button>
        </div>

      </nav>


      <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />



    </>

  );
}
