"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import MenuSection from "../app/menu/page";
import BackgroundImg from "../app/images/background.png";
import { useRouter } from "next/navigation";
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
    desc: "Fragrant basmati rice with tender chicken pieces",
    tag: "Dinner Favourite",
    emoji: "🍛",
    color: "#1B7C4E",
    bg: "#EDFAF3",
  },
];

const WHY_US = [
  {
    icon: "🔥",
    title: "Hot & Fresh",
    desc: "Every dish made to order, served piping hot",
  },
  {
    icon: "🌿",
    title: "Pure Ingredients",
    desc: "No compromise on quality — ever",
  },
  {
    icon: "💰",
    title: "Honest Prices",
    desc: "Great food that doesn't empty your pocket",
  },
  {
    icon: "❤️",
    title: "Made with Love",
    desc: "Recipes passed down through generations",
  },
];

const TIMINGS = [
  { meal: "Breakfast", time: "7:00 AM – 11:00 AM", color: "#C1440E" },
  { meal: "Lunch", time: "12:00 PM – 3:30 PM", color: "#1B7C4E" },
  { meal: "Dinner", time: "7:00 PM – 10:30 PM", color: "#3A1F6E" },
];

export default function Home() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#FAF8F4",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
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
        .special-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.10); }
        .why-card:hover { background: #fff; }
        .cta-btn:hover { opacity: 0.88; transform: scale(1.03); }
        .nav-link:hover { color: #C9A84C !important; }
      `}</style>

      {/* Navbar */}
      {/* <Navbar/> */}

      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "5rem 2rem 4.5rem",
          textAlign: "center",

          backgroundImage: `
      linear-gradient(rgba(26,18,8,0.72), rgba(26,18,8,0.72)),
      url(${BackgroundImg.src})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* subtle background pattern */}
        {/* <div style={{
          position: "absolute", inset: 0,
          
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(193,68,14,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} /> */}
        <div style={{ position: "relative", maxWidth: 680, margin: "0 auto" }}>
          <p
            className={`fade-up d1`}
            style={{
              color: "#C9A84C",
              fontSize: "0.72rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Welcome to
          </p>
          <h1
            className={`fade-up d2`}
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: "0 0 0.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Sri Ram Hotel
          </h1>
          <div
            className={`fade-up d2`}
            style={{
              width: 60,
              height: 1.5,
              background: "#C9A84C",
              margin: "1.2rem auto",
            }}
          />
          <p
            className={`fade-up d3`}
            style={{
              color: "#B09070",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Small place, big taste. Simple food cooked with heart —<br />
            the way it's always been done.
          </p>
          <div
            className={`fade-up d4`}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="cta-btn"
              style={{
                background: "#C1440E",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.85rem 2.2rem",
                fontSize: "0.82rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontWeight: "bold",
                transition: "all 0.2s",
              }}
              onClick={() => {
                
                // setTimeout(() => {
                //   const el = document.getElementById("menu");
                //   if (el) {
                //     const top = el.getBoundingClientRect().top + window.scrollY - 70;
                //     window.scrollTo({ top, behavior: "smooth" });
                //   }
                // }, 50);
              }}

            >
              View Menu
            </button>
            <button
              className="cta-btn"
              style={{
                background: "transparent",
                color: "#C9A84C",
                border: "1.5px solid #C9A84C",
                borderRadius: 8,
                padding: "0.85rem 2.2rem",
                fontSize: "0.82rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                transition: "all 0.2s",
              }}
            >
              Our Timings
            </button>
          </div>
        </div>

        {/* floating food emojis */}
        {["🍛", "🥞", "🍳", "☕"].map((e, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              fontSize: "2rem",
              opacity: 0.18,
              animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              top: `${20 + (i % 2) * 40}%`,
              left: i < 2 ? `${5 + i * 6}%` : `${85 + (i - 2) * 6}%`,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {e}
          </span>
        ))}
      </section>

      {/* Today's Specials */}
      <section
        style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem 2rem" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}
          >
            — what we're known for —
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#2A1A08",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Today's Specials
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SPECIALS.map((s, i) => (
            <div
              key={i}
              className="special-card"
              style={{
                background: "#fff",
                border: "1px solid #EAE5DB",
                borderRadius: 14,
                padding: "1.5rem 1.4rem",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 12,
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                }}
              >
                {s.emoji}
              </div>
              <span
                style={{
                  display: "inline-block",
                  background: s.bg,
                  color: s.color,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginBottom: "0.6rem",
                }}
              >
                {s.tag}
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: "#2A1A08",
                  margin: "0 0 0.4rem",
                  fontWeight: 400,
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  fontSize: "0.87rem",
                  color: "#8A7060",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section
        style={{
          background: "#1A1208",
          margin: "3rem 0 0",
          padding: "3.5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              color: "#C9A84C",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Why people love us
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {WHY_US.map((w, i) => (
              <div
                key={i}
                className="why-card"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 12,
                  padding: "1.4rem 1.2rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>
                  {w.icon}
                </div>
                <h4
                  style={{
                    color: "#F5F0E8",
                    fontSize: "0.95rem",
                    margin: "0 0 0.35rem",
                    fontWeight: 400,
                  }}
                >
                  {w.title}
                </h4>
                <p
                  style={{
                    color: "#7A6A58",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      {/* Timings */}
      <section
        style={{ maxWidth: 700, margin: "0 auto", padding: "4rem 1.5rem 2rem" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              color: "#2A1A08",
              fontWeight: 400,
              margin: 0,
            }}
          >
            We're Open
          </h2>
          <div
            style={{
              width: 40,
              height: 1.5,
              background: "#C9A84C",
              margin: "0.75rem auto 0",
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {TIMINGS.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #EAE5DB",
                borderRadius: 10,
                padding: "1rem 1.4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderLeft: `4px solid ${t.color}`,
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#2A1A08",
                  fontSize: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                {t.meal}
              </span>
              <span
                style={{
                  color: "#7A6A58",
                  fontSize: "0.88rem",
                  fontStyle: "italic",
                }}
              >
                {t.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1A1208",
          padding: "2.5rem 2rem",
          textAlign: "center",
          marginTop: "3rem",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>🏮</div>
        <p
          style={{
            color: "#F5F0E8",
            fontSize: "1rem",
            margin: "0 0 0.25rem",
            letterSpacing: "0.05em",
          }}
        >
          Sri Ram Hotel
        </p>
        <p
          style={{
            color: "#5A4A38",
            fontSize: "0.78rem",
            margin: 0,
            letterSpacing: "0.08em",
          }}
        >
          Tiruchirappalli · Open 7 days a week
        </p>
        <div
          style={{
            width: 40,
            height: 1,
            background: "#C9A84C",
            margin: "1rem auto",
          }}
        />
        <p
          style={{
            color: "#5A4A38",
            fontSize: "0.72rem",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          © 2025 Sri Ram Hotel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
