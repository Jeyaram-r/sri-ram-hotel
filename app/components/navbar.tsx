"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "../config/navigation";
import logo1 from "../images/logo1.png";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const navKeys: Record<string, string> = {
    Home: "home", About: "about",
    Menu: "menu", Services: "services", Contact: "contact",
  };

  return (
    <>
      <style>{`
        .nav-link:hover { color: #C9A84C !important; }
        .lang-btn:hover { background: rgba(201,168,76,0.15) !important; }
        @media (min-width: 640px) {
          .desktop-links { display: flex !important; }
          .hamburger { display: none !important; }
        }
        @media (max-width: 639px) {
          .desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(26,18,8,0.97)" : "#1A1208",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 62,
        transition: "background 0.3s",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={logo1.src} alt="Sri Ram Hotel" style={{ height: 38, width: "auto", objectFit: "contain" }} />
          <span style={{ color: "#F5F0E8", fontSize: "1.1rem", fontWeight: "bold", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
            Sri Ram{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: "normal" }}>Hotel</span>
          </span>
        </a>

        {/* Desktop: links + lang toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div className="desktop-links" style={{ gap: "2rem" }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link" style={{
                color: "#A89070", fontSize: "0.78rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                textDecoration: "none", transition: "color 0.2s",
              }}>
                {t(navKeys[item.label] ?? item.label)}
              </a>
            ))}
          </div>

          {/* Language toggle — always visible */}
          <button
            className="lang-btn"
            onClick={toggleLang}
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: 6,
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "0.7rem", color: lang === "en" ? "#C9A84C" : "#6A5A4A", fontWeight: "bold", letterSpacing: "0.05em" }}>EN</span>
            <span style={{ color: "#4A3A2A", fontSize: "0.65rem" }}>|</span>
            <span style={{ fontSize: "0.7rem", color: lang === "ta" ? "#C9A84C" : "#6A5A4A", fontWeight: "bold", letterSpacing: "0.05em" }}>த</span>
          </button>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={(e) => { e.stopPropagation(); setMenuOpen((p) => !p); }}
            style={{
              background: "transparent", border: "none", cursor: "pointer",
              padding: "6px", display: "flex", flexDirection: "column",
              gap: "5px", alignItems: "center", justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 22, height: 2,
                background: "#C9A84C", borderRadius: 2,
                transition: "all 0.25s",
                transform: i === 0 && menuOpen ? "translateY(7px) rotate(45deg)"
                         : i === 2 && menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed", top: 62, left: 0, right: 0, zIndex: 99,
          background: "rgba(26,18,8,0.98)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
          overflow: "hidden",
          maxHeight: menuOpen ? `${navItems.length * 56}px` : "0px",
          transition: "max-height 0.3s ease",
        }}
      >
        {navItems.map((item, i) => (
          <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
            style={{
              display: "block", padding: "1rem 1.5rem",
              color: "#A89070", fontSize: "0.85rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: i < navItems.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
              transition: "color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#C9A84C"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#A89070"; }}
          >
            {t(navKeys[item.label] ?? item.label)}
          </Link>
        ))}
      </div>
    </>
  );
}