import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1e1xzd8i",
  dataset: "production",
  apiVersion: "2026-08-19",
  useCdn: true,
});

// Static builds should read published documents directly instead of risking a stale
// CDN response immediately after publication.
export const buildClient = client.withConfig({ useCdn: false });
