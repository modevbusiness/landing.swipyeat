export default function Head() {
    return (
        <>
            <title>Help Center — SwipyEat</title>
            <meta name="description" content="SwipyEat Help Center: search the knowledge base, find troubleshooting guides, and get support for menus, POS, KDS, and more." />
            <meta name="keywords" content="swipyeat,help,help center,support,docs,knowledge base" />
            <meta property="og:title" content="Help Center — SwipyEat" />
            <meta property="og:description" content="SwipyEat Help Center: search the knowledge base, find troubleshooting guides, and get support for menus, POS, KDS, and more." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/help" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Help", item: "https://swipyeat.com/help"}
                ]
            }) }} />
        </>
    );
}
