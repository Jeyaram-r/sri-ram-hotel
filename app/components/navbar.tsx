// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "../config/navigation";
import logo1 from "../images/logo1.png"
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(26,18,8,0.97)"
          : "#1A1208",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 62,
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img 
  src={logo1.src} 
  alt="Sri Ram Hotel" 
  style={{ height: 40, width: "auto", objectFit: "contain" }} 
/>
        <span
          style={{
            color: "#F5F0E8",
            fontSize: "1.15rem",
            fontWeight: "bold",
            letterSpacing: "0.04em",
          }}
        >
          Sri Ram{" "}
          <span
            style={{
              color: "#C9A84C",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            Hotel
          </span>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              color: "#A89070",
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}