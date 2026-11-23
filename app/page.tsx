import { basePath } from "./utils";
import Image from "next/image";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import CatalogBrowser from "./ui/catalog-browser";
import { CatalogItem } from "./catalog/data";
import { Product, ProductData} from "./product/data";


function serializeProducts(
  products: Record<string, Product>,
): Record<string, ProductData> {
  const out: Record<string, ProductData> = {};
  for (const [key, p] of Object.entries(products)) {
    out[key] = {
      slug: p.slug,
      title: p.title,
      description: p.description,
      paragraphs: p.paragraphs,
      coverImage: p.coverImage,
      coverImageAlt: p.coverImageAlt,
      tags: p.tags,
      productImages: p.productImages,
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
      <div className="bg-teal-100 pt-0 font-josefin text-primary">

      <Navbar></Navbar>

        {/* ARTISAN JEWELRY */}
        <section>
          <div className="max-w-7xl bg-secondary-50 mx-auto m-8 p-8">
            <CatalogBrowser
              title={item.title}
              products={serializeProducts(item.products)}
            />
          </div>
        </section>




        <Divider />

        {/* === ABOUT THE CREATOR === */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-full hover:scale-105 hover:shadow-2xl hover:rotate-180 transition">
                  <Image
                    src={basePath("images/about-portrait.jpg")}
                    alt="Robin - Creator of Lunar Orchid Jewelry"
                    height={40}
                    width={40}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-josefin">
                  <strong>About the Creator</strong>
                </p>
                <h2 className="font-cinzel text-white text-2xl sm:text-3xl lg:text-4xl mb-6">
                  Hi! My name is Robin!
                </h2>
                <div className="text-gray-300 font-josefin leading-relaxed">
                  <p className="mb-4">{intro1}</p>
                  <p className="mb-4">{intro2}</p>
                  <p>{intro3}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <Footer/>{" "}
      </div>
    </>
  );
}

const intro1 = `
I'm the creative behind Lunar Orchid Jewelry!
`.trim();

const intro2 = `
I developed a love of making jewelry in my childhood. My
great-grandmother was an artist, jeweler, and collector of
stones, shells, and trinkets of the earth. She taught me the
basic skills of jewelry crafting, which I continued to
foster after she passed.
`.trim();

const intro3 = `
When I'm not making jewelry, I'm probably doing something
ridiculous and you shouldnt ask too many questions.
`.trim();

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
