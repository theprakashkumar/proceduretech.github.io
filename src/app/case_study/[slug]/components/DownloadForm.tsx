"use client";

import InputField from "@/components/InputField";
import React, { useState } from "react";

const DownloadForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <div className="lg:w-[30%] mr-0">
      <h3 className="text-4xl mb-7 mt-5 max-w-60 font-semibold text-[#505050]">
        Download the full Case Study
      </h3>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          {[
            { name: "email", type: "email", placeholder: "Email" },
            { name: "phone", type: "tel", placeholder: "Phone" },
            { name: "name", type: "text", placeholder: "Name" },
            {
              name: "companyName",
              type: "text",
              placeholder: "Company Name",
            },
          ].map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              inputClassName="border-[#249F6B]"
              className="lg:w-full pr-0"
            />
          ))}
          <div className="w-full mb-5 pr-5">
            <button
              type="submit"
              className={"primary-button mt-5 bg-green-600/50"}
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {/* <h4 className="text-4xl mb-10 mt-5 text-[#505050] font-semibold">
      Latest Posts
    </h4>
    <div className="border-b border-b-black/20 pb-5 mb-10">
      {pageData.latestPosts.map((post, index) => (
        <div key={index} className="mb-10">
          <h6 className="text-sm opacity-75 mb-1.5 font-normal">{`${post.date} | ${post.name}`}</h6>
          <h5 className="text-xl mb-2.5 text-[#212529] font-medium">
            {post.title}
          </h5>
          <p className="text-sm mb-5 font-light">
            {post.description}
          </p>
          <Link
            className="primary-button bg-white"
            href={post.link}
            target="_blank"
          >
            Read
          </Link>
        </div>
      ))}
    </div>
    <h4 className="text-4xl mb-10 mt-5 text-[#505050] font-semibold">
      Tag Cloud
    </h4>
    <div className="flex flex-wrap lg:border-b border-b-black/20 pb-10">
      {pageData.tags.map((tag) => (
        <Link
          key={tag.link}
          className="py-1.5 px-5 bg-[#D0D0D0] mr-2.5 mb-2.5 rounded-full border-none text-sm relative animation-easein-slow left-0 hover:bg-[rgba(208,208,208,0.3)]"
          href={tag.link}
        >
          {tag.name}
        </Link>
      ))}
    </div> */}
    </div>
  );
};

export default DownloadForm;
