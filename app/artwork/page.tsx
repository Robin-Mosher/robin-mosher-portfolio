import { basePath } from "../utils";
import Image from "next/image";
import Sidebar from "../ui/sidebar";
import MobileMenu from "../ui/mobile-menu";
import Header from "../ui/header";


export default function Home() {
  return (
    <>
      <section className="size-full">
      <div className="size-full flex flex-row ">
          <Sidebar></Sidebar>

          <div className="flex flex-col">
            <div>
              <MobileMenu></MobileMenu>
            </div>
          <div className="bg-amber-200 w-full h-10">
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
