import "server-only";
import { randomUUID } from "node:crypto";
import { client } from "./client";

// Sanity request tags are included in query URLs. A unique tag for each build
// process guarantees that event queries cannot reuse a response from an earlier
// static export, while retaining the force-cache behavior required by `output: export`.
export const buildClient = client.withConfig({
  useCdn: false,
  perspective: "published",
  requestTagPrefix: `bitclub-events-build-${randomUUID()}`,
});
