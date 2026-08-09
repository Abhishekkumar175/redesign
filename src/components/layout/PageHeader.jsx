import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * PageHeader — reusable interior page header
 * Fixes the clipped-header bug: always renders after the navbar offset.
 * Pattern: eyebrow → H1 → supporting sentence → optional CTA
 */
export default function PageHeader({
  eyebrow,
  title,
  titleAccent,       // word(s) to highlight in accent color
  subtitle,
  ctaLabel = 'Talk to Us',
  ctaTo = '/contact',
  centered = false,
  className = '',
}) {
  // Split title to color the accent word(s)
  const renderTitle = () => {
    if (!titleAccent) return title
    const parts = title.split(titleAccent)
    return (
      <>
        {parts[0]}
        <span className="text-accent">{titleAccent}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className={`bg-alt-bg border-b border-border ${className}`}>
      <div className={`section-container py-16 lg:py-24 ${centered ? 'text-center' : ''}`}>
        <div className={`max-w-reading ${centered ? 'mx-auto' : ''}`}>
          {eyebrow && (
            <p className="eyebrow mb-3">{eyebrow}</p>
          )}
          <h1 className="text-navy mb-4">{renderTitle()}</h1>
          {!centered && <div className="accent-line mb-6" />}
          {subtitle && (
            <p className="text-[17px] text-muted leading-relaxed mb-8 max-w-[600px]">
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <Link to={ctaTo} className="btn-primary">
              {ctaLabel}
              <ArrowRight size={16} className="arrow" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
