import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader'
import CTABand from '../components/home/CTABand'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

const JOB_DATA = {
  'backend-developer': {
    title: 'Backend Developer',
    stack: 'Node.js',
    eyebrow: 'Engineering',
    subtitle: 'Build scalable server-side applications and APIs that power our products and client solutions.',
    responsibilities: [
      'Design, build, and maintain efficient, reusable, and reliable server-side code',
      'Develop and maintain RESTful APIs and integrations',
      'Collaborate with frontend developers to integrate user-facing elements',
      'Optimise application performance and scalability',
      'Write clean, well-documented, testable code',
    ],
    requirements: [
      'Strong proficiency in Node.js',
      'Experience with RESTful API design and implementation',
      'Familiarity with MongoDB and/or MySQL',
      'Understanding of security and data protection best practices',
      'Good communication and collaboration skills',
    ],
  },
  'mobile-developer': {
    title: 'Mobile Developer',
    stack: 'Android, iOS',
    eyebrow: 'Engineering',
    subtitle: 'Design and develop high-quality native and cross-platform mobile applications.',
    responsibilities: [
      'Develop and maintain mobile applications for Android and iOS platforms',
      'Collaborate with design and backend teams to deliver great user experiences',
      'Write clean, maintainable, and well-tested mobile code',
      'Ensure performance, quality, and responsiveness of applications',
      'Identify and fix bugs and performance bottlenecks',
    ],
    requirements: [
      'Experience in Android (Kotlin/Java) and/or iOS (Swift) development',
      'Familiarity with cross-platform frameworks is a plus',
      'Understanding of mobile UI/UX design principles',
      'Experience working with RESTful APIs',
      'Strong problem-solving skills',
    ],
  },
  'sales-executive': {
    title: 'Jr. Sales Executive',
    stack: 'Product',
    eyebrow: 'Business Development',
    subtitle: "Help grow eMounting's business by identifying opportunities and building lasting client relationships.",
    responsibilities: [
      'Identify and generate new business leads and opportunities',
      'Build and maintain relationships with prospective and existing clients',
      "Present eMounting's services and products clearly and compellingly",
      'Collaborate with technical teams to understand and communicate our offerings',
      'Track sales activities and maintain CRM records',
    ],
    requirements: [
      'Strong communication and interpersonal skills',
      'Self-motivated with a passion for sales and technology',
      'Ability to understand technical concepts and translate them for clients',
      'Prior sales or business development experience is a plus',
      'Willingness to learn and grow within a fast-paced environment',
    ],
  },
}

const STEPS = [
  { step: '01', label: 'Apply', description: 'Send us your application via email' },
  { step: '02', label: 'Interview', description: "We'll schedule a conversation to get to know you" },
  { step: '03', label: 'Offer', description: "If it's a match, you'll receive a formal offer" },
]


export default function JobDetail() {
  const { slug } = useParams()
  const job = JOB_DATA[slug]

  if (!job) {
    return (
      <div className="section-container py-32 text-center">
        <h2 className="text-navy mb-4">Position not found</h2>
        <Link to="/careers" className="btn-primary">Back to Careers</Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={job.eyebrow}
        title={job.title}
        subtitle={job.subtitle}
        ctaLabel="Apply Now"
        ctaTo={`mailto:contact@emounting.in?subject=Application: ${job.title}`}
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <Link to="/careers" className="text-link text-muted mb-10 inline-flex">
            <ArrowLeft size={15} className="mr-1" />
            Back to all positions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-navy mb-6 !text-[24px]">Responsibilities</h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="check-item">
                      <CheckCircle2 className="check-icon" />
                      <span className="text-[16px] text-body-text">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-navy mb-6 !text-[24px]">Requirements</h2>
                <ul className="space-y-4">
                  {job.requirements.map((r) => (
                    <li key={r} className="check-item">
                      <CheckCircle2 className="check-icon" />
                      <span className="text-[16px] text-body-text">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-navy mb-4 !text-[18px]">How to Apply</h3>
                <p className="text-[15px] text-muted mb-6 leading-relaxed">
                  Send your CV and a brief introduction to{' '}
                  <a href="mailto:contact@emounting.in" className="text-accent hover:underline">
                    contact@emounting.in
                  </a>{' '}
                  with the subject line "Application: {job.title}".
                </p>
                <a
                  href={`mailto:contact@emounting.in?subject=Application: ${job.title}`}
                  className="btn-primary w-full justify-center"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="card">
                <span className="tag mb-3 block self-start w-fit">{job.stack}</span>
                <p className="text-[14px] text-muted">Location: Ghaziabad, UP (or remote)</p>
              </div>
            </div>
          </div>

          {/* Process steps */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-navy mb-10 !text-[24px]">Our Hiring Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STEPS.map(({ step, label, description }) => (
                <div key={step} className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-sora font-bold text-accent text-[18px]">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-[16px] mb-1">{label}</p>
                    <p className="text-[14px] text-muted leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
