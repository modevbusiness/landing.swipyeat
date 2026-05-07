export default function Head() {
    return (
        <>
            <title>About — SwipyEat</title>
            <meta name="description" content="About SwipyEat: mission, team, milestones, and our commitment to building the best restaurant management platform." />
            <meta name="keywords" content="swipyeat,about,team,mission,restaurant software" />
            <meta property="og:title" content="About — SwipyEat" />
            <meta property="og:description" content="About SwipyEat: mission, team, milestones, and our commitment to building the best restaurant management platform." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/company/about" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Company", item: "https://swipyeat.com/company"},
                  {"@type": "ListItem", position: 3, name: "About", item: "https://swipyeat.com/company/about"}
                ]
            }) }} />
        </>
    );
}
