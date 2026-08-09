import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABand() {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Subtle line-pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28 text-center">
        <p className="eyebrow text-accent mb-4">Ready to Start?</p>
        <h2 className="text-white mb-5">
          Let's Build Something{' '}
          <span className="text-accent">Great Together</span>
        </h2>
        <p className="text-white/70 text-[17px] max-w-[520px] mx-auto mb-10 leading-relaxed">
          Get in touch with us today and let's discuss how eMounting can help you achieve your technology goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-[16px] px-8 py-4">
            Talk to Us
            <ArrowRight size={17} />
          </Link>
          <Link to="/about" className="btn-secondary text-[16px] px-8 py-4 border-white/40 text-white hover:bg-white hover:text-navy">
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
