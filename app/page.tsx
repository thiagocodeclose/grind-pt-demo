// @ts-nocheck
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, MapPin, Phone, Mail, Clock, Instagram, Check, Star, ChevronRight } from 'lucide-react';
import { studio, instructors, stats, classes, testimonials, pricing, koriva } from '@/lib/site-data';

/* ── reveal ──────────────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── header ──────────────────────────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111111]/96 backdrop-blur border-b border-[#242424]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-black tracking-widest uppercase">
          <span className="text-[#FF6B35]">GRIND</span><span className="text-white"> PT</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Trainers', 'Programs', 'Pricing', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm text-[#8A8A8A] hover:text-white uppercase tracking-wider transition-colors">{l}</a>
          ))}
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-[#FF6B35] hover:bg-[#E5531A] text-white font-heading font-bold text-sm uppercase tracking-wider px-5 py-2.5 transition-colors">
            Book Free Consult
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#242424] px-6 py-4 flex flex-col gap-4">
          {['Trainers', 'Programs', 'Pricing', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-body text-sm uppercase tracking-wider text-[#8A8A8A] hover:text-white">{l}</a>
          ))}
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-[#FF6B35] text-white font-heading font-bold text-sm uppercase tracking-wider px-5 py-3 text-center">Book Free Consult</a>
        </div>
      )}
    </header>
  );
}

/* ── hero — intimate split ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 overflow-hidden">
      {/* Left — copy */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-24 pb-16 bg-[#111111] relative overflow-hidden">
        {/* Background texture number */}
        <div className="absolute right-0 bottom-0 font-heading font-black text-[22rem] text-[#FF6B35]/[0.04] leading-none select-none pointer-events-none translate-x-1/4 translate-y-1/4">1:1</div>

        <div className="relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-3 py-1.5 mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="font-body text-[#FF6B35] text-xs uppercase tracking-[0.2em]">Austin, TX · Private Studio</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading font-black text-[clamp(3.5rem,7vw,7rem)] text-white uppercase leading-[0.9] mb-6">
              YOUR<br />GOALS.<br /><span className="text-[#FF6B35]">YOUR</span><br />COACH.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-body text-[#8A8A8A] text-lg leading-relaxed max-w-sm mb-8">
              1-on-1 personal training in Austin. No crowds, no generic plans — just focused coaching built entirely around you.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-[#FF6B35] hover:bg-[#E5531A] text-white font-heading font-bold text-base uppercase tracking-wider px-8 py-4 transition-colors inline-flex items-center gap-2">
                Free Consult <ArrowRight size={16} />
              </a>
              <a href="#programs" className="border border-white/20 hover:border-[#FF6B35]/50 text-white font-heading font-bold text-base uppercase tracking-wider px-8 py-4 transition-colors">
                Our Programs
              </a>
            </div>
          </Reveal>

          {/* Quick stats */}
          <Reveal delay={280}>
            <div className="grid grid-cols-3 gap-4 border-t border-[#242424] pt-8">
              {stats.slice(0, 3).map((s, i) => (
                <div key={i}>
                  <p className="font-heading font-black text-3xl text-[#FF6B35]">{s.value}{s.unit}</p>
                  <p className="font-body text-xs text-[#8A8A8A] uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative min-h-[50vh] md:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=1400&fit=crop&q=90"
          alt="Personal trainer coaching client"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
        {/* Orange diagonal accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />

        {/* Floating result card */}
        <div className="absolute bottom-8 left-8 right-8 bg-[#1A1A1A]/90 backdrop-blur-sm border border-[#FF6B35]/30 p-5">
          <p className="font-body text-xs text-[#FF6B35] uppercase tracking-wider mb-1">Recent Transformation</p>
          <p className="font-heading font-black text-white text-lg">"Dropped 30lbs in 12 weeks"</p>
          <p className="font-body text-xs text-[#8A8A8A] mt-1">— with Coach Brianna, Austin TX</p>
        </div>
      </div>
    </section>
  );
}

/* ── trainers ────────────────────────────────────────────────────────────── */
function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FF6B35] uppercase tracking-[0.3em] text-sm">Meet the Team</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Your Trainers</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-[#111111] border border-[#242424] hover:border-[#FF6B35]/40 transition-all overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-heading font-black text-xl text-white uppercase">{c.name}</h3>
                    <span className="font-body text-xs text-[#8A8A8A] mt-1">{c.years} yrs</span>
                  </div>
                  <p className="font-body text-[#FF6B35] text-sm uppercase tracking-wider mb-3">{c.specialty}</p>
                  <p className="font-body text-sm text-[#8A8A8A] leading-relaxed mb-4">{c.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.focus.map(f => (
                      <span key={f} className="font-body text-xs text-[#FF6B35] border border-[#FF6B35]/30 px-2 py-0.5">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── programs ────────────────────────────────────────────────────────────── */
function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FF6B35] uppercase tracking-[0.3em] text-sm">What We Offer</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Training Programs</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group bg-[#1A1A1A] border border-[#242424] hover:border-[#FF6B35]/40 transition-all overflow-hidden h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-[#111111]/40" />
                  <div className="absolute top-3 left-3 bg-[#FF6B35] text-white font-heading font-bold text-xs uppercase px-2 py-0.5">{c.tag}</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-black text-lg text-white uppercase">{c.name}</h3>
                    <span className="font-body text-xs text-[#8A8A8A] border border-[#242424] px-2 py-0.5">{c.duration}</span>
                  </div>
                  <p className="font-body text-sm text-[#8A8A8A] leading-relaxed flex-1">{c.description}</p>
                  <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="mt-4 inline-flex items-center gap-1 font-body text-sm text-[#FF6B35] hover:text-white transition-colors">
                    Book now <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── social proof bar ────────────────────────────────────────────────────── */
function ProofBar() {
  return (
    <section className="bg-[#FF6B35] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-heading font-black text-3xl text-white">500+ Transformations</p>
          <p className="font-body text-white/80 text-sm">and counting across Austin</p>
        </div>
        <div className="flex items-center gap-3">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-white" fill="white" />)}
          <span className="font-body text-white text-sm ml-2">4.9 / 5.0 average rating</span>
        </div>
        <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-white hover:bg-[#F5F5F5] text-[#FF6B35] font-heading font-black text-base uppercase tracking-wider px-8 py-3 transition-colors whitespace-nowrap">
          Start Now
        </a>
      </div>
    </section>
  );
}

/* ── testimonials ────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FF6B35] uppercase tracking-[0.3em] text-sm">Client Stories</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Real Results</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-[#111111] border border-[#242424] p-8 flex flex-col h-full relative overflow-hidden">
                {/* Orange accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF6B35]" />
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#FF6B35]" fill="#FF6B35" />)}
                </div>
                <p className="font-body text-sm text-[#FF6B35] uppercase tracking-wider mb-3">{t.title}</p>
                <blockquote className="font-body text-[#F5F5F5] text-base leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-[#242424]">
                  <Image src={t.image} alt={t.name} width={44} height={44} className="rounded-full object-cover" />
                  <p className="font-heading font-bold text-white uppercase">{t.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── pricing ─────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FF6B35] uppercase tracking-[0.3em] text-sm">Investment</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Choose Your Plan</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`relative flex flex-col h-full p-8 ${p.highlight ? 'bg-[#FF6B35]' : 'bg-[#1A1A1A] border border-[#242424]'}`}>
                {p.highlight && <div className="absolute -top-3 left-8 bg-[#111111] text-[#FF6B35] font-heading font-black text-xs uppercase px-4 py-1 border border-[#FF6B35]/30">Most Popular</div>}
                <h3 className={`font-heading font-black text-2xl uppercase mb-2 ${p.highlight ? 'text-white' : 'text-white'}`}>{p.name}</h3>
                <div className="mb-6">
                  <span className={`font-heading font-black text-5xl ${p.highlight ? 'text-white' : 'text-[#FF6B35]'}`}>{p.price}</span>
                  <span className={`font-body text-sm ml-2 ${p.highlight ? 'text-white/70' : 'text-[#8A8A8A]'}`}>{p.period}</span>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-3 font-body text-sm ${p.highlight ? 'text-white' : 'text-[#8A8A8A]'}`}>
                      <Check size={14} className={p.highlight ? 'text-white' : 'text-[#FF6B35]'} /> {f}
                    </li>
                  ))}
                </ul>
                <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`}
                  className={`font-heading font-black text-base uppercase tracking-wider px-6 py-4 text-center transition-colors ${p.highlight ? 'bg-white hover:bg-[#F5F5F5] text-[#FF6B35]' : 'border border-[#FF6B35]/40 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'}`}>
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="bg-[#0D0D0D] border-t border-[#242424]">
      {/* CTA */}
      <div className="py-20 px-6 text-center border-b border-[#242424]">
        <Reveal>
          <h2 className="font-heading font-black text-[clamp(2rem,6vw,5rem)] text-white uppercase mb-4">
            Ready to <span className="text-[#FF6B35]">Grind?</span>
          </h2>
          <p className="font-body text-[#8A8A8A] mb-8 max-w-md mx-auto">Book a free 30-minute consultation. No pressure, just a conversation about your goals.</p>
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#E5531A] text-white font-heading font-black text-xl uppercase tracking-wider px-12 py-5 transition-colors">
            Book Free Consult <ArrowRight size={20} />
          </a>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading font-black text-xl uppercase mb-1"><span className="text-[#FF6B35]">GRIND</span> PT</h3>
          <p className="font-body text-[#8A8A8A] text-sm mb-4">{studio.tagline}</p>
          <a href={studio.social.instagram} className="text-[#8A8A8A] hover:text-[#FF6B35] transition-colors inline-block"><Instagram size={20} /></a>
        </div>
        <div>
          <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 font-body text-sm text-[#8A8A8A]"><MapPin size={14} className="text-[#FF6B35] mt-0.5" />{studio.address.street}, {studio.address.city}, {studio.address.state}</li>
            <li className="flex items-center gap-3 font-body text-sm text-[#8A8A8A]"><Phone size={14} className="text-[#FF6B35]" />{studio.phone}</li>
            <li className="flex items-center gap-3 font-body text-sm text-[#8A8A8A]"><Mail size={14} className="text-[#FF6B35]" />{studio.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">Hours</h4>
          <ul className="space-y-2">
            {Object.entries(studio.hours).map(([d, h]) => (
              <li key={d} className="flex gap-3 font-body text-sm text-[#8A8A8A]"><Clock size={12} className="text-[#FF6B35] mt-0.5" /><span className="text-white">{d}:</span> {h}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#242424] py-6 text-center">
        <p className="font-body text-xs text-[#8A8A8A]">© 2026 Grind PT Studio. Powered by <span className="text-[#FF6B35]">Koriva</span>.</p>
      </div>
    </footer>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function GrindPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trainers />
        <Programs />
        <ProofBar />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
