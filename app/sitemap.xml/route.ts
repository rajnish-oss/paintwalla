import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paintwalla.store";

const staticPages = [
  "/",
  "/services",
  "/interior-painting",
  "/exterior-painting",
  "/wood-polish",
  "/texture",
  "/waterproofing",
  "/pop",
  "/work",
];

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = staticPages
    .map((path) => {
      return `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${lastmod}</lastmod>
    </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
