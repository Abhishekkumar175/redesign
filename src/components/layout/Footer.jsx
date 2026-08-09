import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../ui/Logo'

const FOOTER_LINKS = {
  'What We Do': [
    { label: 'Application Development', to: '/application' },
    { label: 'Product Development', to: '/product' },
    { label: 'DevOps Solutions', to: '/devops' },
    { label: 'SKILLProbe', to: '/skillprobe' },
  ],
  'Company': [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/our-team' },
    { label: 'Why Us', to: '/why-us' },
    { label: 'Careers', to: '/careers' },
  ],
}

const CONTACT = [
  { icon: Mail, label: 'contact@emounting.in', href: 'mailto:contact@emounting.in' },
  { icon: Phone, label: '+91 97568 10482', href: 'tel:+919756810482' },
  { icon: MapPin, label: 'Ghaziabad, Uttar Pradesh, India', href: null },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer grid */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            {/* White-on-dark logo treatment */}
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="eMounting Solutions – Home">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="rgba(255,255,255,0.1)" />
                <polyline points="9,31 18,17 22,23 27,15 35,31" stroke="#F1592A" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                <path d="M12 22 Q12 14 22 14 Q32 14 32 22 Q32 24 28 24 H14" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-sora font-bold text-white text-[17px]">
                  <span className="text-accent">e</span>Mounting
                </span>
                <span className="text-[9px] text-white/50 font-inter tracking-wide uppercase">Solutions</span>
              </div>
            </Link>

            <p className="text-[13px] text-white/60 italic mb-4 leading-relaxed">
              "Your Growth Our Trusted Journey"
            </p>
            <p className="text-[14px] text-white/70 leading-relaxed mb-6">
              A leading software development and IT consultancy firm delivering innovative, technology-driven solutions across industries.
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/emounting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-[14px]"
              aria-label="eMounting on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Col 2 & 3 — Nav links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-sora font-semibold text-[14px] uppercase tracking-[0.06em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/65 hover:text-accent text-[14px] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-sora font-semibold text-[14px] uppercase tracking-[0.06em] mb-5">
              Contact
            </h4>
            <ul className="space-y-4 mb-6">
              {CONTACT.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={14} className="text-accent" />
                  </span>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-accent text-[13px] leading-relaxed transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-white/70 text-[13px] leading-relaxed">{label}</span>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary text-[13px] px-5 py-2.5">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-[13px]">
            Copyright © 2026 eMounting Solutions Pvt. Ltd. All rights reserved.
          </p>
          <a
            href="https://skillprobe.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-accent text-[13px] transition-colors"
          >
            Also visit SKILLProbe.in →
          </a>
        </div>
      </div>
    </footer>
  )
}
