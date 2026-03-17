import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          BLACK <span>TWELVE</span>
        </div>
        <ul className="navbar__links">
          <li>
            <a href="#categories">Shop</a>
          </li>
          <li>
            <a href="#products">New Arrivals</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>

          <li>
            <a href="#order" className="navbar__cta">
              Order Now →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
