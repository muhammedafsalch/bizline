import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1A2F] text-white mt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81] via-[#091425] to-[#0F4C81] opacity-95"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold tracking-wide text-[#C7A042]">
            Bizline Businessmen Services LLC
          </h3>
          <p className="mt-4 text-sm text-gray-300">📍 Khalidya, Abu Dhabi</p>
          <p className="mt-2 text-sm">
            📞{" "}
            <a
              href="tel:+971507795983"
              className="hover:text-[#C7A042] transition-colors"
            >
              +971507795983
            </a>
          </p>
          <p className="mt-2 text-sm">
            ✉️{" "}
            <a
              href="mailto:info@bizline.ae"
              className="hover:text-[#C7A042] transition-colors"
            >
              info@bizline.ae
            </a>
          </p>
          <p className="mt-2 text-sm">
            🌐{" "}
            <a
              href="https://www.bizline.ae"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C7A042] transition-colors"
            >
              www.bizline.ae
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#C7A042] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/about" className="hover:text-[#C7A042] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-[#C7A042] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#C7A042] transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971507795983"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C7A042] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#C7A042] mb-4">
            Follow Us
          </h4>
          <div className="flex gap-5">
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#C7A042] hover:text-black transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#C7A042] hover:text-black transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#C7A042] hover:text-black transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20 py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#C7A042]">Bizline</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
