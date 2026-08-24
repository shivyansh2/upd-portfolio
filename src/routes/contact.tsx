import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-section inner-page contact-page">
      <div className="contact-layout">
        <section className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h1>Good work starts with a clear conversation.</h1>
          <p>
            Have an internship, junior role, freelance project, or collaboration
            in mind? Send the details and I’ll get back to you.
          </p>
          <div className="contact-details">
            <a href="mailto:shivyanshthakur64@gmail.com">
              <Mail size={19} aria-hidden="true" />
              <span><small>Email</small>shivyanshthakur64@gmail.com</span>
            </a>
            <a href="tel:+916230593509">
              <Phone size={19} aria-hidden="true" />
              <span><small>Phone</small>+91 62305 93509</span>
            </a>
            <div>
              <MapPin size={19} aria-hidden="true" />
              <span><small>Location</small>Palampur, Himachal Pradesh</span>
            </div>
          </div>
        </section>

        <section className="contact-form-wrap reveal reveal-2">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <span><Check size={28} aria-hidden="true" /></span>
              <p className="eyebrow">Message received</p>
              <h2>Thanks for reaching out.</h2>
              <p>I’ll review your message and reply as soon as I can.</p>
              <button className="text-link" onClick={() => setStatus('idle')}>
                Send another message <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
              <div className="field-grid">
                <label>
                  Your name
                  <input name="name" required autoComplete="name" placeholder="Name" />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                </label>
              </div>
              <label>
                What would you like to discuss?
                <select name="inquiry" defaultValue="Project collaboration">
                  <option>Project collaboration</option>
                  <option>Internship opportunity</option>
                  <option>Junior developer role</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" required rows={6} placeholder="Tell me a little about the opportunity..." />
              </label>
              {status === 'error' && (
                <p className="form-error" role="alert">
                  The message couldn’t be sent. Please try again or email me directly.
                </p>
              )}
              <button className="button button-primary form-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>Sending <LoaderCircle className="spin" size={18} aria-hidden="true" /></>
                ) : (
                  <>Send message <ArrowRight size={18} aria-hidden="true" /></>
                )}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
