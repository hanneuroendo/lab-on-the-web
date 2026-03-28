import { Helmet } from "react-helmet-async";

const SITE_NAME = "Han Lab";
const BASE_URL = "https://www.hanneuroendo.org";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION =
  "Our research investigates how neural circuit dynamics and plasticity orchestrate complex hormone pattern generation across sex differences, postnatal development, and in neuroendocrine disorders.";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Han Lab",
  url: BASE_URL,
  description: DEFAULT_DESCRIPTION,
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "University of St Andrews",
    url: "https://www.st-andrews.ac.uk",
  },
  department: {
    "@type": "Organization",
    name: "School of Psychology & Neuroscience",
  },
};

export function SEO({ title, description, url, image, jsonLd }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · Neuroendocrinology · University of St Andrews`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  const schemas = [ORG_JSONLD, ...(jsonLd ? [jsonLd] : [])];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
