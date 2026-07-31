import Container from "../components/Container";
import Button from "../components/Button";
import heroImage from "../assets/images/hero/hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
        id="home"
    className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
    <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

  <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
</div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Content */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <p className="text-[#C97B84] font-semibold uppercase tracking-wider">
    Handmade with Love
  </p>

  <h1
    className="mt-4 text-5xl md:text-6xl font-bold leading-tight"
    style={{ fontFamily: "Playfair Display" }}
  >
    Beautiful Crochet Creations
    <br />
    For Every Occasion
  </h1>

  <p className="mt-6 text-lg text-gray-600 leading-8">
    Discover handcrafted bouquets, keychains, plushies,
    and custom crochet gifts made with love and attention
    to every stitch.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">
    <Button>Shop Collection</Button>

    <Button className="bg-white text-[#C97B84] border border-[#C97B84] hover:bg-[#FFF3F4]">
      Custom Order
    </Button>
  </div>

  {/* Trust Indicators */}
  <div className="mt-10 flex flex-wrap gap-8">
    <div>
      <h3 className="text-2xl font-bold">100+</h3>
      <p className="text-gray-500">Happy Customers</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">50+</h3>
      <p className="text-gray-500">Custom Orders</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">100%</h3>
      <p className="text-gray-500">Handmade</p>
    </div>
  </div>
</motion.div>

          {/* Right Content */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Crochet Bouquet"
              className="w-full max-w-md rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}