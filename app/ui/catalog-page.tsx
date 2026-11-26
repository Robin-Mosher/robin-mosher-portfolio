import Header from "./header";
import Sidebar from "./sidebar";
import CatalogBrowser from "./catalog-browser";
import { CatalogItem } from "../catalog/data";
import { Item, ItemData, itemSet } from "../data/data";
import Footer, { footerProducts } from "./footer";

/**
 * Convert Product class instances into plain objects so they can be passed
 * from this Server Component into the CatalogBrowser Client Component.
 * (Next.js cannot serialize class instances across the server/client boundary.)
 */

function serializeProducts(
  products: Record<string, Item>,
): Record<string, ItemData> {
  const out: Record<string, ItemData> = {};
  for (const [key, p] of Object.entries(products)) {
    out[key] = {
      slug: p.slug,
      title: p.title,
      description: p.description,
      paragraphs: p.paragraphs,
      coverImage: p.coverImage,
      coverImageAlt: p.coverImageAlt,
      price: p.price,
      materials: p.materials,
      tags: p.tags,
      itemImages: p.itemImages,
      purchaseLink: p.purchaseLink,
      sale: p.sale,
    };
  }
  return out;
}


export type CatalogPageProps = {
  item: CatalogItem;
};

export default function CatalogPageContent({ item }: CatalogPageProps) {
  return (
    <>
      <div className="size-full bg-primary">

        <Header>
        </Header>

        <Sidebar>
        </Sidebar>

        <CatalogBrowser
          title={item.title}
          products={serializeProducts(item.products)}
        />

        {/* === FOOTER === */}
        <Footer/>
      </div>
    </>
  );
}
