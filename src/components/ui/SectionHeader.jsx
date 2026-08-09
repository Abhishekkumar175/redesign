import React from 'react'

/**
 * SectionHeader — eyebrow + H2 + optional subtitle
 * Used at the top of every homepage section.
 */
export default function SectionHeader({ eyebrow, title, titleAccent, subtitle, centered = false, className = '' }) {
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
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-navy mb-3">{renderTitle()}</h2>
      {!centered && <div className="accent-line mb-4" />}
      {subtitle && (
        <p className={`text-muted text-[17px] leading-relaxed mt-4 ${centered ? 'max-w-[640px] mx-auto' : 'max-w-[580px]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
