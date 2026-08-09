import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import WhyUsGrid from '../ui/WhyUsGrid'

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-alt-bg">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why Us"
          title="Where Quality Meets "
          titleAccent="Commitment"
          subtitle="Four pillars that define how we work and why businesses trust eMounting as their technology partner."
        />
        <WhyUsGrid showCta={true} />
      </div>
    </section>
  )
}
