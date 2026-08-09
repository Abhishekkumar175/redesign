import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import WhyUsGrid from '../components/ui/WhyUsGrid'
import CTABand from '../components/home/CTABand'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Heart, Star, Users2, RefreshCw } from 'lucide-react'

const VALUES = [
  { icon: Zap, label: 'Innovation', description: 'Embracing new ideas and emerging technologies to build forward-looking solutions.' },
  { icon: Heart, label: 'Integrity', description: 'Honest, transparent relationships built on trust with every client and partner.' },
  { icon: Star, label: 'Excellence', description: 'Delivering the highest quality in every line of code, every deliverable, every interaction.' },
  { icon: Users2, label: 'Collaboration', description: 'Working hand-in-hand with clients and within our team to achieve shared goals.' },
  { icon: RefreshCw, label: 'Continuous Improvement', description: 'A commitment to learning, refining, and growing — never settling for "good enough."' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About eMounting Solutions"
        subtitle="From startups to enterprises, we empower businesses with cutting-edge tech that delivers real results."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      {/* About paragraph */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-reading mx-auto">
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-navy mb-4">A Technology Partner <span className="text-accent">You Can Trust</span></h2>
            <div className="accent-line mb-8" />
            <div className="space-y-5">
              <p className="text-[17px] text-muted leading-relaxed">
                eMounting Solutions is a leading software development and IT consultancy firm that delivers innovative, technology-driven solutions across industries. Our expert team focuses on continuous learning and skill development to provide clients with cutting-edge tools and reliable support to achieve their business goals.
              </p>
              <p className="text-[17px] text-muted leading-relaxed">
                We work with a diverse range of clients — from dynamic startups to established enterprises — bringing the same level of dedication, precision, and expertise to every engagement regardless of scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-border rounded-card p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card" aria-hidden="true" />
              <p className="eyebrow mb-3">Our Mission</p>
              <h3 className="text-navy mb-4">What Drives Us</h3>
              <p className="text-[16px] text-muted leading-relaxed">
                To deliver cutting-edge technology solutions that enable businesses to achieve their goals, remain competitive, and adapt to ever-evolving market demands.
              </p>
            </div>
            <div className="bg-white border border-border rounded-card p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-brand rounded-l-card" aria-hidden="true" />
              <p className="eyebrow mb-3 text-slate-brand">Our Vision</p>
              <h3 className="text-navy mb-4">Where We're Headed</h3>
              <p className="text-[16px] text-muted leading-relaxed">
                To be the most trusted technology partner for businesses worldwide — known for our expertise, integrity, and the measurable impact we deliver for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Values"
            title="The Principles That "
            titleAccent="Guide Us"
            subtitle="Five core values that shape how we work, how we think, and how we treat our clients and each other."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {VALUES.map(({ icon: Icon, label, description }) => (
              <div key={label} className="card text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-navy text-[16px] mb-2">{label}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Us"
            title="Why Clients Choose "
            titleAccent="eMounting"
          />
          <WhyUsGrid />
        </div>
      </section>

      {/* Team teaser */}
      <section className="section-padding bg-white border-t border-border">
        <div className="section-container">
          <div className="max-w-reading mx-auto text-center">
            <p className="eyebrow mb-3">Our People</p>
            <h2 className="text-navy mb-4">The Team Behind <span className="text-accent">eMounting</span></h2>
            <p className="text-[17px] text-muted leading-relaxed mb-8">
              Our team brings together seasoned professionals from diverse technology backgrounds — united by a passion for building exceptional software and a commitment to continuous growth.
            </p>
            <Link to="/our-team" className="text-link text-accent font-semibold text-[16px]">
              Meet Our Team
              <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
