import React from 'react'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import AboutIntro from '../components/home/AboutIntro'
import ServicesGrid from '../components/home/ServicesGrid'
import SKILLProbeModule from '../components/home/SKILLProbeModule'
import WhyUsSection from '../components/home/WhyUsSection'
import TechStack from '../components/home/TechStack'
import CareersTeaser from '../components/home/CareersTeaser'
import CTABand from '../components/home/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <ServicesGrid />
      <SKILLProbeModule />
      <WhyUsSection />
      <TechStack />
      <CareersTeaser />
      <CTABand />
    </>
  )
}
