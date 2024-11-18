'use client'

import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type HoverImageProps = {
  img1: string;
  img2: string;
  alt?: string;
  className?: string;
  width?: number,
  height?: number
};

const HoverImage = ({ img1, img2, alt = "team", className, width = 400, height = 400 }: HoverImageProps) => {
  const [src, setSrc] = useState(img1);

  const handleMouseEnter = () => setSrc(img2);
  const handleMouseLeave = () => setSrc(img1);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={twMerge("animation-easein-slow",className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default HoverImage;
