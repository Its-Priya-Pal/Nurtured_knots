import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Nurtured Knots 🧶
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#C97B84] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Instagram Button */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#C97B84] text-white px-5 py-2 rounded-full hover:scale-105 transition"
        >
          <ExternalLink size={18} />
          Instagram
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-6 gap-5">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#C97B84]"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#C97B84] text-white rounded-full py-3 text-center"
            >
              Instagram
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}