import React from 'react'
import image1 from '../../asset/apple-store.png'
// import image2 from '../../asset/google-store.png'
import image2 from '../../asset/download.png'


export default function Footer() {
  return (
    <footer className="bg-white pt-4 pb-12">
    <div className="w-[90%] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b pb-4">
        {/* Legal Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Consumer Health Data Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Intellectual Property
              </a>
            </li>
          </ul>
        </div>

        {/* Careers Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Careers</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Careers Portal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Tech Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>

        {/* FAQ Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Press Room
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Promo Code
              </a>
            </li>
          </ul>
        </div>
        
      </div>

      {/* App Download Section */}
      <div className="mt-8 flex gap-8">
        <p className="font-semibold text-gray-800 mb-4">Get the app!</p>
        <div className="flex space-x-8">
          <a href="#" className="inline-block">
            <img src={image1} alt="Download on App Store" className="w-28" />
          </a>
          <a href="#" className="inline-block">
            <img src={image2} alt="Get it on Google Play" className="w-32 rounded-md" />
          </a>
        </div>
      </div>

      {/* Marketing Text */}
      <div className="mt-8 text-sm text-gray-600 space-y-4">
        <p>
          Single people, listen up: If you're looking for love, want to start dating, or just keep it casual, you
          need to be on Tinder. With over 55 billion matches made, it's the place to be to meet your next best
          match. Let's be real, the dating landscape looks very different today, as most people are meeting online.
          With Tinder, the world's most popular free dating app, you have millions of other single people at your
          fingertips and they're all ready to meet someone like you. Whether you're straight or in the LGBTQIA
          community, Tinder's here to bring you all the sparks.
        </p>
        <p>
          There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to
          find some new friends? Say no more. New kid on campus and looking to make the most of your college
          experience? Tinder U's got you covered. Tinder isn't your average dating site — it's the most diverse
          dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and
          everything in between.
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-between text-xs text-gray-500">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-700">
            FAQ
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Safety Tips
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Cookie Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Privacy Settings
          </a>
        </div>
        <div>© 2025 Tinder LLC. All Rights Reserved.</div>
      </div>
    </div>
  </footer>
  )
}
