"use client";
import { useEffect, useRef, useState } from "react";
import OwnerImg from "../../public/WhatsApp Image 2026-06-01 at 12.26.05 PM.jpeg"

const MILESTONES = [
  { year: "2013", title: "The Beginning", desc: "Sri Ram Hotel opened its doors in MuthuKrishnaperi, Alangulam — a humble kitchen with a big dream to serve honest, homestyle South Indian food." },
  { year: "2015", title: "Growing Reputation", desc: "Word spread across the neighbourhood. Regulars came every morning for idly and dosa, and the lunch crowd grew steadily with biriyani and kothu poratta." },
  {
    year: "2020",
    title: "Serving Through the Pandemic",
    desc: "During the challenging COVID-19 pandemic, Sri Ram Hotel remained committed to serving fresh, hygienic meals to the community. While many faced uncertainty, the hotel continued to support families, frontline workers, and travelers with safe and reliable food service, becoming a symbol of care and resilience during difficult times."
  },
  { year: "2023", title: "A Decade of Flavour", desc: "Ten years of serving the community — thousands of meals, countless loyal customers, and the same dedication to fresh, affordable South Indian cooking." },
  { year: "2026", title: "Still Going Strong", desc: "Over a decade later, Sri Ram Hotel continues to serve the same heart-made food that started it all. The kitchen is busier than ever." },
];

const VALUES = [
  { icon: "🌅", title: "Fresh Every Day", desc: "We prepare everything fresh each morning. No shortcuts, no leftovers served the next day." },
  { icon: "🤝", title: "Community First", desc: "We've grown alongside our neighbours. Every customer is treated like family — because many of them are." },
  { icon: "🍃", title: "Simple & Pure", desc: "No fancy additives or shortcuts. Just clean ingredients, traditional recipes, and honest cooking." },
  { icon: "💛", title: "Affordable Always", desc: "Good food should be for everyone. We've kept our prices fair since day one and always will." },
];

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

export default function About() {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAF8F4", minHeight: "100vh" }}>
      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-title { animation: heroFade 0.8s ease 0.1s forwards; opacity: 0; }
        .hero-sub { animation: heroFade 0.8s ease 0.3s forwards; opacity: 0; }
        .hero-divider { animation: heroFade 0.8s ease 0.25s forwards; opacity: 0; }
        .milestone-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #C9A84C 10%, #C9A84C 90%, transparent);
          transform: translateX(-50%);
        }
        @media (max-width: 640px) {
          .milestone-line::before { left: 20px; }
          .milestone-row { flex-direction: column !important; }
          .milestone-year-col { width: auto !important; text-align: left !important; padding-right: 0 !important; padding-left: 3rem !important; }
          .milestone-content-col { padding-left: 3rem !important; padding-right: 0 !important; text-align: left !important; }
          .milestone-dot { left: 20px !important; transform: translateX(-50%) !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .owner-section { flex-direction: column !important; text-align: center !important; }
          .owner-badge { margin: 0 auto !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: "#1A1208",
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 60%, rgba(193,68,14,0.1) 0%, transparent 55%), radial-gradient(circle at 75% 30%, rgba(201,168,76,0.07) 0%, transparent 50%)",
        }} />
        <div style={{ position: "relative", maxWidth: 680, margin: "0 auto" }}>
          <p className="hero-sub" style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Our Story
          </p>
          <h1 className="hero-title" style={{
            color: "#F5F0E8", fontSize: "clamp(2.2rem, 7vw, 4rem)",
            fontWeight: 400, margin: "0 0 0.5rem", lineHeight: 1.1, letterSpacing: "0.02em",
          }}>
            About Us
          </h1>
          <div className="hero-divider" style={{ width: 60, height: 1.5, background: "#C9A84C", margin: "1.2rem auto" }} />
          <p className="hero-sub" style={{
            color: "#B09070", fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
            fontStyle: "italic", lineHeight: 1.8, margin: 0,
          }}>
            More than a decade of serving the community —<br />
            one plate at a time.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "4.5rem 1.5rem 2rem" }}>
        <FadeIn>
          <div className="owner-section" style={{
            display: "flex", alignItems: "center", gap: "2.5rem",
            background: "#fff", borderRadius: 16,
            border: "1px solid #EAE5DB",
            padding: "2.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}>
            {/* <div className="owner-badge" style={{
              width: 110, height: 110, borderRadius: "50%",
              background: "linear-gradient(135deg, #C1440E, #C9A84C)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "3rem", flexShrink: 0,
            }}>
              👨‍🍳
            </div> */}
            <img alt="Owner" src={OwnerImg.src} height={"200px"} width={"150px"} />
            <div>
              <p style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 0.4rem" }}>
                Founder & Owner
              </p>
              <h2 style={{ color: "#2A1A08", fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 400, margin: "0 0 0.75rem" }}>
                Ravichandran P
              </h2>
              <p style={{ color: "#6A5A4A", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
                With a passion for authentic South Indian flavours and a belief that good food should be
                accessible to everyone, Ravichandran P founded Sri Ram Hotel in 2013. Starting from scratch
                in MuthuKrishnaperi, he built the hotel on three principles — freshness, honesty, and heart.
                Over a decade later, he continues to oversee every aspect of the kitchen, ensuring every dish
                served carries the same love and care it always has.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Our Values */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              What drives us
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#2A1A08", fontWeight: 400, margin: 0 }}>
              Our Values
            </h2>
          </div>
        </FadeIn>
        <div className="values-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.1rem",
        }}>
          {VALUES.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background: "#fff", border: "1px solid #EAE5DB",
                borderRadius: 14, padding: "1.5rem 1.3rem",
                borderTop: "3px solid #C9A84C",
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ color: "#2A1A08", fontSize: "1rem", fontWeight: 400, margin: "0 0 0.4rem" }}>{v.title}</h3>
                <p style={{ color: "#8A7060", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#1A1208", padding: "4rem 1.5rem 4.5rem", marginTop: "2rem" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              Since 2013
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#F5F0E8", fontWeight: 400, margin: 0 }}>
              Our Journey
            </h2>
          </div>
        </FadeIn>

        <div className="milestone-line" style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          {MILESTONES.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="milestone-row" style={{
                display: "flex", alignItems: "flex-start",
                marginBottom: i < MILESTONES.length - 1 ? "2.5rem" : 0,
                position: "relative",
              }}>
                {/* Year */}
                <div className="milestone-year-col" style={{
                  width: "45%", textAlign: "right", paddingRight: "2.5rem",
                  paddingTop: "0.15rem",
                }}>
                  {i % 2 === 0 && (
                    <span style={{ color: "#C9A84C", fontSize: "1.4rem", fontWeight: 400, letterSpacing: "0.05em" }}>
                      {m.year}
                    </span>
                  )}
                </div>

                {/* Dot */}
                <div className="milestone-dot" style={{
                  position: "absolute", left: "50%",
                  transform: "translateX(-50%)",
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#C9A84C",
                  border: "2px solid #1A1208",
                  zIndex: 1, marginTop: "0.3rem",
                  boxShadow: "0 0 0 4px rgba(201,168,76,0.2)",
                }} />

                {/* Content */}
                <div className="milestone-content-col" style={{
                  width: "55%", paddingLeft: "2.5rem",
                }}>
                  {i % 2 === 0 ? (
                    <>
                      <h3 style={{ color: "#ffd8ad", fontSize: "1rem", fontWeight: 400, margin: "0 0 0.4rem" }}>{m.title}</h3>
                      <p style={{ color: "#F5F0E8", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                    </>
                  ) : (
                    <span style={{ color: "#C9A84C", fontSize: "1.4rem", fontWeight: 400, letterSpacing: "0.05em" }}>
                      {m.year}
                    </span>
                  )}
                </div>
              </div>

              {/* Odd rows: flip sides */}
              {i % 2 !== 0 && (
                <div className="milestone-row" style={{
                  display: "flex", alignItems: "flex-start",
                  marginBottom: "2.5rem",
                  marginTop: "-2.5rem",
                  position: "relative",
                }}>
                  <div className="milestone-year-col" style={{ width: "45%", textAlign: "right", paddingRight: "2.5rem", paddingTop: "0.15rem" }}>
                    <h3 style={{ color: "#ffd8ad", fontSize: "1rem", fontWeight: 400, margin: "0 0 0.4rem" }}>{m.title}</h3>
                    <p style={{ color: "#F5F0E8", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                  </div>
                  <div style={{ width: "55%" }} />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
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

      {/* Footer strip */}
      <div style={{
        background: "#1A1208", padding: "1.5rem 2rem",
        textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.15)",
      }}>
        <p style={{ color: "#5A4A38", fontSize: "0.75rem", letterSpacing: "0.08em", margin: 0 }}>
          Sri Ram Hotel · MuthuKrishnaperi, Alangulam · Open 7 days a week
        </p>
      </div>
    </div>
  );
}