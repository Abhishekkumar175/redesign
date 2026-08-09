import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'

const ROLES = [
  { title: 'Backend Developer', stack: 'Node.js', to: '/careers/backend-developer' },
  { title: 'Mobile Developer', stack: 'Android, iOS', to: '/careers/mobile-developer' },
  { title: 'Jr. Sales Executive', stack: 'Product', to: '/careers/sales-executive' },
]

export default function CareersTeaser() {
  return (
    <section className="section-padding bg-white border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="eyebrow mb-3">Join Our Team</p>
            <h2 className="text-navy mb-4">
              Grow Your Career With{' '}
              <span className="text-accent">People Who Care</span>
            </h2>
            <div className="accent-line mb-6" />
            <p className="text-[17px] text-muted leading-relaxed mb-8">
              We're a team of passionate engineers and problem-solvers. If you love technology and thrive in a learning-driven environment, we'd love to hear from you.
            </p>
            <Link to="/careers" className="btn-primary">
              View Open Positions
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — Role badges */}
          <div className="flex flex-col gap-4">
            {ROLES.map(({ title, stack, to }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between p-5 bg-alt-bg rounded-card border border-border
                           hover:border-slate-brand hover:shadow-card transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <Briefcase size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-[15px]">{title}</p>
                    <p className="text-[13px] text-muted">{stack}</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
