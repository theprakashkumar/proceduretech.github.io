import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HoverImage from "./HoverImage";

const TeamSection = () => {
  return (
    <div className="visible animate-[fadeIn] pb-32 bg-white text-[#212529]">
      <div className="container-padding">
        <h2 className="m-auto pt-28 pb-20 lg:max-w-3xl  text-center">
          We are passionate about producing cutting-edge work
        </h2>
        <div className="flex justify-between mb-5">
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/about/#ourstory"
          >
            Our Story
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/lifeprocedure/cultureprocedure/"
          >
            Culture
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/about/#leadership"
          >
            Leadership
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap">
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage1.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage1c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage2.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage2c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage3.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage3c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage4.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage4c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage5.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage5c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage6.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage6c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage7.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage7c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage8.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage8c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage9.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage9c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage10.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage10c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage11.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage11c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/team-collage12.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/08/team-collage12c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/team-collage13.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/09/team-collage13c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/team-collage14.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/09/team-collage14c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/team-collage15.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/09/team-collage15c.webp"
            />
          </div>
          <div className="hr--block">
            <HoverImage
              img1="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/team-collage16.webp?fit=400%2C400&ssl=1"
              img2="https://procedure.tech/wp-content/uploads/2023/09/team-collage16c.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
