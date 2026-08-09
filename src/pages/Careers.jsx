import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import CTABand from '../components/home/CTABand'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'

const JOBS = [
  {
    title: 'Backend Developer',
    stack: 'Node.js',
    description: 'Build scalable server-side applications and APIs using Node.js for our growing product suite.',
    to: '/careers/backend-developer',
  },
  {
    title: 'Mobile Developer',
    stack: 'Android, iOS',
    description: 'Design and develop native and cross-platform mobile applications for Android and iOS.',
    to: '/careers/mobile-developer',
  },
  {
    title: 'Jr. Sales Executive',
    stack: 'Product',
    description: "Help grow eMounting's product and consultancy business by building relationships with new clients.",
    to: '/careers/sales-executive',
  },
]

export default function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Join Our Team"
        title="Grow Your Career With People Who Care"
        titleAccent="People Who Care"
        subtitle="We're a team of curious builders and problem-solvers. If you love technology and thrive in a learning-driven culture, you'll feel right at home."
        ctaLabel="See Open Positions"
        ctaTo="#positions"
      />

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-white">
        <div className="section-container">
          <p className="eyebrow mb-3">Open Positions</p>
          <h2 className="text-navy mb-4">We're <span className="text-accent">Hiring</span></h2>
          <div className="accent-line mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOBS.map(({ title, stack, description, to }) => (
              <div key={to} className="card flex flex-col">
                <div className="w-11 h-11 rounded-lg bg-alt-bg border border-border flex items-center justify-center mb-5">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <span className="tag mb-3 self-start">{stack}</span>
                <h3 className="text-navy mb-3">{title}</h3>
                <p className="text-[15px] text-muted leading-relaxed flex-1 mb-6">{description}</p>
                <Link to={to} className="text-link text-accent">
                  Read More
                  <ArrowRight size={15} className="arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
