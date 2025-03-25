import React, { useState, useEffect } from 'react';
import hero from '../../asset/select1.webp';
import hero1 from '../../asset/select-logo.svg';

export default function Hero2() {
    const [opacity, setOpacity] = useState(1); // State to manage opacity

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
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${hero})`,
                    // backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${hero})`,
                    // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${hero})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.1) 100%), url(${hero})`,

                    backgroundAttachment: 'fixed',
                }}
            ></div>

            {/* Hero Text with Opacity Effect */}
            <div
                className="relative h-full flex flex-col gap-4 items-center justify-center max-w-md mx-auto transition-opacity duration-500"
            >
                {/* <h1 className="text-white text-5xl md:text-8xl font-bold text-center px-4">
                    Start something epic.
                </h1> */}

<img src={hero1} alt="hero" className='w-full' />

                <p
                    className='px-6 py-3 text-white transition-opacity duration-500'
                >
                    Tinder SELECT™ is an exclusive membership that gives you unrivaled access to the absolute best of Tinder.
                </p>


                <button
                    className='rounded-full px-20 py-3 text-xl font-bold bg-[#3c444f] text-[#656e6e] transition-opacity duration-500'
                >
                    Apply Now
                </button>
                <p
                    className='px-6 py-3 text-gray-300 text-sm text-center font-thin transition-opacity duration-500'
                >
                    Sorry, we're currently not accepting applications. We apologize for any inconvenience caused. Please continue to check this page for updates on when applications will open. If you have any other questions, feel free to ask. Thank you!
                </p>


            </div>
        </div>
    );
}
