import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import Products from "./components/Products";
import HowitWorks from "./components/HowitWorks";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <HowitWorks />
      <OrderSection />
      <Footer />
    </div>
  );
}
