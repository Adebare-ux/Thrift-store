const categories = [
  { name: "Women's", count: "840 items", emoji: "👚", bg: "#e8d5c0" },
  { name: "Men's", count: "620 items", emoji: "👔", bg: "#d0c8b8" },
  { name: "Vintage", count: "380 items", emoji: "🧥", bg: "#c9b89a" },
  { name: "Denim", count: "290 items", emoji: "👖", bg: "#bfb5a0" },
];

export default function Categories() {
  return (
    <section className="categories section" id="categories">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Browse by Style</p>
            <h2 className="section-title">
              Shop <em>Categories</em>
            </h2>
          </div>
          <a href="#products" className="section-link">
            View All Items →
          </a>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat.name}>
              <div
                className="category-card__image"
                style={{
                  background: `linear-gradient(160deg, ${cat.bg}, var(--tan))`,
                }}
              >
                <span style={{ fontSize: "4rem", zIndex: 1 }}>{cat.emoji}</span>
              </div>
              <div className="category-card__body">
                <div className="category-card__name">{cat.name}</div>
                <div className="category-card__count">{cat.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
