import PageNavbar from "@/components/PageNavbar";
import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="relative mb-28">
      <div className="container-padding">
        <div className="relative">
          <PageNavbar isNavVisible={false} className="static mt-14 lg:w-full">
            <h1
              className={
                "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot dot-blue"
              }
            >
              404 Error
            </h1>
            <h4 className="max-w-3xl pt-5 mb-1.5 text-xl font-normal">
              We’re sorry we can’t find the page you were looking for.
            </h4>
            <form className="ml-0 mr-auto mt-7 w-[90%] max-w-lg m-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-[#249F6B] rounded-full text-base h-auto py-2.5 px-5 block w-full text-[#212529] bg-white appearance-none placeholder:text-gray-800/75"
                />
                <Image
                  width={22}
                  height={23}
                  className="absolute top-2.5 right-4 cursor-pointer max-w-full"
                  src="/assets/404-search-icon.svg"
                  alt=""
                />
              </div>
              <div className="mt-5">
                <button className="text-sm text-black rounded-full shadow-md px-6 py-2.5 border-none animation-easein-slow shift-to-right bg-green-600/50">
                  Go
                </button>
              </div>
            </form>
          </PageNavbar>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
