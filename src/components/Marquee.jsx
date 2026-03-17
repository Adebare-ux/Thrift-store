const items = [
  "Free Shipping Over $35",
  "New Arrivals Every Monday",
  "Sustainably Sourced",
  "100% Authentic Vintage",
  "Easy Returns",
  "Sizes XS–3XL",
  "Handpicked & Inspected",
  "Carbon-Neutral Shipping",
  "Free Shipping Over $35",
  "New Arrivals Every Monday",
  "Sustainably Sourced",
  "100% Authentic Vintage",
  "Easy Returns",
  "Sizes XS–3XL",
  "Handpicked & Inspected",
  "Carbon-Neutral Shipping",
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
