export default function SchemaBreadcrumbs({ breadcrumbArray }) {
  const itemListElement = breadcrumbArray.map(function (schema, index) {
    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        "@id": schema.id,
        name: schema.name,
        image: {
          "@type": "ImageObject",
          url: schema.imgUrl,
          width: "115",
          height: "35",
        },
      },
    };
  });

  return (
    <script
      type="application/ld+json"
      id="breadcrumb-list"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          description: "Breadcrumbs list",
          name: "Breadcrumbs",
          itemListElement: itemListElement,
        }),
      }}
    />
  );
}
