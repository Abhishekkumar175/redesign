import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

export default function AboutIntro() {
  return (
    <section className="section-padding bg-alt-bg">
      <div className="section-container">
        <div className="max-w-reading mx-auto text-center">
          <SectionHeader
            eyebrow="Who We Are"
            title="Built on Expertise, Driven by Purpose"
            titleAccent="Expertise"
            centered
          />

          <p className="text-[17px] text-muted leading-relaxed mb-6">
            eMounting Solutions is a leading software development and IT consultancy firm that delivers innovative, technology-driven solutions across industries. Our expert team focuses on continuous learning and skill development to provide clients with cutting-edge tools and reliable support to achieve their business goals.
          </p>

          <p className="text-[17px] text-muted leading-relaxed mb-10">
            From startups to enterprises, we empower businesses with cutting-edge technology that delivers real results — bridging the gap between vision and execution.
          </p>

          {/* Mission callout */}
          <div className="bg-white border border-border rounded-card p-8 mb-10 text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card" aria-hidden="true" />
            <p className="eyebrow mb-3 text-left">Our Mission</p>
            <p className="text-[18px] text-navy font-semibold leading-relaxed font-sora">
              "To deliver cutting-edge technology solutions that enable businesses to achieve their goals, remain competitive, and adapt to ever-evolving market demands."
            </p>
          </div>

          <Link to="/about" className="text-link text-accent font-semibold">
            Learn more about us
            <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
