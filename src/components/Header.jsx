"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ import this

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // ✅ current route

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Decide background style
    const isHome = pathname === "/";
    const showTransparent = isHome && !scrolled && !menuOpen;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
                ${showTransparent
                    ? "bg-transparent"
                    : "backdrop-blur-md bg-[#0F4C81]/90 shadow-md"
                }`}
        >
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.jpg"
                        alt="Bizline Logo"
                        width={40}
                        height={40}
                        className="rounded-md"
                    />
                    <div>
                        <Link href="/" className="text-lg font-semibold text-white">
                            Bizline
                        </Link>
                        <div className="text-xs text-gray-200">
                            Businessmen Services LLC
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/about"
                        className="text-sm font-medium text-white hover:text-[#C7A042] transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="text-sm font-medium text-white hover:text-[#C7A042] transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-white hover:text-[#C7A042] transition-colors"
                    >
                        Contact
                    </Link>

                    <a
                        href="https://wa.me/971507795983"
                        className="ml-2 inline-block rounded-md border border-[#C7A042] px-4 py-2 text-sm font-medium text-[#C7A042] hover:bg-[#C7A042] hover:text-white transition-colors"
                    >
                        WhatsApp
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden text-white font-bold text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden backdrop-blur-lg bg-[#0F4C81]/90 shadow-lg absolute top-full left-0 w-full py-6 px-6 flex flex-col gap-4 text-white animate-slideDown">
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C7A042]">
                        About
                    </Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#C7A042]">
                        Services
                    </Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#C7A042]">
                        Contact
                    </Link>
                    <a
                        href="https://wa.me/971507795983"
                        onClick={() => setMenuOpen(false)}
                        className="inline-block rounded-md border border-[#C7A042] px-4 py-2 text-sm font-medium text-[#C7A042] hover:bg-[#C7A042] hover:text-white transition-colors"
                    >
                        WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
}
