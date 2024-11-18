import React from "react";
import { twMerge } from "tailwind-merge";
import { PointersType } from "@/data/types";

type PointersProps = {
  title?: string;
  pointers: PointersType[];
  eachElementClassName?: string;
};

const Pointers = ({ title, pointers, eachElementClassName }: PointersProps) => {
  return (
    <section className="mb-28">
      <div className="container-padding">
        {title && <h2 className="mb-12">{title}</h2>}
        <div className="flex flex-wrap -mb-[5%]">
          {pointers.map((data, index) => (
            <div
              key={data.heading}
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
              <h4 className="text-3xl mb-2.5 text-gray-600 font-bold">
                {data.heading}
              </h4>
              <p className="text-[#212529]">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pointers;
