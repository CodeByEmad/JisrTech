/**
 * Serializes a schema.org object into a script tag. `<` is escaped so
 * no content string could ever terminate the script context.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
