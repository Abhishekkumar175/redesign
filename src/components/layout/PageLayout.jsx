import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * PageLayout wraps every page.
 * It renders the sticky Navbar + a main content area that starts
 * BELOW the navbar (padding-top = 80px on desktop, 64px on mobile),
 * completely eliminating the "text clipped under navbar" bug.
 */
export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* pt-20 = 80px = navbar height on desktop; pt-16 = 64px on mobile */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
