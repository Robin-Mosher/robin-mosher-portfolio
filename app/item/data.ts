import { basePath } from "../utils";

export type ItemImage = {
  img: string;
  alt: string;
};

export type ItemData = {
  slug: string;
  title: string;
  description: string;
  paragraphs: string[];
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  itemImages: ItemImage[];
};

export class Item {
  public slug: string;
  public title: string;
  public description: string;
  public paragraphs: string[];
  coverImage: string;
  public coverImageAlt: string;
  public tags: string[];
  itemImages: ItemImage[];

  constructor(data: ItemData) {
    this.slug = data.slug;
    this.title = data.title;
    this.description = data.description;
    this.paragraphs = data.paragraphs;
    this.coverImage = data.coverImage;
    this.coverImageAlt = data.coverImageAlt;
    this.tags = data.tags;
    this.itemImages = data.itemImages;
  }

  public link(): string {
    return basePath(`item/${this.slug}`);
  }

  public coverImg(): string {
    return basePath(this.coverImage);
  }

  public productImgs(): ItemImage[] {
    return this.itemImages.map(({ alt, img }) => ({
      alt,
      img: basePath(img),
    }));
  }
}
// prettier-ignore

export const items: Record<string, Item> = {

"other": new Item({
  slug: "borderline",
  title: "Borderline",
  description: "Digital Portrait",
  paragraphs: [],
  coverImage: "images/borderline.jpg",
  coverImageAlt: "Borderline",
  tags: ["digital-art"],
  itemImages: [
    { img: "images/borderline-0.jpg", alt: "Borderline" },
  ],
}),
};

export type ItemTag = {
  name: string;
}

export const itemTags: Record<string, ItemTag> = {
  "digital-art": { name: "Digital" },
};

// Index of the products keyed by their slug, for fast lookup
const itemsBySlug = Object.fromEntries(
  Object.values(items).map((item) => [item.slug, item]),
);

export const itemSet = (keys: Iterable<string>) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(items)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, _]) => set.has(key)),
  );
};

export default items;


export const homeCarousel = itemSet([
  "borderline",
]);

/** Look up a product by its slug. Returns undefined if not found. */
export function getItemBySlug(slug: string): Item | undefined {
  return itemsBySlug[slug];
}
