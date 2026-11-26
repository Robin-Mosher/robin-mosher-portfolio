import { basePath } from "../utils/basePath";

export interface PageItem {
  title: string,
  link: string
}

export const pages: Record<string, PageItem> = {
  "artwork": {
    title: "Artwork",
    link: basePath("artwork"),
  },
  "build": {
    title: "Build",
    link: basePath("build"),
  },
  "performing": {
    title: "Performing",
    link: basePath("performing"),
  },
  "faq": {
    title: "FAQ",
    link: basePath("faq"),
  },
  "contact": {
    title: "Contact",
    link: basePath("contact"),
  },
};
