import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import CTABand from '../components/home/CTABand'
import { CheckCircle2, Code2, Smartphone, Link2, Settings } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Web & Mobile App Development',
    description: 'End-to-end development of high-performance web and mobile applications using modern frameworks and best practices.',
  },
  {
    icon: Settings,
    title: 'App Optimization & Modernization',
    description: 'Transform legacy applications into scalable, maintainable, and high-performing modern systems.',
  },
  {
    icon: Link2,
    title: 'API Integrations',
    description: 'Seamlessly connect your applications with third-party services, platforms, and internal systems.',
  },
  {
    icon: Smartphone,
    title: 'App Managed Services',
    description: 'Ongoing monitoring, maintenance, and support to keep your applications secure, reliable, and up to date.',
  },
]

const WHY_CHOOSE = [
  'Custom-built to your unique business requirements',
  'Flexible and scalable architecture from the ground up',
  'Designed with security and performance in mind',
  'Aligned with your long-term business objectives',
  'Dedicated support throughout the full application lifecycle',
]

export default function ApplicationDev() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Application Development"
        titleAccent="Development"
        subtitle="Transform your business with next-generation, agile, and cutting-edge enterprise applications."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="text-navy mb-4">Beyond <span className="text-accent">Off-the-Shelf</span></h2>
              <div className="accent-line mb-6" />
              <p className="text-[17px] text-muted leading-relaxed mb-5">
                We develop modern, high-performing mobile and web applications that are tailored to your specific needs. Designed with flexibility and purpose in mind, our solutions are built to align seamlessly with your business goals and deliver lasting value.
              </p>
              <p className="text-[17px] text-muted leading-relaxed">
                Off-the-shelf solutions often fall short. We build exactly what your business needs — no more, no less — with the quality and craftsmanship that sets you apart.
              </p>
            </div>

            {/* Challenge callout */}
            <div className="bg-alt-bg border border-border rounded-card p-8">
              <p className="eyebrow mb-3 text-slate-brand">The Challenge</p>
              <h3 className="text-navy mb-4">Why Custom Development Matters</h3>
              <p className="text-[16px] text-muted leading-relaxed">
                Not all custom-built applications yield successful outcomes. Legacy stacks, poor architectural decisions, and misaligned requirements lead to costly failures. At eMounting, we begin every engagement with a thorough discovery process to ensure every solution we build is the right one for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="Capabilities"
            title="What We "
            titleAccent="Deliver"
            subtitle="Our application development capabilities span the full software lifecycle."
          />
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

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-reading">
            <SectionHeader
              eyebrow="Why Choose eMounting"
              title="Why Choose Us for "
              titleAccent="Application Development"
            />
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
