import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'

const NAV_ITEMS = [
  {
    label: 'Who We Are',
    children: [
      { label: 'About Us', to: '/about', description: 'Our story, mission & values' },
      { label: 'Our Team', to: '/our-team', description: 'The people behind eMounting' },
    ],
  },
  {
    label: 'What We Do',
    children: [
      { label: 'Application Development', to: '/application', description: 'Custom web & mobile apps' },
      { label: 'Product Development', to: '/product', description: 'End-to-end digital products' },
      { label: 'DevOps Solutions', to: '/devops', description: 'CI/CD, cloud & automation' },
      { divider: true },
      { label: 'SKILLProbe', to: '/skillprobe', description: 'Our workforce assessment platform', accent: true },
    ],
  },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Careers', to: '/careers' },
]

function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-card shadow-card-hover border border-border z-50
                  transition-all duration-200 origin-top
                  ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
    >
      <div className="p-2">
        {items.map((item, i) =>
          item.divider ? (
            <div key={i} className="h-px bg-border my-2" />
          ) : (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex flex-col px-4 py-3 rounded-lg transition-colors duration-150
                          hover:bg-alt-bg group
                          ${item.accent ? 'border border-accent/20 bg-accent/5 hover:bg-accent/10' : ''}`}
            >
              <span className={`font-semibold text-[14px] ${item.accent ? 'text-accent' : 'text-navy'} group-hover:text-accent transition-colors`}>
                {item.label}
              </span>
              <span className="text-[12px] text-muted mt-0.5">{item.description}</span>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setOpenDropdown(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') { setOpenDropdown(null); setMobileOpen(false) }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleDropdown = (label) => setOpenDropdown(prev => prev === label ? null : label)

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-border h-20
                    transition-shadow duration-300 ${scrolled ? 'shadow-nav' : ''}`}
      >
        <div className="section-container h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] font-semibold
                                transition-colors duration-150
                                ${openDropdown === item.label ? 'text-accent bg-alt-bg' : 'text-navy hover:text-accent hover:bg-alt-bg'}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180 text-accent' : ''}`}
                    />
                  </button>
                  <DropdownMenu
                    items={item.children}
                    isOpen={openDropdown === item.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-[14px] font-semibold transition-colors duration-150
                     ${isActive ? 'text-accent bg-alt-bg' : 'text-navy hover:text-accent hover:bg-alt-bg'}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden lg:inline-flex btn-primary text-[14px] px-5 py-2.5">
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-navy"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col transition-all duration-300
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-border flex-shrink-0">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-navy"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile nav items */}
        <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(prev => prev === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-lg text-[16px] font-semibold text-navy hover:bg-alt-bg transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180 text-accent' : 'text-muted'}`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-alt-bg pl-4">
                    {item.children.map((child) =>
                      child.divider ? (
                        <div key="divider" className="h-px bg-border my-2" />
                      ) : (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className={`flex flex-col px-3 py-3 rounded-lg hover:bg-alt-bg transition-colors ${child.accent ? 'text-accent' : 'text-navy'}`}
                        >
                          <span className="font-semibold text-[15px]">{child.label}</span>
                          <span className="text-[13px] text-muted mt-0.5">{child.description}</span>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-4 rounded-lg text-[16px] font-semibold transition-colors
                   ${isActive ? 'text-accent bg-alt-bg' : 'text-navy hover:bg-alt-bg'}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile CTA — pinned at bottom */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-6 border-t border-border">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full justify-center text-[16px] py-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
