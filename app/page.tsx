import Image from "next/image";
import Navbar from "./ui/navbar";
import { basePath } from "./utils";

// prettier-ignore
export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* HEADER */}
          <div className="w-full h-auto">
            <Image
              src={basePath("images/banner.jpg")}
              alt="Robin Mosher"
              height={40}
              width={40}
              className="w-full h-auto object-cover"
            />
            <div className="relative max-w-3xl md:max-w-xl md:py-6 bottom-40 left-4 bg-black/40 py-10 px-16 rounded-r-3xl">
              <div className=" text-white text-center">
                  <h3 className="text-5xl">Robin Mosher</h3>
                  <p className="text-lg">Heart of an Artist. Hands of a Craftsman.</p>
              </div>
            </div>
          </div>

      {/* MEET ROBIN SECTION */}
        <div className="bg-mauve-400">
          <div className=" flex flex-grid max-w-6xl mx-auto justify-between gap-6 p-10  text-xl text-center text-black">
          <div className="h-auto w-75">
            <div className="overflow-hidden hover:scale-105 transition shadow-xl rounded-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="py-2">
              The Artisan
            </h1>
          </div>
          <div className="h-auto w-75 ">
            <div className="overflow-hidden hover:scale-105 transition shadow-xl rounded-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="py-2">
              The Performer
            </h1>
          </div>
          <div className="h-auto w-75 ">
            <div className="overflow-hidden hover:scale-105 transition shadow-xl rounded-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="py-2">
              The Craftsman
            </h1>
          </div>

          <div className="h-auto w-75 ">
            <div className="overflow-hidden hover:scale-105 transition shadow-xl rounded-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="py-2">
              The Gremlin
            </h1>
          </div>
        </div>
      </div>


      {/*LUNAR ORCHID JEWELRY */}
      <div className="mask-b-from-green-400">
        <div className=" flex flex-grid max-w-6xl mx-auto justify-between gap-10 p-10">
          <div className="h-auto w-75 text-white text-center pt-10">
            <h1 className="text-2xl">
              Lunar Orchid Jewelry</h1>
            <p>
              This is a little excerpt about Lunar Orchid Jewelry and how to shop on my website etc. etc. etc.....
            </p>
          </div>
          <div className="overflow-hidden h-auto w-100 hover:scale-105 transition shadow-xl">
            <Image
              src={basePath("images/lavarock-necklace.jpeg")}
              alt="Robin Mosher"
              height={40}
              width={40}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/*FOLLOW MY PROJECTS*/}
      <div className="">
        <div className=" flex flex-grid max-w-6xl mx-auto justify-between gap-2 p-10">
        <div className="h-auto w-full">
          <div className="overflow-hidden  hover:scale-105 transition shadow-xl">
            <Image
              src={basePath("images/robinsword.jpg")}
              alt="Robin Mosher"
              height={40}
              width={40}
              className="object-cover"
            />
          </div>
          <h1 className="py-2 text-2xl text-center text-black">
            Trailer Conversion
          </h1>
          </div>

          <div className="h-auto w-full">
            <div className="overflow-hidden  hover:scale-105 transition shadow-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="object-cover"
              />
            </div>
            <h1 className="py-2 text-2xl text-center text-black">
              Trailer Conversion
            </h1>
          </div>
          <div className="h-100 w-full">
            <div className="overflow-hidden  hover:scale-105 transition shadow-xl">
              <Image
                src={basePath("images/robinsword.jpg")}
                alt="Robin Mosher"
                height={40}
                width={40}
                className="object-cover overflow-hidden"
              />
            </div>
            <h1 className="py-2 text-2xl text-center text-black">
              Trailer Conversion
            </h1>
            </div>
        </div>
      </div>

    </div>

  );
}
