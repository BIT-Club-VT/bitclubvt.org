import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1e1xzd8i",
  dataset: "production",
  apiVersion: "2026-08-19",
  useCdn: true,
});
