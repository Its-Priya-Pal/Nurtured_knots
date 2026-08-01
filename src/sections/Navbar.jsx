import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF9F4]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <a href="#home">
            <h1
              className="text-3xl font-bold text-[#3A2E2E]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Nurtured
              <span className="text-[#C97B84]"> Knots</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-medium text-[#3A2E2E] transition-all duration-300 hover:text-[#C97B84]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/nurtured_knots"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#C97B84] px-5 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#B86A73]"
          >
            <ExternalLink size={18} />
            Instagram
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#3A2E2E] md:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-[78px] z-40 w-full bg-[#FFF9F4] shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-[#3A2E2E] transition hover:text-[#C97B84]"
              >
                {item.name}
              </a>
            </li>
          ))}

          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-[#C97B84] py-3 text-center font-medium text-white transition hover:bg-[#B86A73]"
          >
            Visit Instagram
          </a>
        </ul>
      </div>
    </>
  );
}