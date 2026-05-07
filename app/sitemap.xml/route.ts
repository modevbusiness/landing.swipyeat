import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swipyeat.com";

const staticRoutes = [
  "/",
  "/community",
  "/company/about",
  "/company/contact",
  "/cookies",
  "/dashboard",
  "/docs",
  "/features",
  "/help",
  "/pricing",
  "/privacy",
  "/products",
  "/security",
  "/status",
  "/terms",
  "/auth/get-started",
  "/auth/onboarding",
  "/auth/onboarding/success",
  "/auth/redirect",
  "/auth/sign-in",
  "/auth/sign-up",
  "/invite/expired",
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticRoutes
    .map(
      (route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
