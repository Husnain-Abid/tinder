import React, { useState, useEffect } from 'react';
import hero from '../../asset/select1.webp';

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
                className="relative h-full flex flex-col gap-8 items-center justify-center transition-opacity duration-500"
                style={{ opacity }}  // Applying opacity from state
            >
                <h1 className="text-white text-5xl md:text-8xl font-bold text-center px-4">
                    Start something epic.
                </h1>
                <button 
                    className='rounded-full px-6 py-3 text-white transition-opacity duration-500' 
                    style={{ background: "var(--custom-gradient)", opacity }}
                >
                    Create account
                </button>
            </div>
        </div>
    );
}
