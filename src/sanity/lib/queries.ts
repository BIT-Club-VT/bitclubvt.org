import { defineQuery } from "next-sanity";

export const EVENT_SLUGS_QUERY = defineQuery(`
  *[
    _type == "event" &&
    defined(slug.current) &&
    defined(date) &&
    defined(startTime) &&
    defined(endTime)
  ] | order(slug.current asc) {
    "slug": slug.current
  }
`);

export const ALL_EVENTS_QUERY = defineQuery(`
  *[
    _type == "event" &&
    defined(slug.current) &&
    defined(date) &&
    defined(startTime) &&
    defined(endTime)
  ] | order(date asc, startTime asc, _id asc) {
    _id,
    name,
    "slug": slug.current,
    date,
    startTime,
    endTime,
    location {
      name,
      address,
      mapUrl
    },
    image {
      _type,
      alt,
      crop,
      hotspot,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      }
    }
  }
`);

export const EVENT_QUERY = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    date,
    startTime,
    endTime,
    location {
      name,
      address,
      mapUrl
    },
    image {
      _type,
      alt,
      crop,
      hotspot,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      }
    },
    description,
    links[]{
      _key,
      title,
      url
    }
  }
`);
