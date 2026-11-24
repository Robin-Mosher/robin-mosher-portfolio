import { basePath } from "./utils";
import Image from "next/image";
import Sidebar from "./ui/sidebar";
import MobileMenu from "./ui/mobile-menu";

export default function Home() {
  return (
    <>
      <section className="size-full">
      <MobileMenu></MobileMenu>
      <div className="size-full flex flex-row debug">

        <Sidebar></Sidebar>

        <div className="debug"></div>

        </div>
      </section>
    </>
  );
}

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
