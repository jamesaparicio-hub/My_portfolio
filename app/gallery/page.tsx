const galleryItems = [
  { title: "A softer landing", category: "Places", image: "gallery-landing", size: "tall" },
  { title: "Things in bloom", category: "Objects", image: "gallery-bloom", size: "short" },
  { title: "Light study, no. 2", category: "Studies", image: "gallery-light", size: "short" },
  { title: "The long way home", category: "Places", image: "gallery-home", size: "tall" },
  { title: "A color for Sunday", category: "Objects", image: "gallery-color", size: "short" },
  { title: "Notes from the coast", category: "Studies", image: "gallery-coast", size: "tall" },
];

export default function GalleryPage() {
  return (
    <main className="page subpage gallery-page">
      <section className="page-intro gallery-intro reveal">
        <p className="eyebrow">Little things worth keeping</p>
        <h1>A visual<br /><em>scrapbook.</em></h1>
        <p className="intro-copy">Color, texture, places, and other things I keep coming back to. Collected along the way.</p>
      </section>
      <section className="gallery-grid" aria-label="Visual scrapbook">
        {galleryItems.map((item, index) => (
          <figure className={`gallery-item gallery-item-${index + 1} ${item.size} reveal`} key={item.title}>
            <div className={`gallery-image ${item.image}`} role="img" aria-label={`${item.category}: ${item.title}`} />
            <figcaption><span>{item.title}</span><span>{item.category}</span></figcaption>
          </figure>
        ))}
      </section>
      <p className="gallery-endnote">Collected with care, kept for later.</p>
    </main>
  );
}
