import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import CTABand from '../components/home/CTABand'
import { CheckCircle2, GitBranch, Server, TestTube2, Container, Cloud, Lock } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment pipelines using Jenkins, GitLab CI/CD, and GitHub Actions.',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Declarative infrastructure provisioning with Terraform, Ansible, and CloudFormation.',
  },
  {
    icon: TestTube2,
    title: 'Automated Testing',
    description: 'Integrated test automation across unit, integration, and end-to-end layers within the pipeline.',
  },
  {
    icon: Container,
    title: 'Container Orchestration',
    description: 'Docker containerisation and Kubernetes orchestration for scalable, resilient deployments.',
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Strategy',
    description: 'Design and implementation across AWS, Azure, and GCP — avoiding vendor lock-in by design.',
  },
  {
    icon: Lock,
    title: 'DevSecOps',
    description: 'Security integrated into every stage of the pipeline — from code scanning to runtime monitoring.',
  },
]

const WHY_CHOOSE = [
  'Faster, more reliable software releases',
  'Reduced manual intervention and human error',
  'Scalable infrastructure that grows with your product',
  'Multi-cloud expertise with no vendor lock-in',
  'Security built into the pipeline from the start',
]

const TOOLS = [
  'Jenkins', 'GitLab CI/CD', 'GitHub Actions',
  'Docker', 'Kubernetes',
  'Terraform', 'Ansible', 'CloudFormation',
  'AWS', 'Azure', 'GCP',
  'Prometheus', 'Grafana',
]

export default function DevOpsSolutions() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="DevOps Solutions"
        titleAccent="Solutions"
        subtitle="Uniting development and operations to automate delivery, ensure reliability, and accelerate growth."
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="text-navy mb-4">Ship Faster, <span className="text-accent">Break Less</span></h2>
              <div className="accent-line mb-6" />
              <p className="text-[17px] text-muted leading-relaxed mb-5">
                DevOps unites development and operations teams to automate and accelerate software delivery while maintaining the highest levels of reliability. By removing silos and introducing automation, we help your team ship faster, with more confidence.
              </p>
              <p className="text-[17px] text-muted leading-relaxed">
                Our DevOps practice covers the entire delivery pipeline — from code commit to production monitoring — ensuring your systems are robust, observable, and ready to scale.
              </p>
            </div>
            <div className="bg-alt-bg border border-border rounded-card p-8">
              <p className="eyebrow mb-3 text-slate-brand">The Challenge</p>
              <h3 className="text-navy mb-4">Slow Delivery, High Risk</h3>
              <p className="text-[16px] text-muted leading-relaxed">
                Manual deployments, inconsistent environments, and lack of monitoring lead to slow, risky releases that hold your business back. eMounting's DevOps practice replaces this uncertainty with automated, repeatable, observable delivery pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <SectionHeader eyebrow="Capabilities" title="What We " titleAccent="Deliver" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card flex flex-col gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-navy mb-2 text-[18px]">{title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader eyebrow="Tools & Platforms" title="Our DevOps " titleAccent="Toolkit" />
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span key={tool} className="tag text-[14px] px-4 py-2">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <div className="max-w-reading">
            <SectionHeader eyebrow="Why Choose eMounting" title="Why Choose Us for " titleAccent="DevOps" />
            <ul className="space-y-4">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="check-item">
                  <CheckCircle2 className="check-icon" />
                  <span className="text-[16px] text-body-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
