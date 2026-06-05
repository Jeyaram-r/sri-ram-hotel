"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import MenuSection from "../app/menu/page";
import BackgroundImg from "../app/images/background.png";
import logo1 from "../app/images/logo1.png";
import About from "./about/page";
import { useLang } from "../app/context/LangContext";
import { trackEvent, trackPageView } from "../app/lib/mixpanel";
import GoogleReviews from "./components/GoogleReviews";
// inside the component:

const SPECIALS = [
  {
    name: "Masala Dosa",
    desc: "Crispy golden dosa with spiced potato filling",
    tag: "Breakfast Special",
    emoji: "🥞",
    color: "#C1440E",
    bg: "#FFF3EE",
  },
  {
    name: "Kothu Poratta",
    desc: "Flaky poratta tossed with egg, spices & onions",
    tag: "Must Try",
    emoji: "🍳",
    color: "#3A1F6E",
    bg: "#F4F0FF",
  },
  {
    name: "Chappathi + Kuruma",
    desc: "Soft chappathi served with flavourful kuruma",
    tag: "Dinner Favourite",
    emoji: "🍛",
    color: "#1B7C4E",
    bg: "#EDFAF3",
  },
];

const WHY_US = [
  { icon: "🔥", title: "Hot & Fresh", desc: "Every dish made to order, served piping hot" },
  { icon: "🌿", title: "Pure Ingredients", desc: "No compromise on quality — ever" },
  { icon: "💰", title: "Honest Prices", desc: "Great food that doesn't empty your pocket" },
  { icon: "❤️", title: "Made with Love", desc: "Recipes passed down through generations" },
];

const TIMINGS = [
  { meal: "Breakfast", time: "7:00 AM – 11:00 AM", color: "#C1440E" },
  { meal: "Lunch", time: "12:00 PM – 3:30 PM", color: "#1B7C4E" },
  { meal: "Dinner", time: "7:00 PM – 10:30 PM", color: "#3A1F6E" },
];

export default function Home() {
  
  const menuRef = useRef<HTMLElement>(null);
  const timingsRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    trackPageView("Home");
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return { ref, inView };
  }
  function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { ref, inView } = useInView();
    return (
      <div ref={ref} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAF8F4", minHeight: "100vh" }}>
      <style>{`
      * { box-sizing: border-box; }
html, body { overflow-x: hidden; max-width: 100%; }
      .hero-logo-mobile { display: none; }
@media (max-width: 639px) {
  .hero-logo-mobile { display: block; margin: 0 auto 1.5rem; }
}
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .special-card { transition: transform 0.25s, box-shadow 0.25s; }
        .special-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.10); }
        .why-card:hover { background: rgba(255,255,255,0.09) !important; }
        .cta-btn { transition: all 0.2s; }
        .cta-btn:hover { opacity: 0.88; transform: scale(1.03); }
        .cta-btn:active { transform: scale(0.97); }

        /* Mobile overrides */
        @media (max-width: 600px) {
          .hero-section {
            padding: 3.5rem 1.2rem 3rem !important;
            min-height: 92vh !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }
          .hero-buttons button {
            width: 100% !important;
            max-width: 300px !important;
          }
          .specials-grid {
            grid-template-columns: 1fr !important;
          }
          .why-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .timings-section {
            padding: 3rem 1rem 2rem !important;
          }
          .footer-logo {
            height: 50px !important;
          }
          .float-emoji {
            display: none !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .specials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section
        id="#hero"
        className="hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "5rem 2rem 4.5rem",
          textAlign: "center",
          backgroundImage: `linear-gradient(rgba(26,18,8,0.72), rgba(26,18,8,0.72)), url(${BackgroundImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", maxWidth: 680, margin: "0 auto", width: "100%" }}>
                  <img
            src={logo1.src}
            alt="Sri Ram Hotel"
            className="hero-logo-mobile"
            style={{ height: 70, width: "auto", objectFit: "contain", marginBottom: "1.5rem" }}
          />
          <p className="fade-up d1" style={{
            color: "#C9A84C", fontSize: "0.72rem",
            letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem",
          }}>
           
            {t("hero.welcome")}
          </p>
          <h1 className="fade-up d2" style={{
            color: "#F5F0E8",
            fontSize: "clamp(2.2rem, 8vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1,
            margin: "0 0 0.5rem", letterSpacing: "0.02em",
          }}>
            {t("hero.name")}
          </h1>
          <div className="fade-up d2" style={{ width: 60, height: 1.5, background: "#C9A84C", margin: "1.2rem auto" }} />
          <p className="fade-up d3" style={{
            color: "#B09070",
            fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            fontStyle: "italic", lineHeight: 1.7, marginBottom: "2rem",
            padding: "0 0.5rem",
          }}>
            {t("hero.tagline")}
          </p>
          <div className="fade-up d4 hero-buttons" style={{
            display: "flex", gap: "1rem",
            justifyContent: "center", flexWrap: "wrap",
          }}>
            <a href="#menu" onClick={() => trackEvent("View Menu Clicked", { source: "hero" })}
            style={{
            display: "inline-block",
            background: "#C1440E", color: "#fff",
            borderRadius: 8, padding: "0.9rem 2.4rem",
            fontSize: "0.82rem", letterSpacing: "0.15em",
            textTransform: "uppercase", textDecoration: "none",
            fontFamily: "Georgia, serif", fontWeight: "bold",
            transition: "opacity 0.2s",
          }}>
            {t("hero.viewmenu")}
          </a>
          <a href="#timing" onClick={() => trackEvent("Timings Clicked", { source: "hero" })}
              className="cta-btn"
              style={{
                background: "transparent", color: "#C9A84C",
                border: "1.5px solid #C9A84C", borderRadius: 8,
                padding: "0.9rem 2.2rem",
                fontSize: "0.82rem", letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: "pointer",
                fontFamily: "Georgia, serif",
              }}
              
            >
              {t("hero.timings")}
            </a>
          </div>
        </div>

        {["🍛", "🥞", "🍳", "☕"].map((e, i) => (
          <span key={i} className="float-emoji" style={{
            position: "absolute", fontSize: "2rem", opacity: 0.18,
            animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
            top: `${20 + (i % 2) * 40}%`,
            left: i < 2 ? `${5 + i * 6}%` : `${85 + (i - 2) * 6}%`,
            pointerEvents: "none", userSelect: "none",
          }}>{e}</span>
        ))}
      </section>

      {/* Today's Specials */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.2rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
            {/* — what we're known for — */}
            {t("specials.label")}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#2A1A08", fontWeight: 400, margin: 0 }}>
            {/* Today's Specials */}
            {t("specials.title")}
          </h2>
        </div>
        <div className="specials-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}>
          {SPECIALS.map((s, i) => (
            <div key={i} className="special-card"
            onClick={() => trackEvent("Special Card Clicked", { item: s.name })}
            style={{
              background: "#fff", border: "1px solid #EAE5DB",
              borderRadius: 14, padding: "1.4rem",
            }}>
              <div style={{
                width: 50, height: 50, borderRadius: 12, background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.7rem", marginBottom: "0.9rem",
              }}>
                {s.emoji}
              </div>
              <span style={{
                display: "inline-block", background: s.bg, color: s.color,
                fontSize: "0.63rem", letterSpacing: "0.18em",
                textTransform: "uppercase", fontWeight: "bold",
                padding: "3px 10px", borderRadius: 20, marginBottom: "0.6rem",
              }}>
                {s.tag}
              </span>
              <h3 style={{ fontSize: "1.05rem", color: "#2A1A08", margin: "0 0 0.35rem", fontWeight: 400 }}>
                {s.name}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#8A7060", lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
        <FadeIn>
          <p style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Come visit us
          </p>
          <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#2A1A08", fontWeight: 400, margin: "0 0 1rem" }}>
            We'd love to feed you
          </h2>
          <p style={{ color: "#8A7060", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 2rem", fontStyle: "italic" }}>
            Whether it's your first visit or your hundredth, you'll always find a warm meal and a
            welcoming table at Sri Ram Hotel.
          </p>
          <a href="/menu" style={{
            display: "inline-block",
            background: "#C1440E", color: "#fff",
            borderRadius: 8, padding: "0.9rem 2.4rem",
            fontSize: "0.82rem", letterSpacing: "0.15em",
            textTransform: "uppercase", textDecoration: "none",
            fontFamily: "Georgia, serif", fontWeight: "bold",
            transition: "opacity 0.2s",
          }}>
            View Our Menu
          </a>
        </FadeIn>
      </section>

      {/* Why Us */}
      <section style={{ background: "#1A1208", margin: "3rem 0 0", padding: "3.5rem 1.2rem" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{
            textAlign: "center", color: "#C9A84C",
            fontSize: "0.72rem", letterSpacing: "0.3em",
            textTransform: "uppercase", marginBottom: "2rem",
          }}>
            Why people love us
          </p>
          <div className="why-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}>
            {WHY_US.map((w, i) => (
              <div key={i} className="why-card" style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 12, padding: "1.3rem 1.1rem",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "background 0.2s",
              }}>
                <div style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}>{w.icon}</div>
                <h4 style={{ color: "#F5F0E8", fontSize: "0.92rem", margin: "0 0 0.3rem", fontWeight: 400 }}>
                  {w.title}
                </h4>
                <p style={{ color: "#7A6A58", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section>
        <About/>
      </section>
      <section>
        <GoogleReviews/>
      </section>
      {/* Menu */}
      <section ref={menuRef} id="menu">
        <MenuSection />
      </section>
      

      {/* Timings */}
      <section id="timing" ref={timingsRef} className="timings-section" style={{ maxWidth: 700, margin: "0 auto", padding: "4rem 1.2rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 2rem)", color: "#2A1A08", fontWeight: 400, margin: 0 }}>
            We're Open
          </h2>
          <div style={{ width: 40, height: 1.5, background: "#C9A84C", margin: "0.75rem auto 0" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {TIMINGS.map((t, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid #EAE5DB",
              borderRadius: 10, padding: "1rem 1.2rem",
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              borderLeft: `4px solid ${t.color}`,
            }}>
              <span style={{ fontWeight: "bold", color: "#2A1A08", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
                {t.meal}
              </span>
              <span style={{ color: "#7A6A58", fontSize: "clamp(0.78rem, 2.5vw, 0.88rem)", fontStyle: "italic" }}>
                {t.time}
              </span>
            </div>
          ))}
          <span style={{ color: "#7A6A58", fontSize: "clamp(0.78rem, 2.5vw, 0.88rem)", fontStyle: "italic" }}>
                {"Thursday Leave *"}
              </span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#1A1208", padding: "2.5rem 1.5rem",
        textAlign: "center", marginTop: "3rem",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}>
        <img
          src={logo1.src}
          alt="Sri Ram Hotel"
          className="footer-logo"
          style={{ height: 60, width: "100%", objectFit: "contain", marginBottom: "0.75rem" }}
        />
        <p style={{ color: "#F5F0E8", fontSize: "1rem", margin: "0 0 0.25rem", letterSpacing: "0.05em" }}>
          Sri Ram Hotel
        </p>
        <p style={{ color: "#ffff", fontSize: "0.78rem", margin: 0, letterSpacing: "0.08em" }}>
          MuthuKrishnaperi · Open 6 days a week
        </p>
        <div style={{ width: 40, height: 1, background: "#C9A84C", margin: "1rem auto" }} />
        <p style={{ color: "#5A4A38", fontSize: "0.72rem", letterSpacing: "0.05em", margin: 0 }}>
          © 2026 Sri Ram Hotel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}