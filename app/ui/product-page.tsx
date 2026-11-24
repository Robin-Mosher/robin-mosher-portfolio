import Carousel from "./carousel";
import Footer, { footerProducts } from "./footer";
import {type Product } from "../product/data";
import Sidebar from "./sidebar";

type ProductPageProps = {
  product: Product;
};


export default function ProductPageContent({ product }: ProductPageProps) {
  return (
    <>
      <div className="bg-primary pt-20">
        <Sidebar />

        {/* === PRODUCT SECTION === */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Left: Image Carousel */}
              <Carousel slides={product.productImgs()} />

              {/* Right: Product Details */}
              <div className="mx-auto lg:pr-0 lg:w-[45%]">
                <div className="text-left">
                  {/* Title */}
                  <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    <strong>{product.title}</strong>
                  </h1>

                  {/* Paragraphs */}
                  <div className="flex flex-col gap-4 text-base sm:text-lg mb-6 text-gray-300 leading-relaxed">
                    {product.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
