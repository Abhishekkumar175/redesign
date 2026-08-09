import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import ApplicationDev from './pages/ApplicationDev'
import ProductDev from './pages/ProductDev'
import DevOpsSolutions from './pages/DevOpsSolutions'
import SKILLProbe from './pages/SKILLProbe'
import WhyUs from './pages/WhyUs'
import Careers from './pages/Careers'
import JobDetail from './pages/JobDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Who We Are */}
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          {/* What We Do */}
          <Route path="/application" element={<ApplicationDev />} />
          <Route path="/product" element={<ProductDev />} />
          <Route path="/devops" element={<DevOpsSolutions />} />
          {/* Product */}
          <Route path="/skillprobe" element={<SKILLProbe />} />
          {/* Other */}
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </BrowserRouter>
  )

}
