"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Bizline,%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    const whatsappUrl = `https://wa.me/971507795983?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 mt-14 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#0F4C81]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#C7A042]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 relative z-10">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81]">
            Contact Us
          </h1>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-[#0F4C81] to-[#C7A042] rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We’d love to hear from you. Reach out to us via phone, email, or WhatsApp — 
            our team is here to help you with all your business needs.
          </p>

          <div className="mt-8 space-y-5 text-gray-800">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#C7A042] mt-1" />
              <span>Khalidya, Abu Dhabi</span>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#C7A042] mt-1" />
              <a
                href="tel:+971507795983"
                className="text-[#0F4C81] font-medium hover:underline"
              >
                +971507795983
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#C7A042] mt-1" />
              <a
                href="mailto:info@bizline.ae"
                className="text-[#0F4C81] font-medium hover:underline"
              >
                info@bizline.ae
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaGlobe className="text-[#C7A042] mt-1" />
              <a
                href="https://www.bizline.ae"
                target="_blank"
                rel="noreferrer"
                className="text-[#0F4C81] font-medium hover:underline"
              >
                www.bizline.ae
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-bold text-[#0F4C81]">
              Send us a message
            </h2>

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C7A042] focus:ring-[#C7A042] transition"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C7A042] focus:ring-[#C7A042] transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C7A042] focus:ring-[#C7A042] transition"
                rows={5}
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#0F4C81] to-[#C7A042] px-6 py-4 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
