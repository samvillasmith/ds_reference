export default function Navbar() {
  return (
    <nav className="site-nav">
      <a className="nav-brand" href="/">Texcoco Data Science</a>
      <div className="nav-links">
        <a className="nav-cta" href="/crash-course.html">Crash Course</a>
        <a className="nav-home" href="/#foundations">Foundations</a>
        <a className="nav-home" href="/#feature-eng">Feature Eng</a>
        <a className="nav-home" href="/#reference">Reference</a>
      </div>
    </nav>
  );
}
