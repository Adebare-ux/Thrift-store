export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-text">Thrift</div>

      <div className="hero__inner">
        {/* Left: Copy */}
        <div className="hero__copy">
          <div className="hero__tag">New Arrivals Weekly</div>

          <h1 className="hero__title">
            Wear Stories,
            <br />
            Not <em>Fast Fashion</em>
          </h1>

          <p className="hero__subtitle">
            Handpicked vintage & pre-loved clothing delivered to your door.
            Every piece has character — and a price tag that won't haunt you.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn btn-primary">
              Shop Now →
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              How It Works
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-value">2,400+</div>
              <div className="hero__stat-label">Items in Stock</div>
            </div>
            <div>
              <div className="hero__stat-value">$8</div>
              <div className="hero__stat-label">Avg. Price</div>
            </div>
            <div>
              <div className="hero__stat-value">4.9★</div>
              <div className="hero__stat-label">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero__image-area">
          <div className="hero__image-frame">
            <div className="hero__image-placeholder">
              <span className="icon">👗</span>
              <p>Hero Product Photo</p>
            </div>
          </div>
          <div className="hero__badge">
            <strong>Up to 0% off</strong>
            retail price
          </div>
          <div className="hero__badge-tag">🌿 Eco-Friendly</div>
        </div>
      </div>
    </section>
  );
}
