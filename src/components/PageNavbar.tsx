"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const textStyles = {
  gray: {
    nav: 'text-[rgba(134,134,134,0.8)]',
    link: 'text-[rgba(134,134,134,0.8)] before:text-[rgba(134,134,134,0.8)]',
    highlighted: 'text-[#868686] before:text-[#868686]'
  },
  white: {
    nav: 'text-[rgba(203,203,203,0.8)]',
    link: 'text-[rgba(203,203,203,0.8)] before:text-[rgba(203,203,203,0.8)]',
    highlighted: 'text-[#cbcbcb] before:text-[#cbcbcb]'
  }
};

type PageNavbarProps = { 
  children: React.ReactNode; 
  className?: string; 
  textColorType?: keyof typeof textStyles;
};

const PageNavbar = ({ children, className, textColorType = 'gray' }: PageNavbarProps) => {
  const pathname = usePathname();
  const routeArray = pathname.split("/").slice(1);

  return (
    <div className={twMerge("absolute top-14 left-0 w-full lg:w-3/5", className)}>
      <nav className={twMerge("text-sm", textStyles[textColorType].nav)} aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center mb-2.5">
          <li>
            <Link href="/">Home</Link>
          </li>
          {routeArray.map((route, index) => {
            const fullPath = `/${routeArray.slice(0, index + 1).join("/")}`;
            const isCurrentRoute = pathname === fullPath;
            const linkClass = twMerge(
              `pl-1.5 capitalize before:content-["/"] before:float-left before:pr-1.5`,
              textStyles[textColorType].link,
              isCurrentRoute && `${textStyles[textColorType].highlighted} font-semibold`
            );

            return (
              <Link href={fullPath} key={route} className={linkClass}>
                {route.replace(/-/g, " ")}
              </Link>
            );
          })}
        </ol>
      </nav>
      {children}
    </div>
  );
};

export default PageNavbar;
