import {
  Item,
  allItems,

  necklaceProducts,
  earringProducts,
  industrialChainProducts,
  labradoriteProducts
} from "../data/data";

export type CatalogItem = {
  title: string;
  products: Record<string, Item>;
};

const catalogItems: Record<string, CatalogItem> = {
  necklaces: {
    title: "Necklaces and Pendants",
    products: necklaceProducts,
  },
  bracelets: { title: "Bracelets", products: braceletProducts },
  rings: { title: "Rings", products: ringProducts },
  earrings: { title: "Earrings", products: earringProducts },
  all: { title: "All Products", products: allItems },
};

export default catalogItems;

/** Look up a product by its slug. Returns undefined if not found. */
export function getCatalogBySlug(slug: string): CatalogItem | undefined {
  return catalogItems[slug];
}
