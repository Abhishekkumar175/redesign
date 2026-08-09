import React from 'react'
import SectionHeader from '../ui/SectionHeader'

const TECH_CATEGORIES = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    label: 'Database',
    techs: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ],
  },
]

function TechBadge({ name, icon }) {
  return (
    <div
      className="group flex flex-col items-center gap-2 cursor-default"
      title={name}
    >
      {/* Logo circle — grayscale at rest, colored on hover */}
      <div
        className="w-14 h-14 rounded-xl border border-border flex items-center justify-center
                    bg-white shadow-card transition-all duration-300
                    group-hover:shadow-card-hover group-hover:border-slate-brand p-2.5"
      >
        <img 
          src={icon} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
        />
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
