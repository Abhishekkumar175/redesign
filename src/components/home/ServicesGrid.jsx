import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Package, Infinity } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const SERVICES = [
  {
    icon: Code2,
    title: 'Application Development',
    description:
      'We develop modern, high-performing mobile and web applications tailored to your specific needs, built to align with your business goals and deliver lasting value.',
    to: '/application',
  },
  {
    icon: Package,
    title: 'Product Development',
    description:
      'We build competitive digital products designed to unlock new revenue streams and help you achieve your key business objectives with precision and speed.',
    to: '/product',
  },
  {
    icon: Infinity,
    title: 'DevOps Solutions',
    description:
      'DevOps unites development and operations to automate and accelerate software delivery — ensuring faster releases, reduced risk, and scalable, resilient systems.',
    to: '/devops',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Do"
          title="Services Built for "
          titleAccent="Real Results"
          subtitle="Three core capability areas, each deeply specialised — working together as your end-to-end technology partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, to }) => (
            <div key={title} className="card flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 flex-shrink-0">
                <Icon size={22} className="text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-navy mb-3">{title}</h3>
              <p className="text-[15px] text-muted leading-relaxed flex-1 mb-6">
                {description}
              </p>

              {/* CTA */}
              <Link to={to} className="text-link text-accent group">
                Read more
                <ArrowRight size={15} className="arrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
