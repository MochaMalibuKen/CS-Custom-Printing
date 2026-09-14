import { useEffect, useState } from 'react'
import { portfolioItems, services, steps } from './data/siteData'
import './App.css'

const quoteHref = 'mailto:info@cscustomprinting.com?subject=Custom%20Printing%20Quote'

function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' footer-brand' : ''}`} href="#top" aria-label="C&S Custom Printing home"><span className="brand-mark" aria-hidden="true">C&S</span><span>Custom Printing</span></a>
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => { const closeMenu = () => setIsOpen(false); window.addEventListener('resize', closeMenu); return () => window.removeEventListener('resize', closeMenu) }, [])
  return <header className="nav-wrap">
    <Brand />
    <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="main-navigation" aria-label={`${isOpen ? 'Close' : 'Open'} navigation`} onClick={() => setIsOpen((open) => !open)}><span /><span /><span /></button>
    <nav id="main-navigation" className={isOpen ? 'is-open' : ''} aria-label="Main navigation">
      <a href="#services" onClick={() => setIsOpen(false)}>Services</a><a href="#work" onClick={() => setIsOpen(false)}>Our Work</a><a href="#process" onClick={() => setIsOpen(false)}>How It Works</a><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
    </nav>
    <a className="button small nav-quote" href={quoteHref}>Get a Quote</a>
  </header>
}

function ResilientImage({ src, alt, className = '', fallback }) {
  const [failed, setFailed] = useState(false)
  return <div className={`resilient-image ${className}${failed ? ' is-missing' : ''}`}><div className="image-fallback" aria-hidden="true">{fallback}</div>{!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}</div>
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-copy">
    <p className="eyebrow">Custom-made in Batesburg, South Carolina</p><h1>Your ideas.<br /><em>Brought to life.</em></h1>
    <p className="hero-text">From one-of-a-kind gifts to full group orders, C&S Custom Printing creates bold apparel, tumblers, patches and graphics made especially for you.</p>
    <div className="hero-actions"><a className="button" href={quoteHref}>Start Your Order <span>→</span></a><a className="text-link" href="#work">See Our Work <span>↓</span></a></div>
    <div className="trust" aria-label="Made with care, local service, designed for you"><strong>Made with care</strong><span aria-hidden="true">•</span><strong>Local service</strong><span aria-hidden="true">•</span><strong>Designed for you</strong></div>
  </div><div className="hero-art"><div className="gold-orbit" aria-hidden="true" /><ResilientImage src="/logo.png" alt="C&S Custom Printing — bringing your ideas to life" className="hero-logo" fallback={<div className="logo-placeholder"><b>C&S</b><span>Custom Printing</span><small>Bringing your ideas to life</small></div>} /><div className="floating-card"><b>Custom is our specialty.</b><small>Apparel • Drinkware • Gifts</small></div></div></section>
}

function Services() {
  return <section className="section services" id="services"><div className="section-heading"><div><p className="eyebrow">What we create</p><h2>Made for every moment.</h2></div><p>Quality custom products for celebrations, organizations, businesses, schools, ministries and everyday memories.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more →</a></article>)}</div></section>
}

function Portfolio() {
  return <section className="section work" id="work"><div className="section-heading light"><div><p className="eyebrow">Featured projects</p><h2>Work we’re proud of.</h2></div><p>Every piece starts with a story. Here are a few ideas we have turned into something memorable.</p></div><div className="gallery">{portfolioItems.map((item) => <figure key={item.title}><ResilientImage src={item.src} alt={item.title} className="image-wrap" fallback={<><span>Original project image</span><small>Asset coming soon</small></>} /><figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption></figure>)}</div></section>
}

function Process() {
  return <section className="section process" id="process"><div className="center-heading"><p className="eyebrow">Simple from start to finish</p><h2>Let’s make something great.</h2><p>You bring the idea. We’ll help with the rest.</p></div><div className="steps">{steps.map((step) => <article key={step.number}><b>{step.number}</b><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>
}

function Contact() {
  return <section className="cta" id="contact"><div><p className="eyebrow">Ready when you are</p><h2>Bring your idea to life.</h2><p>Let’s talk about your next custom order. Reach out for pricing, timing and design details.</p></div><div className="contact-actions"><a className="button gold" href={quoteHref}>Request a Quote →</a><a href="tel:+18033576530">Call 803-357-6530</a></div></section>
}

function Footer() {
  return <footer><div><Brand footer /><p>Bringing your ideas to life.</p></div><div><h3>Contact</h3><a href="tel:+18033576530">803-357-6530</a><a href="mailto:info@cscustomprinting.com">info@cscustomprinting.com</a></div><div><h3>Mailing Address</h3><address>PO Box 2621<br />Batesburg Leesville, SC 29070</address></div><div><h3>Explore</h3><a href="#services">Services</a><a href="#work">Our Work</a><a href="#process">How It Works</a></div><small>© 2026 C&S Custom Printing. All rights reserved.</small></footer>
}

function App() { return <><a className="skip-link" href="#main-content">Skip to content</a><Navigation /><main id="main-content"><Hero /><Services /><Portfolio /><Process /><Contact /></main><Footer /></> }
export default App
