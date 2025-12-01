export default function Header() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
    >
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo red-text">
          Movie App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html" className="red-text">
              Movie
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
