import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import CTABand from '../components/home/CTABand'
import { CheckCircle2, Palette, Package, Shield, FlaskConical } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric design that balances aesthetics with usability, creating experiences that delight users and drive engagement.',
  },
  {
    icon: Package,
    title: 'End-to-End Product Development',
    description: 'From ideation to launch — strategy, architecture, development, and delivery all under one roof.',
  },
  {
    icon: Shield,
    title: 'DevSecOps',
    description: 'Security integrated into every stage of the development pipeline, not bolted on at the end.',
  },
  {
    icon: FlaskConical,
    title: 'Quality Assurance',
    description: 'Rigorous testing at every stage to ensure your product meets the highest standards of reliability and performance.',
  },
]

const WHY_CHOOSE = [
  'Strategic product thinking from day one',
  'Full-lifecycle ownership from concept to market',
  'Security and quality built into the process, not added later',
  'Competitive differentiation through innovative product design',
  'Revenue-focused, outcome-driven development approach',
]

export default function ProductDev() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Product Development"
        titleAccent="Development"
        subtitle="Build competitive digital products designed to unlock new revenue streams and achieve your business objectives."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="text-navy mb-4">Products That <span className="text-accent">Win Markets</span></h2>
              <div className="accent-line mb-6" />
              <p className="text-[17px] text-muted leading-relaxed mb-5">
                We build competitive digital products designed to unlock new revenue streams and help you achieve your key business objectives. Our product development practice combines strategic thinking with engineering excellence to deliver outcomes that matter.
              </p>
              <p className="text-[17px] text-muted leading-relaxed">
                Whether you're launching a new product from scratch or evolving an existing one, we bring the full spectrum of capability — design, engineering, security, and quality — to every engagement.
              </p>
            </div>
            <div className="bg-alt-bg border border-border rounded-card p-8">
              <p className="eyebrow mb-3 text-slate-brand">The Challenge</p>
              <h3 className="text-navy mb-4">Beyond Building Features</h3>
              <p className="text-[16px] text-muted leading-relaxed">
                Many products fail not because of poor code, but because of misaligned strategy, poor UX, or inadequate quality practices. eMounting's product development approach ensures that strategy, design, security, and engineering are integrated from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <SectionHeader eyebrow="Capabilities" title="What We " titleAccent="Deliver" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card flex gap-5">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-navy mb-2 text-[18px]">{title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-reading">
            <SectionHeader eyebrow="Why Choose eMounting" title="Why Choose Us for " titleAccent="Product Development" />
            <ul className="space-y-4">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="check-item">
                  <CheckCircle2 className="check-icon" />
                  <span className="text-[16px] text-body-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
