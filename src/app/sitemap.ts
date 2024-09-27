import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lidiahu.com",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/stories",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/extended-peace",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/weathered-basket",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/upside-down-wishes",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/bio",
      lastModified: new Date(),
    },
    {
      url: "https://lidiahu.com/contact",
      lastModified: new Date(),
    },
  ];
}
