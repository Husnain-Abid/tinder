import Footer from "../../components/common/Footer"
import Navbar1 from "../../components/common/Navbar1"

import about1 from "../../asset/about1.png"
import about2 from "../../asset/about2.png"
import about3 from "../../asset/about3.png"
import Footer1 from "../../components/common/Footer1"




const LearnPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      {/* Navigation Bar */}

      <Navbar1 />

      {/* Hero Section */}
      <div className="bg-[#f0f2f4]">

        <div className="py-16 px-4 md:px-8 container mx-auto text-center ">
          <h1 className="text-3xl md:text-3xl font-bold mb-6 italic">So, Why Choose A Dating App Like Tinder?</h1>
          <p className="text-gray-600 max-w-3xl text-left mx-auto mb-8">
            When it comes to dating apps, you've got options: Badoo, Bumble, Hinge, Match, POF, OKCupid, and many more. It
            doesn't matter if you want to find love, a date, or just have a casual chat, you should be able to find what
            you're looking for. That's why we've got your back and why, when you want to meet new people, there's just one
            app for that: Tinder. Get ready to open your mind and your heart with features designed to make the impossible
            possible. Dating online just got easier.
          </p>
          <p className="text-gray-600 max-w-3xl text-left mx-auto mb-8">
            We won't brag about being the best free site — we'll let you decide for yourself by giving you Tinder at a
            glance.
          </p>
          <button className="bg-tinder-red text-white  px-8 py-3 rounded-full font-medium"
                style={{ background: "var(--custom-gradient)"}}          
          >Join Now</button>
        </div>

      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 md:px-8 pb-16 ">

        {/* Section 1: Explore Your Passions */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">

          {/* first column  */}
          <div className="flex flex-col gap-8 my-4 md:my-16">



            {/* first card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Explore Your Passions</h2>
                <p className="text-gray-600 mb-4">
                  It's easy to chat up a match when you know you have something in common. The Tinder app lets you add
                  Passions to your profile and connect with people who share your interests.
                </p>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={about1}
                  alt="Couple enjoying outdoors"
                  className=" w-full h-auto object-cover"
                />
              </div>

            </div>
            {/* first card end */}

            {/* second card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Get Photo Verified on Tinder</h2>
                <p className="text-gray-600 mb-4">
                  Photo verification is a way to ensure you're really you in your photos. When you see people on the Tinder
                  app with a blue checkmark, it means they're the real deal.
                </p>
              </div>

            </div>
            {/* second card end */}

            {/* third card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">See Who Likes You</h2>
                <p className="text-gray-600 mb-4">
                  There are only so many hours in a day for dating. We get it. A Tinder Gold™ subscription lets you see all the people who Like you, saving you precious time so you can focus on the finer things in life.
                </p>
              </div>

            </div>
            {/* third card end */}

            {/* fourth card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Make Every Like Count</h2>
                <p className="text-gray-600 mb-4">
                  Exclusive to Tinder Platinum™ subscribers, Priority Likes puts your profile in front of the people you Like faster.
                </p>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={about2}
                  alt="Couple enjoying outdoors"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

            </div>
            {/* fourth card end */}



          </div>


          {/* second column  */}
          <div className="flex flex-col gap-8 my-4 md:my-16">

            {/* first card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Endless Possibilities</h2>
                <p className="text-gray-600 mb-4">
                  With more than 55 billion matches to date, we’re no stranger to bringing singles together online. Some sites, like Hinge and eharmony, are designed for long-term relationships, but on the Tinder app, we’re all about the experience and offer possibilities for whatever it is you’re looking for.
                </p>
              </div>

            </div>
            {/* first card end */}


            {/* second card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Roll With Us Anywhere</h2>
                <p className="text-gray-600 mb-4">
                  When you want to meet local people whether you’re visiting New York City or Chicago, there’s an app for that—and it’s called Tinder. Chat with people near and far with features that let you match around the world. Tinder is your go-to travel buddy. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Plenty of Fish can say that.
                </p>
              </div>

            </div>
            {/* second card end */}


            {/* third card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Connect With People Everywhere</h2>
                <p className="text-gray-600 mb-4">
                  Go beyond your distance settings and chat with people around the world with our Passport™ feature. All it takes is an upgrade to a Tinder Plus® subscription to be able to match anywhere from everywhere.
                </p>
              </div>

            </div>
            {/* third card end */}


            {/* fourth card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Matches at Your Fingertips</h2>
                <p className="text-gray-600 mb-4">
                  One of the most adult decisions you’ll make is picking a dating app that can offer you all the things your ex couldn’t. And it’s not just as simple as choosing between Badoo or Zoosk. Meeting people online is a journey, and you want someone along for the ride that you can trust. When it comes to making a match, consider the Tinder app your new copilot.
                </p>
              </div>

            </div>
            {/* fourth card end */}

            {/* fifth card start */}
            <div>

              <div>
                <h2 className="text-2xl font-bold mb-4">All-Inclusive, All the Time</h2>
                <p className="text-gray-600 mb-4">
                  We’re not a fan of labels, so we offer a dating experience designed to connect you with new people outside your usual circles. We believe everyone deserves the right to be seen and make the first move no matter how they identify. On our app, we put everyone in front of you and let you choose who you want to chat with.                </p>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={about3}
                  alt="Couple enjoying outdoors"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

            </div>
            {/* fifth card end */}


          </div>



        </div>



        {/* Get Started Button */}
        <div className="text-center mt-12">
          <button className="bg-tinder-red text-white  px-8 py-3 rounded-full font-medium"
          
          style={{ background: "var(--custom-gradient)"}}
          
          >Get Started</button>
        </div>
      </div>

      {/* Footer */}
      <Footer1 />



    </div>
  )
}

export default LearnPage

