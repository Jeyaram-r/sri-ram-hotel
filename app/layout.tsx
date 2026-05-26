// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../app/components/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sri Ram Hotel | Best Hotel in Alangulam",
  description:
    "Sri Ram Hotel offers authentic South Indian breakfast, meals, dosa, biryani, and family dining experience.",
  keywords: [
    "Sri Ram Hotel",
    "Sri Ram Hotel Muthukrishnaperi",
    "Sri Ram Hotel Mk peri",
    "Sri ram Hotel Kalluthu",
    "South Indian Hotel",
    "Restaurant",
    "Veg Hotel",
    "Family Restaurant",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}