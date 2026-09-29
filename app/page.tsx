import Link from "next/link";

export default function Home() {
  return (
    <main className="page home-page">
      <section className="home-hero">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent designer · Brooklyn, NY</p>
          <h1>Making room<br />for <em>good ideas.</em></h1>
          <p className="hero-intro">I’m Sakiyo, a multidisciplinary designer building thoughtful identities and digital experiences for people doing meaningful work.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/portfolio">Explore selected work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">A little about me <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span>Currently available</span><span className="note-rule" /><span>For select projects, Q4 2026</span></div>
        </div>
        <div className="hero-visual reveal" role="img" aria-label="Sunlit modern studio with a sculptural chair and warm wood details">
          <span className="visual-stamp">Ideas<br />in good<br />company</span>
          <span className="visual-caption">A considered point of view<br />can change everything.</span>
        </div>
      </section>
      <section className="home-feature section-block">
        <div className="section-heading">
          <div><p className="eyebrow">A few recent favorites</p><h2>Selected work</h2></div>
          <Link className="text-link" href="/portfolio">View all projects <span aria-hidden="true">→</span></Link>
        </div>
        <Link className="featured-project" href="/portfolio">
          <div className="project-image image-sunday" role="img" aria-label="Colorful botanical packaging and printed materials" />
          <div className="featured-caption"><div><span className="project-index">01 / 03</span><h3>Sunday Ritual</h3><p>Identity, packaging, art direction</p></div><span className="round-arrow" aria-hidden="true">↗</span></div>
        </Link>
      </section>
      <section className="home-quote">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>Good design should feel like it could only ever belong to you.</p>
        <span className="quote-credit">A note to self, and to every project</span>
      </section>
    </main>
  );
}
