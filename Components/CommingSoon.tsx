"use client";

import { useState, useEffect } from "react";

export default function ComingSoonPage() {
  const launchDate = new Date("2026-08-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: connect this to your backend / email service (e.g. Mailchimp, ConvertKit, or your own API route)
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-[#A89070]" style={{background:"rgb(26, 18, 8)"}}>
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo / Brand */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#A89070]">
            Sri Ram Hotel
          </h1>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#A89070]">
            We're Coming Soon
          </h2>
          <p className="text-[#A89070] text-lg md:text-xl max-w-lg mx-auto">
            We are working hard to bring something great. Stay tuned — it'll be worth the wait.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 pt-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[70px] md:min-w-[90px]"
            >
              <span className="text-2xl md:text-4xl font-bold text-[#A89070]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-[#A89070] mt-1 uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div className="pt-6 max-w-md mx-auto w-full">
          {submitted ? (
            <p className="text-[#A89070] font-medium">
              Thanks! We'll let you know when we launch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-[#A89070]/60 text-[#A89070] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors font-semibold text-white"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="pt-10 text-sm text-[#A89070]">
          &copy; {new Date().getFullYear()} Sri Ram Hotel. All rights reserved.
        </div>
      </div>
    </main>
  );
}