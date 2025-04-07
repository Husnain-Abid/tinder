import React, { useState, useEffect } from 'react';
import hero from '../../asset/hero.png';
import playstore from '../../asset/google-store.png';
import LoginPopup from '../common/Login';

export default function Hero() {
    const [opacity, setOpacity] = useState(1); // State to manage opacity

    const [showPopup, setShowPopup] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadeStart = 100;  // When fading starts
            const fadeEnd = 400;    // When fully faded

            // Calculate new opacity
            let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
            newOpacity = Math.max(newOpacity, 0); // Ensure opacity doesn't go negative
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <div className="relative h-screen w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.1) 100%), url(${hero})`,
                        backgroundAttachment: 'fixed',
                    }}
                ></div>

                {/* Hero Text with Opacity Effect desktop */}
                <div
                    className="relative h-full px-4 hidden md:flex flex-col gap-8 items-center justify-center transition-opacity duration-500"
                    style={{ opacity }}  // Applying opacity from state
                >
                    <h1 className="text-white text-5xl md:text-8xl font-bold text-center ">
                        Start something epic.
                    </h1>
                    <button
                        className='rounded-full px-6 py-3 text-white w-full md:w-auto  transition-opacity duration-500'
                        style={{ background: "var(--custom-gradient)", opacity }}
                        onClick={() => setShowPopup(true)}
                    >
                        Create account
                    </button>

                </div>

                {/* Hero Text with Opacity Effect mobile */}

                <div
                    className="relative h-full px-4 flex md:hidden flex-col gap-8 items-center justify-center transition-opacity duration-500"
                    style={{ opacity }} // Applying opacity from state
                >
                    <div className='mb-40'>

                    </div>

                    <h1 className="text-white text-5xl md:text-8xl font-bold text-center">
                        Start something epic.
                    </h1>

                    <div className="w-full flex flex-col space-y-4 justify-end mt-auto">
                        {/* Added mt-auto to push buttons to the bottom */}

                        <button
                            className="rounded-full px-6 py-3 text-white w-full md:w-auto font-bold transition-opacity duration-500"
                            style={{ background: "var(--custom-gradient)", opacity }}
                            onClick={() => setShowPopup(true)}
                        >
                            Create account
                        </button>

                        <button
                            className="rounded-full px-6 py-3 border-2 border-white text-white w-full md:w-auto font-bold transition-opacity duration-500"
                            style={{ opacity }}
                            onClick={() => setShowPopup(true)}
                        >
                            Log in
                        </button>

                        <img src={playstore} alt="playstore" className="w-48 mx-auto" />
                    </div>
                </div>




            </div>

            <LoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />


        </>



    );
}
