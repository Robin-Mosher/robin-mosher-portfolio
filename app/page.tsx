import { basePath } from "./utils";
import Image from "next/image";
import Sidebar from "./ui/sidebar";
import MobileMenu from "./ui/mobile-menu";
import Carousel from "./ui/carousel";
import {type Item } from "./item/data";

export default function Home() {
  return (
    <>
      <section className="size-full">
      <div className="size-full flex flex-row ">
        <Sidebar></Sidebar>
          <div className="">
            <MobileMenu></MobileMenu>
              <Image
                src={basePath("images/sketchbanner.jpg")}
                alt="Sketch Banner"
                height={200}
                width={200}
                className="size-full object-cover"
              />
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
