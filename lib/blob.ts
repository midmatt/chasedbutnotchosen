export function getPdfUrl(): string {
  const url = process.env.BLOB_PDF_URL;

  if (!url) {
    throw new Error("BLOB_PDF_URL environment variable is not set");
  }

  return url;
}
