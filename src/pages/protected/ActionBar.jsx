"use client"

const ActionBar = ({



  // onHide, onNope, onLike, onOpenProfile, onCloseProfile, onSuperLike, onNextPhoto


  onHide, onNope, onLike, onSuperLike, onNextPhoto, onPreviousPhoto,




}) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 py-2 px-4 mt-4 w-full">
      {/* Hide Button */}
      <button onClick={onHide} className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium">
        Hide
      </button>

      {/* Nope Button */}
      <button
        onClick={onNope}
        className="flex items-center space-x-1 px-2 py-1  border-gray-300 rounded hover:bg-gray-200"
      >
        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Nope</span>
      </button>

      {/* Like Button */}
      <button
        onClick={onLike}
        className="flex items-center space-x-1 px-2 py-1  border-gray-300 rounded hover:bg-gray-200"
      >
        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Like</span>
      </button>

      {/* Open Profile Button */}
      {/* <button
        onClick={onOpenProfile}
        className="flex items-center space-x-1 px-2 py-1 border-gray-300 rounded hover:bg-gray-200"
      >
        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Open Profile</span>
      </button> */}

      {/* Close Profile Button */}
      {/* <button
        onClick={onCloseProfile}
        className="flex items-center space-x-1 px-2 py-1  border-gray-300 rounded hover:bg-gray-200"
      >
        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Close Profile</span>
      </button> */}

      {/* Super Like Button */}
      <button
        onClick={onSuperLike}
        className="flex items-center space-x-1 px-2 py-1  border-gray-300 rounded hover:bg-gray-200"
      >
        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Super Like</span>
      </button>





      {/* Previous Photo Button */}
      <button
        onClick={(e) => onPreviousPhoto(e)}
        className="flex items-center space-x-1 px-4 py-1  border-gray-300 rounded hover:bg-gray-200"
      >


        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded mr-1">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M19 15V9" /><path d="M15 15h-3v4l-7-7 7-7v4h3v6z" /></svg>


        </div>



        <span className="text-sm text-gray-600">Previous Photo</span>
      </button>




      {/* Next Photo Button */}
      <button
        // onClick={onNextPhoto}
        onClick={(e) => onNextPhoto(e)}
        className="flex items-center space-x-1 px-4 py-1 border-gray-300 rounded hover:bg-gray-200"
      >


        <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded mr-1">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-right-dash-icon lucide-arrow-big-right-dash"><path d="M5 9v6" /><path d="M9 9h3V5l7 7-7 7v-4H9V9z" /></svg>

        </div>




        <span className="text-sm text-gray-600">Next Photo</span>
      </button>

    </div>
  )
}

export default ActionBar
