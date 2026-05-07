import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swipyeat.com";

interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
}

const staticRoutes: SitemapRoute[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/features", priority: 0.9, changefreq: "weekly" },
  { path: "/products", priority: 0.9, changefreq: "weekly" },
  { path: "/pricing", priority: 0.9, changefreq: "weekly" },
  { path: "/company/about", priority: 0.7, changefreq: "monthly" },
  { path: "/company/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/community", priority: 0.6, changefreq: "monthly" },
  { path: "/docs", priority: 0.6, changefreq: "monthly" },
  { path: "/status", priority: 0.5, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
  { path: "/cookies", priority: 0.3, changefreq: "yearly" },
  { path: "/security", priority: 0.3, changefreq: "yearly" },
];

function generateSiteMap() {
  const today = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
