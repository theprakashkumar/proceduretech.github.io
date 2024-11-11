'use client'

import Image from "next/image";
import React, { useState } from "react";

type HoverImageProps = {
  img1: string;
  img2: string;
  alt?: string;
};

const HoverImage = ({ img1, img2, alt = "team" }: HoverImageProps) => {
  const [src, setSrc] = useState(img1);

  const handleMouseEnter = () => setSrc(img2);
  const handleMouseLeave = () => setSrc(img1);

  return (
    <Image
      src={src}
      width={400}
      height={400}
      alt={alt}
      className="custom-animation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default HoverImage;
