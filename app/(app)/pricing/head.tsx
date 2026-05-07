export default function Head() {
    return (
        <>
            <title>Pricing — SwipyEat</title>
            <meta name="description" content="Simple, transparent pricing for restaurants of all sizes. Start a free 14-day trial of SwipyEat — no credit card required." />
            <meta name="keywords" content="swipyeat,pricing,plans,restaurant pricing,subscription" />
            <meta property="og:title" content="Pricing — SwipyEat" />
            <meta property="og:description" content="Simple, transparent pricing for restaurants of all sizes. Start a free 14-day trial of SwipyEat — no credit card required." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/pricing" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Pricing", item: "https://swipyeat.com/pricing"}
                ]
            }) }} />
        </>
    );
}
