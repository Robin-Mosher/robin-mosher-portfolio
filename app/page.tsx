import { basePath } from "./utils";
import Image from "next/image";
import Sidebar from "./ui/sidebar";
import MobileMenu from "./ui/mobile-menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="size-full">
      <div className="size-full flex flex-row ">
        <Sidebar></Sidebar>
          <div className="size-full">
            <MobileMenu></MobileMenu>
            <div className="size-full p-2 bg-blue-200">
              <div>

              </div>
            </div>
            {/*<Image
              src={basePath("images/sketchbanner.jpg")}
              alt="Sketch Banner"
              height={200}
              width={200}
              className="size-full object-cover"
            />*/}
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
