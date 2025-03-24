import React from 'react'
import Navbar from '../../../components/common/Navbar'
import Hero from '../../../components/Home/Hero'
import Testimonials from '../../../components/Home/Testimonials'
import Footer from '../../../components/common/Footer'
import Footer2 from '../../../components/common/Footer2'
import Hero2 from '../../../components/Home/Hero2'

export default function Select() {
  return (
        <div className="min-h-screen font-Proxima flex flex-col w-full">
            
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section with Phone Grid Background */}
            <Hero2 />

            {/* Footer */}
            <Footer2 />

        </div>
  )
}
