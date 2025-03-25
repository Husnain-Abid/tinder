import { useNavigate } from "react-router-dom";
import logo from "../../asset/apple-store.png";
import logo1 from "../../asset/download.png";

const LoginPopup = ({ isOpen, onClose }) => {
  // Ensure useNavigate is always called, even when the popup is closed
  const navigate = useNavigate(); // Initialize the useNavigate hook

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-sm p-8 relative text-sm">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
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

        {/* Tinder Logo */}
        <div className="flex justify-center mb-4">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path
              d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
              fill="red"
            ></path>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">Get Started</h1>

        {/* Terms text */}
        <p className="text-center text-gray-700 mb-4">
          By tapping Log In or Continue, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms
          </a>
          . Learn how we process your data in our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          , and{" "}
          <a href="#" className="text-blue-600 underline">
            Cookie Policy
          </a>
          .
        </p>

        {/* Google login button */}
        <button className="flex items-center justify-center w-full py-1.5 px-4 rounded-full border bg-blue-500 text-white border-gray-300 mb-2 relative">
          <div className="absolute left-2 flex items-center justify-center"></div>
          <div className="flex-grow text-center" onClick={() => navigate("/home")}>
            <span className="font-medium">Continue with Google</span>
          </div>
          <div className="absolute left-0.5 rounded-full p-2 bg-white ">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
          </div>
        </button>

        {/* Facebook login button */}
        <button className="flex items-center justify-center w-full py-1.5 px-4 rounded-full border border-gray-300 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 "
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
          <span className="font-medium">Log in with Facebook</span>
        </button>

        {/* Phone login button */}
        <button className="flex items-center justify-center w-full py-1.5 px-4 rounded-full border border-gray-300 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-medium">Log in with phone number</span>
        </button>

        {/* Trouble logging in link */}
        <div className="text-center mb-4">
          <a href="#" className="text-blue-500 underline hover:text-blue-500">
            Trouble Logging In?
          </a>
        </div>

        {/* Get the app section */}
        <div className="text-center">
          <h2 className="text-base font-bold text-gray-900 mb-4">Get the app!</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="inline-block">
              <img src={logo} alt="Download on App Store" className="w-28" />
            </a>
            <a href="#" className="inline-block">
              <img src={logo1} alt="Get it on Google Play" className="w-32 rounded-md" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
