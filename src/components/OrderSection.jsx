import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// CONFIG — only one thing to fill in!
// ─────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "+2348110097064";
// Replace with your WhatsApp number in international format.
// No +, no spaces, no dashes.
// Examples:
//   +1 (800) 555-0000  →  '18005550000'
//   +44 7911 123456   →  '447911123456'
//   +234 801 234 5678 →  '2348012345678'
// ─────────────────────────────────────────────────────────────

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
const CATS = [
  "Women's",
  "Men's",
  "Vintage",
  "Denim",
  "Outerwear",
  "Accessories",
];
const PAYMENTS = [
  "Pay on Delivery",
  "Bank Transfer",
  "PayPal",
  "Cash App",
  "Venmo",
];

const EMPTY = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
  size: "",
  category: "",
  items: "",
  deliveryDate: "",
  paymentMethod: "",
  notes: "",
};

function buildMessage(f) {
  return encodeURIComponent(
    `🛍️ *NEW ORDER — Second Hand Saints*\n\n` +
      `👤 *Customer Details*\n` +
      `Name: ${f.fullName}\n` +
      `Email: ${f.email}\n` +
      `Phone: ${f.phone}\n\n` +
      `🛍️ *Order Details*\n` +
      `Items: ${f.items}\n` +
      `Size: ${f.size}\n` +
      `Category: ${f.category}\n` +
      `Delivery Date: ${f.deliveryDate}\n` +
      `Payment: ${f.paymentMethod}\n\n` +
      `📍 *Delivery Address*\n` +
      `${f.address}\n` +
      `${f.city}, ${f.zip}\n\n` +
      `📝 *Notes*\n` +
      `${f.notes || "None"}`,
  );
}

const perks = [
  { icon: "💬", text: "Order goes straight to our WhatsApp — instant!" },
  { icon: "⚡", text: "We reply and confirm within a few hours" },
  { icon: "📦", text: "We pack & dispatch once payment is confirmed" },
  { icon: "↩️", text: "14-day returns, no questions asked" },
];

export default function OrderSection() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage(form)}`,
        "_blank",
      );
    }, 600);
  };

  return (
    <section className="order-section section" id="order">
      <div className="container">
        <div className="order-section__inner">
          {/* Left info */}
          <div className="order-section__info">
            <p className="section-eyebrow">Place Your Order</p>
            <h2 className="section-title">
              Order via
              <br />
              <em>WhatsApp</em> — simple.
            </h2>
            <p>
              Fill in your details, hit submit, and your order lands straight in
              our WhatsApp as a formatted message — ready for us to confirm. No
              accounts, no checkouts, no faff.
            </p>

            <div className="perks-list" style={{ marginTop: "28px" }}>
              {perks.map((p, i) => (
                <div className="perk-item" key={i}>
                  <div className="perk-icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--ash)",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Skip the form? Chat with us directly
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-forest"
              >
                💬 Open WhatsApp
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="order-form">
            {submitted ? (
              <SuccessScreen
                onReset={() => {
                  setForm(EMPTY);
                  setSubmitted(false);
                }}
                form={form}
              />
            ) : (
              <>
                <h3 className="order-form__title">Place Your Order</h3>
                <p className="order-form__subtitle">
                  All fields required unless marked optional
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-section-label">👤 Your Details</div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        placeholder="Jane Doe"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="jane@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 555 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div
                    className="form-section-label"
                    style={{ marginTop: "20px" }}
                  >
                    🛍️ Order Details
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="items">
                      Items You Want
                    </label>
                    <textarea
                      id="items"
                      name="items"
                      className="form-textarea"
                      placeholder="e.g. Levi's 501 jeans (W30), cropped denim jacket (S)..."
                      value={form.items}
                      onChange={handleChange}
                      required
                      style={{ minHeight: "80px" }}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="size">
                        Clothing Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        className="form-select"
                        value={form.size}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select size</option>
                        {SIZES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="category">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="form-select"
                        value={form.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select category</option>
                        {CATS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="deliveryDate">
                        Preferred Delivery Date
                      </label>
                      <input
                        id="deliveryDate"
                        name="deliveryDate"
                        type="date"
                        className="form-input"
                        value={form.deliveryDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="paymentMethod">
                        Payment Method
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        className="form-select"
                        value={form.paymentMethod}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select method</option>
                        {PAYMENTS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div
                    className="form-section-label"
                    style={{ marginTop: "20px" }}
                  >
                    📍 Delivery Address
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="address">
                      Street Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      className="form-input"
                      placeholder="123 Vintage Lane, Apt 4B"
                      value={form.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="city">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        className="form-input"
                        placeholder="New York"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="zip">
                        ZIP / Postal Code
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        className="form-input"
                        placeholder="10001"
                        value={form.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: "4px" }}>
                    <label className="form-label" htmlFor="notes">
                      Extra Notes{" "}
                      <span style={{ opacity: 0.5 }}>(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="form-textarea"
                      placeholder="Special instructions, color preferences, brands to avoid..."
                      value={form.notes}
                      onChange={handleChange}
                      style={{ minHeight: "70px" }}
                    />
                  </div>

                  <button type="submit" className="btn btn-rust btn-full">
                    Send Order via WhatsApp 💬
                  </button>

                  <p className="form-disclaimer">
                    Submitting will open WhatsApp with your full order
                    pre-filled and ready to send.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessScreen({ onReset, form }) {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: "3rem", marginBottom: "16px" }}>💬</div>
      <h3 className="order-form__title" style={{ marginBottom: "12px" }}>
        WhatsApp is opening!
      </h3>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--ash)",
          lineHeight: 2,
        }}
      >
        Your order for{" "}
        <strong style={{ color: "var(--ink)" }}>{form.fullName}</strong> is
        pre-filled as a message.
        <br />
        Just hit <strong style={{ color: "var(--forest)" }}>Send</strong> in
        WhatsApp and we'll confirm shortly. ✦
      </p>
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginTop: "28px",
          flexWrap: "wrap",
        }}
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage(form)}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-forest"
        >
          💬 Reopen WhatsApp
        </a>
        <button className="btn btn-secondary" onClick={onReset}>
          New Order
        </button>
      </div>
    </div>
  );
}
