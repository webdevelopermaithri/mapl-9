import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

// --- EmailJS configuration ---------------------------------------------
// Create a free account at https://www.emailjs.com, connect it to
// info@maithriaqua.co.in as the "To" address in your template, and
// paste your own IDs here (see README.md in this project for the full
// step-by-step walkthrough). No backend/server code is needed — EmailJS
// delivers the message straight to that inbox from the browser.
const EMAILJS_SERVICE_ID = 'service_mt8g5ss';
const EMAILJS_TEMPLATE_ID = 'template_rvj4fzm';
const EMAILJS_PUBLIC_KEY = 'Ec4e_BNbVf_hx4ZZ1';
const RECIPIENT_EMAIL = 'info@maithriaqua.co.in';

const HEAR_ABOUT_OPTIONS = [
  'Social Media (Facebook, Instagram, LinkedIn, X)',
  'Google Search',
  'Friend or Family',
  'Referral',
  'Existing Customer',
  'Online Advertisement',
  'YouTube',
  'Email Newsletter',
  'Event / Exhibition',
  'Newspaper / Magazine',
  'WhatsApp',
  'Company Website',
  'Business Partner',
  'Other (Please Specify)',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  location: '',
  company: '',
  waterRequirement: '',
  hearAboutUs: '',
  hearAboutUsOther: '',
  message: '',
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  // On small screens the fixed WhatsApp/Chat buttons sit in the same
  // bottom-right corner that this section's form, map, and contact
  // details scroll through, covering them. Since this section already
  // offers WhatsApp-equivalent ways to reach us, fade those floating
  // buttons out for as long as this section is on screen so nothing
  // underneath gets covered, and let them reappear elsewhere.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('contact-in-view', entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      document.body.classList.remove('contact-in-view');
    };
  }, []);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email.';
    }
    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!/^[+]?[\d\s-]{7,15}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.location.trim()) nextErrors.location = 'Please enter your location.';
    if (!form.company.trim()) nextErrors.company = 'Please enter your company / organisation.';
    if (!form.waterRequirement.trim()) {
      nextErrors.waterRequirement = 'Please enter your daily water requirement.';
    } else if (
      Number.isNaN(Number(form.waterRequirement)) ||
      Number(form.waterRequirement) <= 0
    ) {
      nextErrors.waterRequirement = 'Please enter a valid number of liters.';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');

    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      reply_to: form.email,
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      location: form.location,
      company: form.company || 'Not provided',
      water_requirement: `${form.waterRequirement} Liters/day`,
      hear_about_us:
        form.hearAboutUs === 'Other (Please Specify)'
          ? `Other: ${form.hearAboutUsOther || 'Not specified'}`
          : form.hearAboutUs || 'Not provided',
      message: form.message || 'Not provided',
      submitted_at: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent');
        setForm(initialForm);
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
        setStatus('error');
      });
  };

  return (
    <section
      ref={sectionRef}
      className="contact-section section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Get in touch</span>
          <h1 id="contact-heading" className="contact-heading">
            Let&rsquo;s build <span className="italic-accent">water<br />independence.</span>
          </h1>
          <p className="contact-copy">
            Whether you&rsquo;re a sovereign government, an enterprise ESG leader, an
            investor, or a developer &mdash; there is a Maithri conversation waiting to
            begin.
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-icon" aria-hidden="true">✉</span>
              <div>
                <p className="contact-label">For Sales</p>
                <p className="contact-value">
                  info@maithriaqua.co.in<br />
                  +91 77022 91519
                </p>
              </div>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">☎</span>
              <div>
                <p className="contact-label">For Service</p>
                <p className="contact-value">
                  service@maithriaqua.co.in<br />
                  +91 91009 99115
                </p>
              </div>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">📍</span>
              <div>
                <p className="contact-label">Global HQ</p>
                <p className="contact-value">Hyderabad, India</p>
              </div>
            </li>
          </ul>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30449.796955088204!2d78.6235392!3d17.44896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb9d005b79737b%3A0x7435b5f82b850da8!2sMaithri%20Aquatech%2C%20JnJ%20House%2C%20Plot%20No%2C%2041%2C%20Phase%20III%2C%20Cherlapalli%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500051!3m2!1d17.4545556!2d78.6121673!5e0!3m2!1sen!2sin!4v1785736570093!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="strict-origin-when-cross-origin"
              title="Maithri Aquatech — Global HQ location"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">
              Your name <span className="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p className="field-error" id="name-error">{errors.name}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p className="field-error" id="email-error">{errors.email}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone number <span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange('phone')}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p className="field-error" id="phone-error">{errors.phone}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="location">
              Location <span className="required">*</span>
            </label>
            <input
              id="location"
              type="text"
              placeholder="City, Country"
              value={form.location}
              onChange={handleChange('location')}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? 'location-error' : undefined}
            />
            {errors.location && (
              <p className="field-error" id="location-error">{errors.location}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="company">
              Company / Organisation <span className="required">*</span>
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={handleChange('company')}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <p className="field-error" id="company-error">{errors.company}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="waterRequirement">
              Daily drinking water requirement (in Liters) <span className="required">*</span>
            </label>
            <input
              id="waterRequirement"
              type="number"
              min="0"
              step="any"
              placeholder="e.g. 5000"
              value={form.waterRequirement}
              onChange={handleChange('waterRequirement')}
              aria-invalid={Boolean(errors.waterRequirement)}
              aria-describedby={errors.waterRequirement ? 'waterRequirement-error' : undefined}
            />
            {errors.waterRequirement && (
              <p className="field-error" id="waterRequirement-error">{errors.waterRequirement}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="hearAboutUs">How did you hear about us?</label>
            <select
              id="hearAboutUs"
              value={form.hearAboutUs}
              onChange={handleChange('hearAboutUs')}
            >
              <option value="">Select an option</option>
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {form.hearAboutUs === 'Other (Please Specify)' && (
            <div className="form-field">
              <label htmlFor="hearAboutUsOther">Please specify</label>
              <input
                id="hearAboutUsOther"
                type="text"
                value={form.hearAboutUsOther}
                onChange={handleChange('hearAboutUsOther')}
              />
            </div>
          )}

          <div className="form-field">
            <label htmlFor="message">Tell us about your need</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Scale, geography, timeline..."
              value={form.message}
              onChange={handleChange('message')}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}{' '}
            <span aria-hidden="true">→</span>
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status === 'sent' && 'Thanks — your message has been sent.'}
            {status === 'error' &&
              'Something went wrong sending your message. Please try again or email us directly.'}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
