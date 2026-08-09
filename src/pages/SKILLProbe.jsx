import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import CTABand from '../components/home/CTABand'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, BarChart3, Users2, Zap, TrendingUp } from 'lucide-react'
import skillprobeGraphic from '../assets/images/skillprobe-graphic.png'

const SP_VALUES = [
  { icon: Zap, label: 'Excellence', description: 'Delivering the highest quality workforce assessment tools and insights.' },
  { icon: Zap, label: 'Innovation', description: 'Pioneering new approaches to skills measurement and workforce analytics.' },
  { icon: Users2, label: 'Integrity', description: 'Transparent, honest, and fair assessment practices for all stakeholders.' },
  { icon: BarChart3, label: 'Collaboration', description: 'Working with organisations to understand their unique workforce needs.' },
]

export default function SKILLProbePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Product"
        title="SKILLProbe"
        subtitle="Transform Your Hiring Process with transparent, data-driven workforce skills assessment."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      {/* About SKILLProbe */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Logo lockup */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-sora font-bold text-[20px]">S</span>
                </div>
                <div>
                  <h2 className="!text-[32px] text-navy">SKILL<span className="text-accent">Probe</span></h2>
                  <p className="text-[13px] text-muted">by eMounting Solutions</p>
                </div>
              </div>

              <p className="eyebrow mb-3">About the Platform</p>
              <div className="accent-line mb-6" />
              <p className="text-[17px] text-muted leading-relaxed mb-5">
                SKILLProbe is a workforce skills assessment and analytics platform designed to give organisations deep visibility into their team's capabilities. By making skills transparent and measurable, SKILLProbe enables smarter hiring, more targeted development, and better strategic workforce planning.
              </p>
              <p className="text-[17px] text-muted leading-relaxed mb-8">
                From identifying skill gaps to tracking development progress, SKILLProbe puts data at the centre of every talent decision — helping you build a workforce that's ready for today's challenges and tomorrow's opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://skillprobe.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit SKILLProbe.in
                  <ExternalLink size={15} />
                </a>
                <Link to="/contact" className="btn-secondary">
                  Talk to Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={skillprobeGraphic}
                alt="Abstract data analytics visualization for SKILLProbe"
                className="w-full max-w-[400px] h-auto rounded-image shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <div className="max-w-reading mx-auto">
            <div className="bg-white border border-border rounded-card p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card" aria-hidden="true" />
              <p className="eyebrow mb-3">SKILLProbe Mission</p>
              <p className="text-[20px] text-navy font-semibold leading-relaxed font-sora">
                "Empowering Organizations through Transparent Skills Assessment — enabling data-driven talent decisions that drive productivity and growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="SKILLProbe Values"
            title="The Principles Behind "
            titleAccent="SKILLProbe"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-content mx-auto">
            {SP_VALUES.map(({ icon: Icon, label, description }) => (
              <div key={label} className="card text-center flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-navy text-[17px] mb-2">{label}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
