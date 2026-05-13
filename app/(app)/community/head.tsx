export const metadata = {
    title: "Community — SwipyEat",
    description: "Join the SwipyEat community: Discord, forums, and events for restaurant owners, developers, and partners to connect and share knowledge.",
    keywords: ["swipyeat","community","discord","forum","restaurant community","developer hub"],
    openGraph: {
        title: "Community — SwipyEat",
        description: "Join the SwipyEat community: Discord, forums, and events for restaurant owners, developers, and partners to connect and share knowledge.",
        url: "https://swipyeat.com/community",
        images: ["/og-image.png"],
    },
};

export default function Head() {
    return (
        <>
            <title>Community — SwipyEat</title>
            <meta name="description" content="Join the SwipyEat community: Discord, forums, and events for restaurant owners, developers, and partners to connect and share knowledge." />
            <meta name="keywords" content="swipyeat,community,discord,forum,restaurant community" />
            <meta property="og:title" content="Community — SwipyEat" />
            <meta property="og:description" content="Join the SwipyEat community: Discord, forums, and events for restaurant owners, developers, and partners to connect and share knowledge." />
            <meta property="og:image" content="/og-image.png" />
            <link rel="canonical" href="https://swipyeat.com/community" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {"@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com"},
                  {"@type": "ListItem", position: 2, name: "Community", item: "https://swipyeat.com/community"}
                ]
            }) }} />
        </>
    );
}
