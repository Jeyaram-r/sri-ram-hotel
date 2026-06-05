"use client";

import { useEffect, useState, useRef } from "react";

interface Review {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= rating ? "#C9A84C" : "#3A2A18"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, photoUri }: { name?: string; photoUri?: string }) {
  const [imgError, setImgError] = useState(false);
  const initials = name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "?";

  if (photoUri && !imgError) {
    return (
      <img
        src={photoUri}
        alt={name}
        onError={() => setImgError(true)}
        style={{
          width: 44, height: 44, borderRadius: "50%",
          objectFit: "cover", border: "2px solid rgba(201,168,76,0.3)",
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <div style={{
      width: 44, height: 44, borderRadius: "50%",
      background: "linear-gradient(135deg, #C1440E, #C9A84C)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontSize: "0.85rem", fontWeight: "bold",
      fontFamily: "Georgia, serif", flexShrink: 0,
      border: "2px solid rgba(201,168,76,0.3)",
    }}>
      {initials}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #EAE5DB",
        padding: "1.4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold accent top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3,
        background: "linear-gradient(90deg, #C1440E, #C9A84C)",
      }} />

      {/* Quote mark */}
      <div style={{
        position: "absolute", top: 12, right: 16,
        fontSize: "3.5rem", lineHeight: 1,
        color: "rgba(201,168,76,0.12)",
        fontFamily: "Georgia, serif",
        userSelect: "none",
      }}>
        "
      </div>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.9rem" }}>
        <Avatar name={review.authorAttribution?.displayName} photoUri={review.authorAttribution?.photoUri} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            margin: 0, color: "#2A1A08",
            fontSize: "0.92rem", fontWeight: "bold",
            fontFamily: "Georgia, serif",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {review.authorAttribution?.displayName || "Anonymous"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3 }}>
            <StarRating rating={review.rating} />
            <span style={{ color: "#A89070", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
              {review.relativePublishTimeDescription}
            </span>
          </div>
        </div>

        {/* Google G icon */}
        <a
          href={review.googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          title="View on Google Maps"
          style={{ flexShrink: 0, opacity: 0.5, transition: "opacity 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </a>
      </div>

      {/* Review text */}
      {review.text?.text && (
        <p style={{
          margin: 0,
          color: "#5A4A3A",
          fontSize: "0.88rem",
          lineHeight: 1.7,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
        }}>
          "{review.text.text}"
        </p>
      )}
    </div>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
    const [rating,SetRating]=useState("");
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        SetRating(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

//   const avgRating = reviews.length
//     ? (reviews.reduce((sum, r) => sum + (r.rating || 5), 0) / reviews.length).toFixed(1)
//     : "5.0";
console.log(rating,reviews,"abcd")
  return (
    <section style={{
      background: "#FAF8F4",
      padding: "4rem 1.5rem",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            color: "#C9A84C", fontSize: "0.72rem",
            letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.4rem",
          }}>
            — what our customers say —
          </p>
          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
            color: "#2A1A08", fontWeight: 400,
            margin: "0 0 1.2rem",
            fontFamily: "Georgia, serif",
          }}>
            Google Reviews
          </h2>

          {/* Rating summary */}
          {!loading && reviews.length > 0 && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "#fff", border: "1px solid #EAE5DB",
              borderRadius: 40, padding: "0.6rem 1.4rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}>
              <span style={{
                fontSize: "1.8rem", fontWeight: 400,
                color: "#2A1A08", fontFamily: "Georgia, serif",
                lineHeight: 1,
              }}>
                {rating.rating}
              </span>
              <div>
                <StarRating rating={5} />
                <p style={{ margin: "3px 0 0", color: "#8A7060", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                  {rating.userRatingCount} Google reviews
                </p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "3rem 0" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "3px solid #EAE5DB",
              borderTop: "3px solid #C9A84C",
              margin: "0 auto",
              animation: "spin 0.8s linear infinite",
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ color: "#A89070", fontSize: "0.85rem", marginTop: "1rem", fontStyle: "italic" }}>
              Loading reviews...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <p style={{ textAlign: "center", color: "#A89070", fontStyle: "italic", fontSize: "0.9rem" }}>
            Unable to load reviews right now.
          </p>
        )}

        {/* Reviews grid */}
        {!loading && !error && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.2rem",
          }}>
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        {!loading && reviews.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href="https://www.google.com/maps/place/Sri+Ram+Hotel/@8.8924676,77.4516698,19.4z/data=!4m14!1m7!3m6!1s0x3b0426a166e0c111:0x8f105a9b517c98f8!2sMuthukrishnaperi!8m2!3d8.8924281!4d77.4513602!16s%2Fg%2F1tg4zvwf!3m5!1s0x3b0427813394fb9f:0x216d62da43861f0!8m2!3d8.892384!4d77.4515445!16s%2Fg%2F11svq9v5w6?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "#C9A84C", fontSize: "0.78rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                textDecoration: "none", fontFamily: "Georgia, serif",
                border: "1px solid rgba(201,168,76,0.35)",
                borderRadius: 8, padding: "0.7rem 1.6rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              View all reviews on Google
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}