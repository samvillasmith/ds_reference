export default function Card({ tag, tagClass, title, desc, href, arrow, spanFull }) {
  return (
    <a className={`card${spanFull ? ' span-full' : ''}`} href={href}>
      <span className={`card-tag ${tagClass}`}>{tag}</span>
      <span className="card-title">{title}</span>
      <span className="card-desc">{desc}</span>
      <span className="card-arrow">{arrow}</span>
    </a>
  );
}
