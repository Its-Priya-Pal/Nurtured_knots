import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import heroBg from "../assets/images/hero/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src={heroBg}
        alt="Crochet Hero"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Cream Overlay */}
      <div className="absolute inset-0 bg-[#FFF9F4]/35"></div>

      {/* Content */}
      <Container className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-3xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 uppercase tracking-[0.35em] text-[#C97B84] font-semibold"
          >
            Handmade With Love
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold leading-tight text-[#3A2E2E] md:text-7xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Handmade Crochet
            <br />
            Creations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5B4A42]"
          >
            Thoughtfully handcrafted bouquets, accessories, and gifts,
            designed to make every special moment even more memorable.
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="mt-10 flex justify-center"
>
  <a href="#products">
    <Button>
  Explore Our Creations
</Button>
  </a>
</motion.div>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-[#3A2E2E]"
      >
        ↓
      </motion.div>
    </section>
  );
}