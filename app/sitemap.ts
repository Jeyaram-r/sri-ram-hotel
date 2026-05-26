import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sri-ram-hotel.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://sri-ram-hotel.vercel.app/menu",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://sri-ram-hotel.vercel.app/about",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://sri-ram-hotel.vercel.app/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}