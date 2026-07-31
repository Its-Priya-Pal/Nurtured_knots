import { ExternalLink, MessageCircle, Mail } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF9F4] py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">

          <p className="font-semibold uppercase tracking-widest text-[#C97B84]">
            Get in Touch
          </p>

          <h2
            className="mt-4 text-4xl font-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Let's Create Something Beautiful Together
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Whether you're looking for a handmade bouquet, a personalized
            keychain, or a custom crochet gift, I'd love to help bring your
            ideas to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button>
              <ExternalLink size={18} />
              <span className="ml-2">Instagram</span>
            </Button>

            <Button className="bg-green-600 hover:bg-green-700">
              <MessageCircle size={18} />
              <span className="ml-2">WhatsApp</span>
            </Button>

            <Button className="bg-gray-700 hover:bg-gray-800">
              <Mail size={18} />
              <span className="ml-2">Email</span>
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}