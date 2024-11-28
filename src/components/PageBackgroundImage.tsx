import Image from "next/image";
import React from "react";

type PageBackgroundImageProps = {
  desktopImage: string;
  mobileImage: string;
  alt: string;
};

const PageBackgroundImage = ({
  desktopImage,
  mobileImage,
  alt = "Banner",
}: PageBackgroundImageProps) => {
  return (
    <>
      <div className="hidden lg:block">
        <Image
          width={1920}
          height={1476}
          className="max-w-full align-middle overflow-clip"
          src={desktopImage}
          alt={alt}
        />
      </div>
      <div className="block lg:hidden">
        <Image
          width={800}
          height={1650}
          className="max-w-full align-middle overflow-clip w-full"
          src={mobileImage}
          alt={alt}
        />
      </div>
    </>
  );
};

export default PageBackgroundImage;
