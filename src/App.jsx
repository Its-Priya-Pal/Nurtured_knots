import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import WhyChooseUs from "./sections/WhyChooseUs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-[#FFF9F4] text-[#3A2E2E] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;