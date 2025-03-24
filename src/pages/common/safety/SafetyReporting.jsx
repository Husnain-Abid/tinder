import { Link } from "react-router-dom"
import logo from "../../../asset/logo.png"

const SafetyReporting = () => {
  return (
    <div className="min-h-screen bg-white">


      {/* Header */}
      <header className="border-b py-4 px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto flex justify-between items-center ">

        <Link to="/" className="flex items-center">

          <img src={logo} alt="logo" className="w-32" />


        </Link>
        <Link to="/" className="text-red-400 hover:text-tinder-red/80 text-sm font-medium">
          Back to Tinder
        </Link>

        </div>
      </header>






      {/* Breadcrumb and Search */}
      <div className=" border-gray-200 py-2 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xs text-gray-600">
            <Link to="/" className="hover:text-gray-900">
              Tinder
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">Safety & Reporting</span>
          </div>
          <div className="flex items-center gap-4">

            <span className="text-sm"> Search </span>
            <div className="relative">

              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg
                  className="w-4 h-4"
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
              </span>

              <input
                type="search"
                className="pl-10 pr-4 py-1 w-52 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-tinder-red focus:border-tinder-red"

              />
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8 px-6 md:px-12 text-xs">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg md:text-xl font-medium text-gray-900 mb-8 ">Safety & Reporting</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              {/* Report a Safety Concern Section */}
              <div className="mb-8">
                <h2 className=" font-medium text-gray-900 mb-4">Report a Safety Concern or Incident</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Reporting Illegal Content (EEA)
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Reporting in-person physical harm
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Reporting profiles and content
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Impersonation Accounts
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      I'm concerned about another user's safety
                    </a>
                  </li>
                </ul>
              </div>

              {/* Blocking People Section */}
              <div className="mb-8">
                <h2 className=" font-semibold text-gray-900 mb-4">Blocking People</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Block a Profile
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Block Contacts
                    </a>
                  </li>
                </ul>
              </div>

              {/* Additional Resources Section */}
              <div className="mb-8 md:mt-28">
                <h2 className=" font-semibold text-gray-900 mb-4">Additional Resources</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Colorado safety policy information
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <Link to="/community-guidelines" className="text-gray-600 hover:text-tinder-red">
                      Community Guidelines
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Copyright Takedown Requests
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Safety Tips
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Tinder Safety Center
                    </a>
                  </li>
                </ul>
              </div>

              {/* Noonlight Section */}
              <div className="mb-8">
                <h2 className=" font-semibold text-gray-900 mb-4">Noonlight</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Noonlight
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Account Violations Section */}
              <div className="mb-8">
                <h2 className=" font-semibold text-gray-900 mb-4">Account Violations & Appeals</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Appealing a violation (ban, warning, content removal)
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      My account is banned
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      My account was warned
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      My account was age-restricted
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Appeal Center glossary
                    </a>
                  </li>
                </ul>
              </div>

              {/* Age Verification Section */}
              <div className="mb-8">
                <h2 className=" font-semibold text-gray-900 mb-4">Age Verification</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Why do I need to enable camera access for age verification?
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      How does age verification work?
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Why was my age verification request rejected?
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      Why do I need to verify my age?
                    </a>
                  </li>
                </ul>
              </div>

              {/* BrightCheck Section */}
              <div className="mb-8">
                <h2 className=" font-semibold text-gray-900 mb-4">BrightCheck</h2>
                <ul className="space-y-3 border-t border-gray-200">
                  <li className="border-b border-gray-200 py-3">
                    <a href="#" className="text-gray-600 hover:text-tinder-red">
                      BrightCheck
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      
      {/* Footer */}
      <footer className="py-4 px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto flex justify-center items-center space-x-6 text-xs text-red-500">
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
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
        </div>
      </footer>



    </div>
  )
}

export default SafetyReporting

