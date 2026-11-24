"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { basePath } from "../utils";

export default function Sidebar() {

  return (
    <div className="h-full hidden lg:flex flex-col p-6 gap-10">
      {/* === Desktop Sidebar === */}
      <div className="gap-10">
        <div className="bg-emerald-100 w-full rounded-full text-center">Image</div>
        <div className="">
          <>
            {
              ["Artwork", "Build", "Performing", "FAQ", "Contact"].map((title) => (
                <div key={title} className="bg-white p-2">
                  <div className="text-black text-left text-md transition-all hover:scale-105 hover:text-teal-400">{title}</div>
                </div>
              ))
            }
          </>
        </div>
      </div>
    </div>
  );
}
