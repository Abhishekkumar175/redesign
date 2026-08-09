import React from 'react'
import { TrendingUp, Lightbulb, Shield, Users } from 'lucide-react'

const VALUES = [
  { icon: TrendingUp, label: 'Expertise', description: 'Seasoned professionals across diverse industries' },
  { icon: Lightbulb, label: 'Innovation', description: 'Always at the forefront of technology' },
  { icon: Shield, label: 'Reliability', description: 'Robust, scalable, future-proof solutions' },
  { icon: Users, label: 'Client-Centric', description: 'Collaborating closely to exceed expectations' },
]

export default function TrustStrip() {
  return (
    <section id="values" className="border-y border-border bg-white">
      <div className="section-container py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-alt-bg flex items-center justify-center transition-colors duration-200 group-hover:bg-accent/10">
                <Icon size={20} className="text-slate-brand group-hover:text-accent transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-navy text-[15px] mb-0.5">{label}</p>
                <p className="text-[13px] text-muted leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
