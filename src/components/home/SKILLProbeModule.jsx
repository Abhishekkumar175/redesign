import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import skillprobeGraphic from '../../assets/images/skillprobe-graphic.png'

export default function SKILLProbeModule() {
  return (
    <section className="section-padding bg-alt-bg">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Content */}
          <div>
            <p className="eyebrow mb-3">Our Product</p>
            {/* SKILLProbe wordmark */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-sora font-bold text-[16px]">S</span>
              </div>
              <h2 className="text-navy !text-[28px] lg:!text-[36px]">
                SKILL<span className="text-accent">Probe</span>
              </h2>
            </div>

            <p className="text-[15px] font-semibold text-slate-brand mb-4 uppercase tracking-wider">
              Transform Your Hiring Process
            </p>

            <p className="text-[17px] text-muted leading-relaxed mb-4">
              Empowering organizations through transparent skills assessment — SKILLProbe gives you deep visibility into your workforce capabilities, enabling smarter hiring decisions and meaningful talent development.
            </p>

            <p className="text-[17px] text-muted leading-relaxed mb-8">
              Drive productivity, align talent to strategy, and make data-driven decisions that shape a high-performing workforce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/skillprobe" className="btn-primary">
                Explore SKILLProbe
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://skillprobe.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Visit SKILLProbe.in
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right — Graphic */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              <img
                src={skillprobeGraphic}
                alt="Abstract analytics and skills assessment visualization"
                className="w-full h-auto rounded-image shadow-card"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-accent/25 rounded-image -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
