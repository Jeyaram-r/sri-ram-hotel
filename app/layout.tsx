// app/layout.tsx  — NO "use client" at the top
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../app/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sri Ram Hotel | Authentic South Indian Food in Alangulam",
    template: "%s | Sri Ram Hotel",
  },
  description: "Sri Ram Hotel in Alangulam serves hot & fresh South Indian breakfast, lunch and dinner. Idly, Dosa, Biryani, Kothu Poratta and more — at honest prices.",
  keywords: [
    "Sri Ram Hotel", "Sriram hotel mk peri", "sriram hotel kalluthu",
    "Sri Ram Hotel Alangulam", "Sri Ram Hotel Muthukrishnaperi",
    "South Indian restaurant Alangulam", "best hotel Alangulam",
    "Dosa Alangulam", "Biryani Alangulam", "family restaurant Tirunelveli",
  ],
  metadataBase: new URL("https://sri-ram-hotel.vercel.app/"),
  alternates: { canonical: "/" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Sri Ram Hotel",
              description: "Authentic South Indian restaurant serving breakfast, lunch and dinner in Alangulam.",
              url: "https://sri-ram-hotel.vercel.app/",
              telephone: "+91-6380826142",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Muthukrishnaperi",
                addressLocality: "Alangulam",
                addressRegion: "Tamil Nadu",
                postalCode: "627861",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 8.892384, longitude: 77.4515445 },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"],
                opens: "07:00", closes: "22:30",
              }],
              servesCuisine: ["South Indian", "Tamil"],
              priceRange: "₹100",
              image: "https://sri-ram-hotel.vercel.app/og-image.png",
            }),
          }}
        />
        <link
          rel="preload"
          as="image"
          href="/images/background.webp"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}