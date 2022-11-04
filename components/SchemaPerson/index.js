export default function SchemaBreadcrumbs() {
  return (
    <script
      id="schema-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "John Q. Public",
          image:
            "https://localhost/shell/images/head/shell-1071px.20220913070857.jpg",
          url: "https://localhost/shell/dummy-1/",
          sameAs: [
            "https://www.facebook.com/shell/",
            "https://www.instagram.com/shell/",
            "https://www.pinterest.com/shell/",
            "https://twitter.com/shell",
          ],
        }),
      }}
    />
  );
}
