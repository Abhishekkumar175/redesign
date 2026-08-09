import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import WhyUsGrid from '../components/ui/WhyUsGrid'
import CTABand from '../components/home/CTABand'

export default function WhyUs() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose eMounting"
        title="Where Quality Meets Commitment"
        titleAccent="Commitment"
        subtitle="Your success is our priority. Here's what makes eMounting a different kind of technology partner."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-reading mx-auto">
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="text-navy mb-4">Built on <span className="text-accent">Proven Foundations</span></h2>
            <div className="accent-line mb-6" />
            <p className="text-[17px] text-muted leading-relaxed mb-5">
              We have highly skilled engineers with excellent technical knowledge — professionals who bring not just capability, but genuine care for the outcomes they deliver. Our approach is collaborative, transparent, and always focused on what's right for your business.
            </p>
            <p className="text-[17px] text-muted leading-relaxed">
              Every engagement at eMounting is guided by four core pillars that define how we think, how we work, and how we measure success. These aren't marketing claims — they're the principles our team holds itself accountable to every day.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us pillars — full detailed treatment */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <WhyUsGrid />
        </div>
      </section>

      <CTABand />
    </>
  )
}
