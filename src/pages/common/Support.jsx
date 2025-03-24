import { Link } from "react-router-dom"

import logo from "../../asset/logo.png"



const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">

          <img src={logo} alt="logo" className="w-32" />


        </Link>
        <Link to="/" className="text-red-400 hover:text-tinder-red/80 text-sm font-medium">
          Back to Tinder
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 pt-16 pb-24">
        <div className="w-full container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Hi. How can we help?</h1>

          {/* Search Bar */}
          <div className="relative mb-10 md:mb-40 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-3 pl-10 text-gray-900 border-0 border-b border-gray-300 focus:outline-none focus:border-tinder-red"
              placeholder="Search"
            />
          </div>

          {/* Category Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-4 mb-10 md:mb-40 max-w-4xl mx-auto">
            <button className="py-4 px-6 bg-pink-500 hover:bg-pink-600 text-white font-medium transition-all transform hover:scale-105">
              A Guide To Tinder
            </button>
            <button className="py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all transform hover:scale-105">
              Troubleshooting
            </button>
            <button className="py-4 px-6 bg-red-500 hover:bg-red-600 text-white font-medium transition-all transform hover:scale-105">
              Security & Privacy
            </button>
            <button className="py-4 px-6 bg-pink-700 hover:bg-pink-800 text-white font-medium transition-all transform hover:scale-105">
              Safety & Reporting
            </button>
          </div>


          {/* Footer */}
          <footer className=" py-4 px-6 md:px-12 flex justify-center md:justify-center items-center space-x-6 text-sm text-red-500">
            <Link to="/privacy" className="hover:text-gray-700">
              Privacy
            </Link>
            <div className="flex items-center">
              <span>English (US)</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </footer>



        </div>


      </main>


    </div>
  )
}

export default Support

