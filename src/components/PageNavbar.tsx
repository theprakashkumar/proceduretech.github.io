"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

type PageNavbarProps = { children: React.ReactNode; className?: string };

const PageNavbar = ({ children, className }: PageNavbarProps) => {
  const pathname = usePathname();
  const routeArray = pathname.split("/").slice(1);

  return (
    <div
      className={twMerge("absolute top-14 left-0 w-full lg:w-3/5", className)}
    >
      <nav className="text-sm text-gray-500/80" aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center mb-2.5">
          <li className="">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          {routeArray.map((route, index) => (
            <Link
              href={`/${routeArray.slice(0, index + 1).join("/")}`}
              key={route}
              className='pl-1.5 text-gray-500 capitalize font-semibold before:content-["/"] before:text-gray-500/80 before:float-left before:pr-1.5'
            >
              {route.split("-").join(" ")}
            </Link>
          ))}
        </ol>
      </nav>
      {children}
    </div>
  );
};

export default PageNavbar;
