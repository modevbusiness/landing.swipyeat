export default function Head() {
  return (
    <>
      <title>SwipyEat — AI Restaurant Management Platform</title>
      <meta name="description" content="SwipyEat is an all-in-one AI-powered restaurant management platform: menus, POS, KDS, inventory, staff management, and analytics." />
      <meta name="keywords" content="swipyeat,restaurant management,restaurant pos,kds,online ordering,restaurant analytics" />
      <meta property="og:title" content="SwipyEat — AI Restaurant Management Platform" />
      <meta property="og:description" content="SwipyEat is an all-in-one AI-powered restaurant management platform: menus, POS, KDS, inventory, staff management, and analytics." />
      <meta property="og:image" content="/og-image.png" />
      <link rel="canonical" href="https://swipyeat.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://swipyeat.com/#organization",
            name: "SwipyEat",
            url: "https://swipyeat.com",
            logo: "https://swipyeat.com/logo.svg",
            sameAs: [
              "https://twitter.com/swipyeat",
              "https://github.com/swipyeat",
              "https://www.linkedin.com/company/swipyeat"
            ],
            contactPoint: [{
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer support",
              areaServed: "Worldwide",
            }]
          },
          {
            "@type": "WebSite",
            "@id": "https://swipyeat.com/#website",
            url: "https://swipyeat.com",
            name: "SwipyEat",
            publisher: { "@id": "https://swipyeat.com/#organization" },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://swipyeat.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }) }} />
    </>
  );
}
