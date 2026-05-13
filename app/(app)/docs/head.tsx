export default function Head() {
    return (
        <>
            <title>Documentation — SwipyEat</title>
            <meta name="description" content="SwipyEat documentation: guides, tutorials, and API references to help you set up menus, POS, KDS, and integrations quickly." />
            <meta name="keywords" content="swipyeat,documentation,docs,api,guide,tutorials,menu builder,pos,kds" />
            <meta property="og:title" content="Documentation — SwipyEat" />
            <meta property="og:description" content="SwipyEat documentation: guides, tutorials, and API references to help you set up menus, POS, KDS, and integrations quickly." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/docs" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Documentation", item: "https://swipyeat.com/docs"}
                ]
            }) }} />
        </>
    );
}
