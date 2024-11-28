import React from "react";

type LeftSectionProps = {
  subHeadings: string[];
  content: string;
};

const LeftSection = ({ subHeadings, content }: LeftSectionProps) => {
  return (
    <div className="w-full mr-0 mb-12 lg:mb-0 lg:w-[65%] lg:mr-[5%] blog--description">
      {subHeadings.map((data, index) => (
        <h2 key={index} className="text-xl lg:text-3xl mb-14">
          {data}
        </h2>
      ))}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default LeftSection;
