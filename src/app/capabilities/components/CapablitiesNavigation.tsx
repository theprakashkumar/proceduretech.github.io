import { capabilitiesData } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const CapabilitiesNavigation = () => {
  return (
    <div className="flex flex-wrap">
      {capabilitiesData.map((data) => (
        <div
          key={data.title}
          className="w-full mr-0 lg:mr-[5%] lg:w-[30%] pt-20 first:pt-0 lg:pt-0 last:mr-0"
        >
          <h2
            className={twMerge(
              `text-5xl text-gray-500 font-bold mb-9 dot capitalize after:bg-[#7EB9E6]`,
            )}
          >
            {data.title}
          </h2>
          <ul>
            {data.items.map((item) => (
              <li className="group relative" key={item.title}>
                <Link
                  className="text-black w-full text-2xl font-light block py-2.5 pr-12 border-b border-b-black/10 animation-easein-slow shift-to-right bg-white"
                  href={item.href}
                >
                  {item.title}
                </Link>
                <Image
                  className="block lg:hidden top-0 right-0 absolute group-hover:block"
                  width={49}
                  height={49}
                  src="/assets/arrow-button.svg"
                  alt="pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CapabilitiesNavigation;
