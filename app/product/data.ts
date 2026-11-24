import { basePath } from "../utils";

export type ProductImage = {
  img: string;
  alt: string;
};

export type ProductData = {
  slug: string;
  title: string;
  description: string;
  paragraphs: string[];
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  productImages: ProductImage[];
};

export class Product {
  public slug: string;
  public title: string;
  public description: string;
  public paragraphs: string[];
  coverImage: string;
  public coverImageAlt: string;
  public tags: string[];
  productImages: ProductImage[];

  constructor(data: ProductData) {
    this.slug = data.slug;
    this.title = data.title;
    this.description = data.description;
    this.paragraphs = data.paragraphs;
    this.coverImage = data.coverImage;
    this.coverImageAlt = data.coverImageAlt;
    this.tags = data.tags;
    this.productImages = data.productImages;
  }

  public link(): string {
    return basePath(`product/${this.slug}`);
  }

  public coverImg(): string {
    return basePath(this.coverImage);
  }

  public productImgs(): ProductImage[] {
    return this.productImages.map(({ alt, img }) => ({
      alt,
      img: basePath(img),
    }));
  }
}
// prettier-ignore

export const products: Record<string, Product> = {

"other": new Product({
  slug: "borderline",
  title: "Borderline",
  description: "Digital Portrait",
  paragraphs: [],
  coverImage: "images/borderline.jpg",
  coverImageAlt: "Borderline",
  tags: ["digital-art"],
  productImages: [
    { img: "images/borderline-0.jpg", alt: "Blossom Pendant" },
  ],
}),
};

export type ProductTag = {
  name: string;
}

export const productTags: Record<string, ProductTag> = {
  "digital-art": { name: "Digital" },
};

// Index of the products keyed by their slug, for fast lookup
const productsBySlug = Object.fromEntries(
  Object.values(products).map((item) => [item.slug, item]),
);

export const productSet = (keys: Iterable<string>) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(products)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, _]) => set.has(key)),
  );
};

export default products;


export const allProducts = productSet([
  "blossom",
]);

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): Product | undefined {
  return productsBySlug[slug];
}
