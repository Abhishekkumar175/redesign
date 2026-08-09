import React, { useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'contact@emounting.in', href: 'mailto:contact@emounting.in' },
  { icon: Phone, label: 'Phone', value: '+91 97568 10482', href: 'tel:+919756810482' },
  { icon: MapPin, label: 'Location', value: 'Ghaziabad, Uttar Pradesh, India', href: null },
]

const INITIAL = { name: '', email: '', company: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Your name is required'
    if (!form.email.trim()) e.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    // Simulated async submit — replace with real API call when backend is ready
    try {
      await new Promise(res => setTimeout(res, 1200))
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-btn border text-[15px] text-body-text bg-white
     placeholder-muted/60 transition-colors duration-200
     focus:outline-none focus:ring-2 focus:ring-offset-1
     ${errors[field]
       ? 'border-red-400 focus:ring-red-400'
       : 'border-border focus:border-accent focus:ring-accent/30'
     }`

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Transform your business with next-generation, agile, and cutting-edge enterprise solutions. Let's talk."
        ctaLabel={null}
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — Contact info */}
            <div>
              <p className="eyebrow mb-3">Reach Us Directly</p>
              <h2 className="text-navy mb-4 !text-[28px] lg:!text-[32px]">Let's Start a Conversation</h2>
              <div className="accent-line mb-8" />
              <p className="text-[17px] text-muted leading-relaxed mb-10">
                Whether you have a project in mind, a question about our services, or just want to explore possibilities — we're here to help.
              </p>

              <div className="space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-navy flex items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-muted uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-[16px] text-navy hover:text-accent transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[16px] text-navy font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Contact form */}
            <div>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-navy">Thanks — we'll be in touch shortly!</h3>
                  <p className="text-muted text-[16px] max-w-[360px]">Your message has been received. We aim to respond within one business day.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="btn-secondary text-[14px] px-5 py-2.5 mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-btn p-4">
                      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] text-red-700">
                        Something went wrong. Please try again or email us at{' '}
                        <a href="mailto:contact@emounting.in" className="underline">contact@emounting.in</a>.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[14px] font-semibold text-navy mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[14px] font-semibold text-navy mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-[14px] font-semibold text-navy mb-2">
                      Company <span className="text-muted font-normal text-[13px]">(optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass('company')}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[14px] font-semibold text-navy mb-2">
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass('subject')}
                    />
                    {errors.subject && <p className="text-red-500 text-[12px] mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[14px] font-semibold text-navy mb-2">
                      Message <span className="text-muted font-normal text-[13px]">(optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your project or question..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center text-[15px] py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
