"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { pages } from "../data/page";
import { basePath } from "../utils";

export default function Sidebar() {
  return (
    <div className="h-full hidden lg:flex flex-col p-8 gap-10 ">
      {/* === Desktop Sidebar === */}
        <div className="w-50 ">
          <Image
            src={basePath("images/robin.jpg")}
            alt="Artist Robin Mosher"
            height={300}
            width={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="">
          <>
            {
              Object.entries(pages).map(([key, item]) => (
                <div key={item.title} className="bg-white p-1">
                  <a href={item.link}>
                    <div className="text-black text-left text-md transition-all hover:bg-gray-50 hover:scale-105 hover:text-teal-400 p-1">{item.title}</div>
                  </a>
                </div>
              ))
            }
          </>
        </div>
    </div>
  );
}
