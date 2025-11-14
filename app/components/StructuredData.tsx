/**
 * Structured Data Component
 * Renders JSON-LD schema markup in the document head
 * 
 * Usage:
 * <StructuredData schema={schema} />
 */

interface StructuredDataProps {
  schema: Record<string, any>;
  type?: 'ld+json' | 'microdata';
}

export function StructuredData({ schema, type = 'ld+json' }: StructuredDataProps) {
  if (type === 'ld+json') {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
        suppressHydrationWarning
      />
    );
  }

  return null;
}

/**
 * Multiple Structured Data Component
 * Renders multiple schemas at once
 * 
 * Usage:
 * <MultiStructuredData schemas={[schema1, schema2, schema3]} />
 */

interface MultiStructuredDataProps {
  schemas: Record<string, any>[];
}

export function MultiStructuredData({ schemas }: MultiStructuredDataProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
          suppressHydrationWarning
        />
      ))}
    </>
  );
}

/**
 * Generate Context Graph
 * Creates a unified context graph for better LLM understanding
 */
export function generateContextGraph(schemas: Record<string, any>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
