import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Levi's 501 Straight Leg",
    brand: "Levi's",
    price: "$24",
    original: "$80",
    size: "W30/L32",
    condition: "Excellent",
    badge: "Staff Pick",
    emoji: "👖",
    bg: "#c4b49a",
  },
  {
    id: 2,
    name: "Cropped Denim Jacket",
    brand: "Calvin Klein",
    price: "$18",
    original: "$120",
    size: "S",
    condition: "Good",
    badge: "New In",
    emoji: "🧥",
    bg: "#b8c4cc",
  },
  {
    id: 3,
    name: "Floral Midi Dress",
    brand: "Unknown / Vintage",
    price: "$14",
    original: "—",
    size: "M",
    condition: "Excellent",
    badge: "70s Vintage",
    emoji: "👗",
    bg: "#d4b8a0",
  },
  {
    id: 4,
    name: "Oversized Flannel Shirt",
    brand: "L.L. Bean",
    price: "$12",
    original: "$65",
    size: "L",
    condition: "Great",
    badge: null,
    emoji: "🟫",
    bg: "#c8b4a8",
  },
  {
    id: 5,
    name: "High-Waist Mom Jeans",
    brand: "Gap",
    price: "$16",
    original: "$70",
    size: "W28",
    condition: "Like New",
    badge: "Trending",
    emoji: "👖",
    bg: "#a8b8c8",
  },
  {
    id: 6,
    name: "Knit Cream Sweater",
    brand: "J. Crew",
    price: "$20",
    original: "$95",
    size: "M",
    condition: "Excellent",
    badge: null,
    emoji: "🧶",
    bg: "#e0d4c0",
  },
];

export default function Products({ onAddToCart }) {
  const [added, setAdded] = useState(null);

  const handleAdd = (product) => {
    setAdded(product.id);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAdded(null), 1400);
  };

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Handpicked This Week</p>
            <h2 className="section-title">
              <em>New Arrivals</em>
            </h2>
          </div>
          <a href="#order" className="section-link">
            Order Yours →
          </a>
        </div>

        <div className="products__grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <div
                className="product-card__image"
                style={{
                  background: `linear-gradient(135deg, ${p.bg}, var(--tan))`,
                }}
              >
                <span style={{ fontSize: "4.5rem", zIndex: 1 }}>{p.emoji}</span>
                {p.badge && (
                  <div className="product-card__badge">{p.badge}</div>
                )}
                <div className="product-card__overlay">
                  <button
                    className="product-card__overlay-btn"
                    onClick={() => handleAdd(p)}
                  >
                    {added === p.id ? "✓ Added!" : "+ Quick Add"}
                  </button>
                </div>
              </div>
              <div className="product-card__body">
                <div className="product-card__condition">✦ {p.condition}</div>
                <div className="product-card__name">{p.name}</div>
                <div className="product-card__brand">{p.brand}</div>
                <div className="product-card__footer">
                  <div>
                    <span className="product-card__price">{p.price}</span>
                    {p.original !== "—" && (
                      <span className="product-card__original">
                        {p.original}
                      </span>
                    )}
                  </div>
                  <div className="product-card__size">{p.size}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
