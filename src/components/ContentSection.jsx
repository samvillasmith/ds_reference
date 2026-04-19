import Card from './Card';

export default function ContentSection({ id, label, title, desc, gridClass, cards }) {
  return (
    <section id={id} className="section">
      <div className="section-label">{label}</div>
      <div className="section-title">{title}</div>
      <p className="section-desc">{desc}</p>
      <div className={`grid ${gridClass}`}>
        {cards.map((card, i) => <Card key={i} {...card} />)}
      </div>
    </section>
  );
}
