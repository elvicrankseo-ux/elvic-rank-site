/** Builds a mailto: URL, filtering out falsy body lines (optional fields). */
export function buildMailtoLink(
  to: string,
  subject: string,
  bodyLines: (string | null | undefined | false)[]
) {
  const params = new URLSearchParams({
    subject,
    body: bodyLines.filter(Boolean).join("\n"),
  });
  return `mailto:${to}?${params.toString()}`;
}
