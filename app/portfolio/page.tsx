import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Sunday Ritual",
    type: "Identity · Packaging · Art direction",
    year: "2026",
    image: "image-sunday",
    description: "A brighter kind of everyday ritual, built for a botanical skincare line.",
  },
  {
    number: "02",
    name: "Common Ground",
    type: "Strategy · Identity · Digital",
    year: "2025",
    image: "image-ground",
    description: "A neighborhood food hall with a little more heart and a lot more flavor.",
  },
  {
    number: "03",
    name: "Field Notes No. 4",
    type: "Editorial · Art direction",
    year: "2025",
    image: "image-field",
    description: "An independent journal exploring the people who make places matter.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page subpage portfolio-page">
      <section className="page-intro reveal">
        <p className="eyebrow">Selected work · 2024—2026</p>
        <h1>Thoughtful work,<br /><em>made to matter.</em></h1>
        <p className="intro-copy">A collection of identities, places, and digital experiences made in close collaboration with good people.</p>
      </section>
      <section className="project-list" aria-label="Selected projects">
        {projects.map((project) => (
          <article className="portfolio-project reveal" key={project.number}>
            <div className={`project-image portfolio-image ${project.image}`} role="img" aria-label={project.description} />
            <div className="portfolio-meta">
              <span className="project-index">{project.number} / 03 <span>{project.year}</span></span>
              <div className="portfolio-title"><h2>{project.name}</h2><p>{project.description}</p></div>
              <span className="project-type">{project.type}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="contact-strip">
        <div><p className="eyebrow">Have a good one in mind?</p><h2>Let’s make it real.</h2></div>
        <Link className="button button-dark" href="mailto:hello@sakiyo.studio">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
