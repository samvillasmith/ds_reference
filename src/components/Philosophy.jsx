const principles = [
  {
    num: '01',
    title: 'Show the derivation',
    body: 'No magic. Every formula is derived from first principles with every step visible. If you can follow the algebra, you own the concept.',
  },
  {
    num: '02',
    title: 'Numbers before notation',
    body: 'Work through a concrete example first, then generalize. Five data points and a calculator beat abstract theory every time.',
  },
  {
    num: '03',
    title: 'Free, forever',
    body: "No paywalls, no premium tiers, no login walls. Knowledge that's locked away isn't knowledge — it's a product. This is not a product.",
  },
];

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="section-label">Principles</div>
      <div className="section-title">How We Teach</div>
      <div className="phil-grid">
        {principles.map(({ num, title, body }) => (
          <div key={num} className="phil-item">
            <div className="phil-num">{num}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
