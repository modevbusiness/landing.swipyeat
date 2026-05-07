export default function Head() {
    return (
        <>
            <title>Features — SwipyEat | Restaurant Management</title>
            <meta name="description" content="Explore SwipyEat features: digital menus, online ordering, KDS, POS, analytics, and more — everything restaurants need to run efficiently." />
            <meta name="keywords" content="swipyeat,features,digital menu,online ordering,KDS,POS,restaurant analytics" />
            <meta property="og:title" content="Features — SwipyEat" />
            <meta property="og:description" content="Explore SwipyEat features: digital menus, online ordering, KDS, POS, analytics, and more — everything restaurants need to run efficiently." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/features" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Features", item: "https://swipyeat.com/features"}
                ]
            }) }} />
        </>
    );
}
