import React from 'react'
import { Link } from 'react-router-dom'

// eMounting logo mark — recreated from the original concept:
// a stylised lowercase "e" with a mountain-peak symbol inside, navy + accent
const EMountingLogo = ({ className = '' }) => (
  <Link to="/" className={`flex items-center gap-2 flex-shrink-0 ${className}`} aria-label="eMounting Solutions – Home">
    {/* Logo mark */}
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="22" cy="22" r="22" fill="#0B1F3A" />
      {/* Mountain peak inside the circle */}
      <polyline points="9,31 18,17 22,23 27,15 35,31" stroke="#F1592A" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      {/* Stylised "e" arc */}
      <path d="M12 22 Q12 14 22 14 Q32 14 32 22 Q32 24 28 24 H14" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    </svg>

    {/* Wordmark */}
    <div className="flex flex-col leading-none">
      <span className="font-sora font-bold text-navy text-[18px] tracking-tight">
        <span className="text-accent">e</span>Mounting
      </span>
      <span className="text-[9px] text-muted font-inter tracking-wide uppercase">Solutions</span>
    </div>
  </Link>
)

export default EMountingLogo
