export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center" id="about">
      <h1 className="text-4xl font-bold">About Section</h1>
    </section>
  );
}import { CheckCircle } from "lucide-react";
import Container from "../components/Container";
import aboutImage from "../assets/images/about/about.jpg";

const features = [
  "100% Handmade",
  "Made with Premium Yarn",
  "Custom Orders Available",
  "Crafted with Care",
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF9F4] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src={aboutImage}
              alt="About Nurtured Knots"
              className="mx-auto w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-[#C97B84]">
              About Us
            </p>

            <h2
              className="mt-4 text-4xl font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Every Stitch Has a Story
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Nurtured Knots, every creation is lovingly handcrafted to
              bring warmth, joy, and lasting memories. From crochet bouquets
              that never fade to personalized gifts made just for you, each
              piece is crafted with patience, creativity, and attention to
              detail.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-[#C97B84]"
                    size={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}