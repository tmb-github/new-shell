export default function SchemaBreadcrumbs() {
  return (
    <script
      id="schema-web-page"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          description: "Shell application: a sample SPA.",
          name: "John Q. Public",
          url: "https://shell.com/",
          dateModified: "2022-10-30T16:43:58+00:00",
        }),
      }}
    />
  );
}
