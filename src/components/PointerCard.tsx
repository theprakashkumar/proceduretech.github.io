import { PointersType } from "@/data/types";
import React from "react";
import { twMerge } from "tailwind-merge";

type PointerCardProps = {
  data: PointersType;
  eachElementClassName?: string;
  index: number;
  headingClassName?: string;
};

const PointerCard = ({ data, eachElementClassName, index, headingClassName }: PointerCardProps) => {
  return (
    <div
      className={twMerge(
        "w-full lg:w-[42%] mr-[8%] mb-[5%]",
        eachElementClassName
      )}
    >
      <h3
        className={twMerge(
          "text-gray-400 dot  text-7xl font-bold mb-2.5",
          data.color
        )}
      >
        {index + 1}
      </h3>
      <h4 className={twMerge("text-3xl mb-2.5 text-gray-600 font-bold",headingClassName)}>
        {data.heading}
      </h4>
      <p className="text-[#212529]">{data.description}</p>
    </div>
  );
};

export default PointerCard;
