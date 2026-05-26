"use client";
import { useState } from "react";
import { hotelMenu } from "../config/menu";
// const hotelMenu = [
//   {
//     mealType: "Breakfast",
//     mealT
// ypeImg: breakfast,
//     time: "7:00 AM – 11:00 AM",
//     accent: "#C1440E",
//     accentLight: "#FFF3EE",
//     categories: [
//       {
//         title: "Main Dish",
//         items: [
//           { name: "Idly", price: 7 },
//           { name: "Dosa", price: 10 },
//           { name: "Appam", price: 10 },
//           { name: "Poori", price: 10 },
//           { name: "Special Dosa", price: 20 },
//           { name: "Egg Dosa", price: 30 },
//         ],
//       },
//       {
//         title: "Curry",
//         items: [
//           { name: "Kadala Curry", price: 15 },
//           { name: "Kilangu Curry", price: 15 },
//         ],
//       },
//       {
//         title: "Side Dishes",
//         items: [
//           { name: "Omelette", price: 15 },
//           { name: "Vadai", price: 10 },
//         ],
//       },
//     ],
//   },
//   {
//     mealType: "Lunch",
//     mealTypeImg: lunch,
//     time: "12:00 PM – 3:30 PM",
//     accent: "#1B7C4E",
//     accentLight: "#EDFAF3",
//     categories: [
//       {
//         title: "Main Dish",
//         items: [
//           { name: "Poratta", price: 10 },
//           { name: "Egg Briyani", price: 50 },
//           { name: "Empty Briyani", price: 40 },
//           { name: "Kothu Poratta", price: 70 },
//         ],
//       },
//       {
//         title: "Curry",
//         items: [
//           { name: "Egg Curry", price: 20 },
//           { name: "Chicken Curry", price: 60 },
//         ],
//       },
//       {
//         title: "Side Dishes",
//         items: [
//           { name: "Omelette", price: 15 },
//           { name: "Egg Fry", price: 40 },
//           { name: "Chicken Fry", price: 70 },
//         ],
//       },
//     ],
//   },
//   {
//     mealType: "Dinner",
//     mealTypeImg: dinner,
//     time: "7:00 PM – 10:30 PM",
//     accent: "#3A1F6E",
//     accentLight: "#F4F0FF",
//     categories: [
//       {
//         title: "Main Dish",
//         items: [
//           { name: "Idly", price: 7 },
//           { name: "Dosa", price: 7 },
//           { name: "Chappathi", price: 10 },
//           { name: "Special Dosa", price: 20 },
//           { name: "Egg Dosa", price: 30 },
//           { name: "Poratta", price: 10 },
//         ],
//       },
//       {
//         title: "Curry",
//         items: [
//           { name: "Kuruma", price: 0 },
//         ],
//       },
//       {
//         title: "Side Dishes",
//         items: [
//           { name: "Omelette", price: 15 },
//           { name: "Egg Fry", price: 40 },
//         ],
//       },
//     ],
//   },
// ];

export default function Menu() {
  const [activeSection, setActiveSection] = useState(0);
  const section = hotelMenu[activeSection];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF8F4",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#1A1208",
          padding: "2.5rem 2rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 80px)",
          }}
        />
        <p
          style={{
            color: "#C9A84C",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            fontFamily: "'Georgia', serif",
          }}
        >
          Established 2010
        </p>
        <h1
          style={{
            color: "#F5F0E8",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: "400",
            letterSpacing: "0.05em",
            margin: "0 0 0.4rem",
            lineHeight: 1.1,
          }}
        >
          Our Menu
        </h1>
        <div
          style={{
            width: 60,
            height: 1,
            background: "#C9A84C",
            margin: "0.75rem auto",
          }}
        />
        <p
          style={{
            color: "#A89070",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            fontStyle: "italic",
          }}
        >
          Fresh · Flavourful · Crafted with love
        </p>
      </header>

      {/* Meal type tabs */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          background: "#fff",
          borderBottom: "1px solid #EAE5DB",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {hotelMenu.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            style={{
              padding: "1.1rem 2.5rem",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "'Georgia', serif",
              fontWeight: activeSection === i ? "bold" : "normal",
              color: "#8A7B6A",
              borderBottom:  "2.5px solid transparent",
              transition: "all 0.2s",
              marginBottom: -1,
            }}
          >
            {s.mealType}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* Hero image + title */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: "2.5rem",
            position: "relative",
            height: 280,
          }}
        >
          <img
            src={section.mealTypeImg}
            alt={section.mealType}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "1.5rem 2rem",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "0.04em",
              }}
            >
              {section.mealType}
            </h2>
            
          </div>
        </div>

        {/* Category grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {section.categories.map((cat, ci) => (
            <div
              key={ci}
              style={{
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #EAE5DB",
                overflow: "hidden",
              }}
            >
              {/* Category header */}
              <div
                style={{
                 
                  padding: "0.85rem 1.25rem",
                  
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                   
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                   
                    fontFamily: "'Georgia', serif",
                    fontWeight: "bold",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Items */}
              <div style={{ padding: "0.5rem 0" }}>
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.65rem 1.25rem",
                      borderBottom:
                        ii < cat.items.length - 1 ? "1px solid #F4F0EA" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#2A1F0F",
                        fontFamily: "'Georgia', serif",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        color: "#8A7B6A",
                        fontFamily: "Georgia, serif",
                        minWidth: 48,
                        textAlign: "right",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.price === 0 ? "Complimentary" : `₹ ${item.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            color: "#A89070",
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            fontStyle: "italic",
          }}
        >
          All prices are in Indian Rupees (₹) · Taxes included
        </p>
      </main>
    </div>
  );
}