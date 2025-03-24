import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Hero from "../../components/Home/Hero"
import Testimonials from "../../components/Home/Testimonials"


const HomePage = () => {
    return (
        <div className="min-h-screen font-Proxima flex flex-col w-full">
            
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section with Phone Grid Background */}
            <Hero />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default HomePage

