"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#concept", label: "旅の思想" },
  { href: "/#plans", label: "旅程" },
  { href: "/#services", label: "手配内容" },
  { href: "/#process", label: "流れ" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="brand-mark" href="/" onClick={() => setMenuOpen(false)}>
        <Image src="/assets/logo/logo.png" width={42} height={42} alt="TabiMichi Japan" priority />
        <span>TabiMichi Japan</span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label="メニュー"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="btn nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>
          旅を相談 <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
