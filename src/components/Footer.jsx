export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">Second Hand Saints</div>
            <p className="footer__brand-desc">
              Vintage & pre-loved clothing curated with care. We believe great
              style shouldn't cost the planet.
            </p>
            <div className="footer__social">
              {["📷", "🐦", "📌", "🎵"].map((icon, i) => (
                <a href="#" className="footer__social-link" key={i}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <div className="footer__col-title">Shop</div>
            <ul className="footer__links">
              {[
                "Women's",
                "Men's",
                "Vintage",
                "Denim",
                "Outerwear",
                "Accessories",
              ].map((l) => (
                <li key={l}>
                  <a href="#categories">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="footer__col-title">Info</div>
            <ul className="footer__links">
              {[
                "About Us",
                "Sell With Us",
                "Sustainability",
                "Size Guide",
                "FAQ",
              ].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="footer__col-title">Support</div>
            <ul className="footer__links">
              {[
                "Track Order",
                "Returns",
                "Contact Us",
                "Shipping Info",
                "Sizing Help",
              ].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Black Twelve. All rights reserved.</span>
          <div className="footer__made-with">
            <span>Made with</span>
            <span>♻️</span>
            <span>for the planet</span>
          </div>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
