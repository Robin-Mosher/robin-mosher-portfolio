"use client";
import useMasonry from "../utils/useMasonry"

export const Masonry = ({ children }: {children: React.ReactNode}) => {
  const container = useMasonry();

  return (
    <>
      <div
        ref={container}
        className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
      >
        {children}
      </div>
    </>
  )
}
