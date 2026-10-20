import React, { useState } from 'react';
import { Palette, Layers, Cpu, Compass, Check, ChevronDown, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity & Visual Direction',
      desc: 'Forging distinct, iconic identities for brands that refuse to blend into the background.',
      deliverables: [
        'Logo marks, wordmarks & responsive lockups',
        'Typography pairings & custom type axes',
        'Color theory & high-contrast dark palettes',
        'Brand guideline book & assets package'
      ]
    },
    {
      icon: Layers,
      title: 'UI/UX Product Design',
      desc: 'Translating complex workflows into intuitive, elegant digital interfaces that users fall in love with.',
      deliverables: [
        'User journey maps & interaction architecture',
        'High-fidelity desktop & mobile mockups',
        'Interactive Figma prototypes with smart animates',
        'Usability testing & behavioral heatmaps'
      ]
    },
    {
      icon: Cpu,
      title: 'Design Systems & Scale',
      desc: 'Building modular, scalable UI component libraries that accelerate your development team by 4x.',
      deliverables: [
        'Figma token architecture linked with code',
        'Reusable components with full variants & states',
        'WCAG AA/AAA accessibility compliance',
        'Component documentation & handoff specs'
      ]
    },
    {
      icon: Compass,
      title: 'Creative Web & Framer Development',
      desc: 'Bringing designs to life with lightning-fast code, micro-animations, and rich visual storytelling.',
      deliverables: [
        'React, Next.js & Tailwind development',
        'Custom Framer animations & micro-interactions',
        'SEO optimization & Core Web Vitals 95+',
        'CMS integration & automated CI/CD pipeline'
      ]
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Vision',
      desc: 'We unearth the essence of your business, identify market opportunities, and establish a clear creative north star.'
    },
    {
      num: '02',
      title: 'Architecture & UX',
      desc: 'Information architecture, user flow mapping, and wireframe prototypes ensuring a frictionless customer journey.'
    },
    {
      num: '03',
      title: 'Design & Craftsmanship',
      desc: 'Exploring bold visual concepts, refining typography, crafting 3D/visual assets, and polishing every micro-interaction.'
    },
    {
      num: '04',
      title: 'Build & Scale',
      desc: 'Translating designs into responsive, production-ready code with seamless handoff and post-launch optimization.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Design Sprint',
      desc: 'Ideal for early-stage startups needing a rapid prototype, landing page, or brand refresh.',
      duration: '2 - 3 Weeks',
      features: [
        'High-converting landing page design',
        'Core visual identity & logo lockup',
        'Figma interactive prototype',
        'Responsive mobile layouts',
        'Fast 48-hour revision turnarounds'
      ],
      popular: false
    },
    {
      name: 'Full Product Scope',
      desc: 'End-to-end design and frontend development for ambitious products ready to launch.',
      duration: '4 - 8 Weeks',
      features: [
        'Complete brand identity system',
        'Full Web / SaaS app UI/UX design (up to 20 screens)',
        'Scalable design system in Figma',
        'Production React / Tailwind frontend code',
        'Micro-interactions & motion design',
        'Priority Slack channel support'
      ],
      popular: true
    },
    {
      name: 'Design Partner Retainer',
      desc: 'Ongoing senior design leadership and agile feature iterations for scaling companies.',
      duration: 'Monthly Partnership',
      features: [
        'Dedicated sprint bandwidth every week',
        'Continuous feature design & improvements',
        'Design system maintenance & evolution',
        'Direct async communication via Slack',
        'Pause or cancel anytime'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'Landing pages and brand sprint engagements typically take 2 to 3 weeks. Comprehensive web product designs or full-stack redesigns average 4 to 8 weeks depending on screen count and complexity.'
    },
    {
      q: 'What tools and technologies do you use?',
      a: 'We design primarily in Figma, and develop using React, Vite, Tailwind CSS, Framer Motion, and Next.js. All assets are handed over clean, organized, and production-ready.'
    },
    {
      q: 'Do you also provide the code?',
      a: 'Yes! We offer both pure design deliverables in Figma as well as fully functional, pixel-perfect frontend code in React and Tailwind CSS.'
    },
    {
      q: 'How do we get started?',
      a: 'Simply fill out our contact form or book an intro call. We’ll review your goals, share a tailored proposal within 24 hours, and schedule a kickoff date.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen text-white">
      
      {/* Header */}
      <div className="mb-20">
        <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
            Services &amp; Engagement
          </div>

          <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
            04 PILLARS
          </div>
        </div>

        <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white">
          Solutions designed to elevate your brand.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
          From early-stage conceptualization to enterprise design systems, we provide comprehensive design and creative engineering services.
        </p>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div 
              key={idx}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-pink-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-pink-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {srv.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                      <Check className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4-Step Process Section */}
      <div className="mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-pink-400">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-3">
            A frictionless creative process.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative">
              <span className="font-display font-bold text-3xl text-pink-500/40 block mb-3">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models & Pricing */}
      <div className="mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-pink-400">
            Pricing &amp; Options
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-3">
            Transparent engagement models.
          </h2>
          <p className="mt-3 text-sm text-white/60">
            No surprise invoices or bloated timelines. Straightforward value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular 
                  ? 'glass-card border-2 border-pink-500/80 shadow-[0_0_50px_rgba(236,72,153,0.25)] bg-[#13111c]' 
                  : 'glass-card border border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6">{tier.desc}</p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white/80 font-mono mb-6">
                  Typical Duration: <span className="font-bold text-white">{tier.duration}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  tier.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Inquire for Availability
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
