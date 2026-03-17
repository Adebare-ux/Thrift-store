const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Browse & Pick",
    desc: "Filter by size, category, or era. Every item is photographed and described honestly.",
  },
  {
    num: "02",
    icon: "🛒",
    title: "Add to Order",
    desc: "Mix and match pieces. Bundles over $35 ship free with climate-neutral delivery.",
  },
  {
    num: "03",
    icon: "📦",
    title: "We Pack It",
    desc: "Each order is wrapped in recycled tissue, inspected again, and packed with care.",
  },
  {
    num: "04",
    icon: "✨",
    title: "Enjoy the Fit",
    desc: "Love it or return it within 14 days — no questions, no hassle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__bg">Simple</div>
      <div className="container">
        <p className="section-eyebrow">The Process</p>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          Thrifting made <em>ridiculously easy</em>
        </h2>

        <div className="how-it-works__steps">
          {steps.map((s) => (
            <div className="step-card" key={s.num}>
              <div className="step-card__num">{s.num}</div>
              <div className="step-card__icon">{s.icon}</div>
              <div className="step-card__title">{s.title}</div>
              <p className="step-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
