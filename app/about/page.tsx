import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page subpage about-page">
      <section className="about-hero reveal">
        <div className="about-copy">
          <p className="eyebrow">A person behind the pixels</p>
          <h1>Curiosity first.<br /><em>Always.</em></h1>
          <p className="about-lede">I’m Sakiyo, an independent designer partnering with thoughtful teams to make useful things feel a little more human.</p>
          <p className="about-body">My practice sits somewhere between strategy and feeling. I like asking one more question, noticing the small details, and finding the simple idea that makes everything click. For the last decade, I’ve helped early-stage teams and established names find a voice, build a system, and bring their next chapter to life.</p>
          <Link className="text-link" href="mailto:hello@sakiyo.studio">Tell me what you’re making <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-portrait" role="img" aria-label="Sakiyo working in their bright Brooklyn studio"><span className="portrait-note">Somewhere between<br />the coffee and the first draft.</span></div>
      </section>
      <section className="about-details">
        <div className="detail-column"><p className="eyebrow">What I bring</p><h2>Good questions.<br />Clear thinking.</h2></div>
        <div className="detail-content"><p>I work across the whole picture, from the first conversation to the tiny details someone notices years later.</p><ul className="capability-list"><li><span>01</span> Brand strategy &amp; identity</li><li><span>02</span> Digital design &amp; direction</li><li><span>03</span> Art direction &amp; campaigns</li><li><span>04</span> Packaging &amp; print</li></ul></div>
      </section>
      <section className="about-footnote"><span>Based in Brooklyn, working everywhere.</span><span>Always up for a good book recommendation.</span></section>
    </main>
  );
}
