import React from 'react'
import SectionHeader from '../ui/SectionHeader'

// Using SVG icons for tech logos (consistent single-color → full-color on hover)
const TECH_CATEGORIES = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', abbr: 'Re', color: '#61DAFB', bg: '#20232a' },
      { name: 'HTML5', abbr: 'H5', color: '#E34F26', bg: '#fff' },
      { name: 'CSS3', abbr: 'C3', color: '#1572B6', bg: '#fff' },
      { name: 'JavaScript', abbr: 'JS', color: '#F7DF1E', bg: '#323330' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', abbr: 'No', color: '#339933', bg: '#fff' },
    ],
  },
  {
    label: 'Database',
    techs: [
      { name: 'MongoDB', abbr: 'Mg', color: '#47A248', bg: '#fff' },
      { name: 'MySQL', abbr: 'My', color: '#4479A1', bg: '#fff' },
    ],
  },
]

function TechBadge({ name, abbr, color, bg }) {
  return (
    <div
      className="group flex flex-col items-center gap-2 cursor-default"
      title={name}
    >
      {/* Logo circle — grayscale at rest, colored on hover */}
      <div
        className="w-14 h-14 rounded-xl border border-border flex items-center justify-center
                    bg-white shadow-card transition-all duration-300
                    group-hover:shadow-card-hover group-hover:border-slate-brand"
        style={{ '--tech-color': color, '--tech-bg': bg }}
      >
        <span
          className="font-sora font-bold text-[15px] transition-colors duration-300"
          style={{ color: 'var(--tech-color)' }}
        >
          {abbr}
        </span>
      </div>
      <span className="text-[12px] text-muted font-medium group-hover:text-navy transition-colors">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Technologies We "
          titleAccent="Work With"
          subtitle="Our core technology stack — organised by discipline, using only the tools our team actively works with."
        />

        <div className="space-y-10">
          {TECH_CATEGORIES.map(({ label, techs }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Category label */}
              <div className="w-28 flex-shrink-0">
                <span className="eyebrow text-slate-brand">{label}</span>
              </div>
              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-border flex-shrink-0" />
              {/* Tech badges */}
              <div className="flex flex-wrap gap-6">
                {techs.map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
