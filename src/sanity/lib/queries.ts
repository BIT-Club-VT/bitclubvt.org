import { defineQuery } from "next-sanity";

export const MARKETING_PAGE_QUERY = defineQuery(`
  *[_type == "marketingPage" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    summary,
    heroImage,
    body
  }
`);
