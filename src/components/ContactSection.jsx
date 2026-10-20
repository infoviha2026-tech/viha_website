import React, { useState } from 'react';
import { Mail, Check, Copy, Clock, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const services = ['Brand Identity', 'UI/UX Design', 'Web Development', 'Design System', 'Full Product'];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@viha.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-white pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 lg:px-14 select-none overflow-x-clip"
      aria-label="Get in Touch"
    >
      {/* ── BACKGROUND: Coordinate Grid + Ambient Glows ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.16 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="contact-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
          <pattern id="contact-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
        <rect width="100%" height="100%" fill="url(#contact-cross)" />
      </svg>

      {/* Ambient gradient glow patch using the Viha accent */}
      <div
        className="absolute -top-24 right-1/4 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(155, 148, 241, 0.20) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="mb-16">
          <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
              Get in Touch
            </div>

          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
              Let’s build something extraordinary together.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed">
              Have an upcoming project, redesign, or idea? Tell us about your timeline and goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Side: Contact Information & Direct Access */}
          <div className="lg:col-span-5 h-full">

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 h-full">
              <h3 className="text-xl font-display font-bold text-white">Direct Communication</h3>

              {/* Quick copy email box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#9b94f1]/10 text-[#9b94f1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">Email Us</span>
                    <span className="text-sm font-semibold text-white">hello@viha.studio</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Timezone / Availability */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Clock className="w-4 h-4 text-[#9b94f1] shrink-0" />
                  <span>Typical response time: Within 12-24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-[#9b94f1] shrink-0" />
                  <span>Operating globally across US, EU &amp; APAC timezones</span>
                </div>
              </div>

              {/* Availability Badge */}
              {/* <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-300">
                  Currently booking 2 new client engagements for Q2 / Q3
                </span>
              </div> */}
            </div>

          </div>

          {/* Right Side: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 h-full">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 h-full">

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">Message Received!</h3>
                  <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will review your project details and get back to you within 24 hours.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', service: 'UI/UX Design', budget: '$10k - $25k', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#9b94f1]/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#9b94f1]/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2.5">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            formData.service === srv
                              ? 'bg-[#9b94f1] text-black font-semibold shadow-md'
                              : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Project Goals &amp; Context
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about what you are building, timeline expectations, or links to current designs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#9b94f1]/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#9b94f1] text-black font-semibold text-base shadow-[0_0_30px_rgba(155,148,241,0.35)] hover:shadow-[0_0_40px_rgba(155,148,241,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
