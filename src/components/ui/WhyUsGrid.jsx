import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  Lightbulb, Shield, Users, TrendingUp
} from 'lucide-react'

const PILLARS = [
  {
    icon: TrendingUp,
    title: 'Expertise',
    description:
      'Seasoned professionals across diverse industries delivering tangible, measurable results for every client engagement.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Evolution',
    description:
      'Staying at the forefront of technology to solve both current and future challenges — continuously learning, continuously advancing.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description:
      'Holding ourselves to the highest standards of quality, delivering robust, scalable, and future-proof solutions you can depend on.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description:
      'Collaborating closely with every client, understanding their unique needs, and going beyond expectations to ensure true success.',
  },
]

/**
 * WhyUsGrid — canonical "Why Us" module.
 * Reused on Homepage, About, and Why Us page.
 * Never duplicate this content — always import this component.
 */
export default function WhyUsGrid({ showCta = false }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PILLARS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-alt-bg flex items-center justify-center flex-shrink-0">
              <Icon size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="text-navy mb-2">{title}</h3>
              <p className="text-[15px] text-muted leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
      {showCta && (
        <div className="mt-10">
          <Link to="/why-us" className="text-link font-semibold text-accent">
            Learn more about why clients choose us
            <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      )}
    </div>
  )
}
