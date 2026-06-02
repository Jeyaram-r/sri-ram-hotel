// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../app/components/navbar";
import { LangProvider } from "../app/context/LangContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic
  title: {
    default: "Sri Ram Hotel | Authentic South Indian Food in Alangulam",
    template: "%s | Sri Ram Hotel",
  },
  description:
    "Sri Ram Hotel in Alangulam serves hot & fresh South Indian breakfast, lunch and dinner. Idly, Dosa, Biryani, Kothu Poratta and more — at honest prices.",

  keywords: [
    "Sri Ram Hotel",
    "Sriram hotel mk peri",
    "sriram hotel",
    "sriram hotel kalluthu",
    "Sri Ram Hotel Alangulam",
    "Sri Ram Hotel Muthukrishnaperi",
    "Sri Ram Hotel MK Peri",
    "Sri Ram Hotel Kalluthu",
    "South Indian restaurant Alangulam",
    "best hotel Alangulam",
    "Dosa Alangulam",
    "Biryani Alangulam",
    "family restaurant Tirunelveli",
    "veg hotel Alangulam",
    "breakfast lunch dinner Alangulam",
  ],

  // Canonical URL — replace with your real domain
  metadataBase: new URL("https://sri-ram-hotel.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  // Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Local business structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Sri Ram Hotel",
              description:
                "Authentic South Indian restaurant serving breakfast, lunch and dinner in Alangulam.",
              url: "https://sri-ram-hotel.vercel.app/",
              telephone: "+91-6380826142", // add your number
              address: {
                "@type": "PostalAddress",
                streetAddress: "Muthukrishnaperi",
                addressLocality: "Alangulam",
                addressRegion: "Tamil Nadu",
                postalCode: "627861",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude:  8.892384,   // update with exact coords
                longitude: 77.4515445,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"],
                  opens: "07:00",
                  closes: "22:30",
                },
              ],
              servesCuisine: ["South Indian", "Tamil"],
              priceRange: "₹100",
              image: "https://sri-ram-hotel.vercel.app/og-image.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
      <LangProvider>
          <Navbar />
          <main style={{ paddingTop: 62 }}>{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}