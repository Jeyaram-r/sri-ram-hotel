// app/components/ClientLayout.tsx
"use client";
import { useEffect } from "react";
import Navbar from "./navbar";
import { LangProvider } from "../context/LangContext";
import { initMixpanel, trackEvent } from "../lib/mixpanel";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initMixpanel();
        // small delay to let mixpanel settle
        setTimeout(() => {
          trackEvent("App Loaded");
        }, 100);
      }, []);

  return (
    <LangProvider>
      <Navbar />
      <main style={{ paddingTop: 62 }}>{children}</main>
    </LangProvider>
  );
}