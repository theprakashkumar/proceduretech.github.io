import Image from "next/image";
import React from "react";

const JoinProcedure = () => {
  return (
    <section className="mb-28">
      <div className="container-padding">
        <h3>Join the Pros</h3>
        <p className="max-w-[56.25rem] mb-7 font-light opacity-80 tracking-tight">
          From brainstorm sessions to happy hours, there’s never a dull moment
          in the exciting and flexible work environment we’ve created. Send us
          your resume to know opportunities for going Pro and stay in touch, you
          never know when we might need your Pro-power.
        </p>
        <div>
          <form className="max-w-[46.25rem]">
            <div className="mb-7">
              <div className="flex flex-wrap sm:flex-nowrap ml-1.5 -mb-5 sm:ml-0 sm:mb-0 justify-between">
                <span className="relative">
                  <span className="flex flex-col sm:block">
                    <span className="inline-block ml-2.5">
                      <label className="mb-5 sm:mb-0 block w-full mr-8 sm:inline-block">
                        <input
                          checked
                          type="radio"
                          name="options"
                          value="Design Team"
                          className="radio-input mr-2.5"
                        />
                        <span className="opacity-80 ml-2">Design Team</span>
                      </label>
                    </span>
                    <span className="inline-block ml-2.5">
                      <label className="mb-5 sm:mb-0 block w-full mr-8 sm:inline-block">
                        <input
                          type="radio"
                          name="options"
                          value="Tech Team"
                          className="radio-input mr-2.5"
                        />
                        <span className="opacity-80 ml-2">Tech Team</span>
                      </label>
                    </span>
                    <span className="inline-block ml-2.5">
                      <label className="mb-5 sm:mb-0 block w-full mr-8 sm:inline-block">
                        <input
                          type="radio"
                          name="options"
                          value="Other"
                          className="radio-input mr-2.5"
                        />
                        <span className="opacity-80 ml-2">Other</span>
                      </label>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="mb-7">
              <div className="max-w-[31.25rem] relative">
                <span className="relative">
                  <input
                    size={40}
                    className="file-upload-input input-white cursor-pointer bg-white text-[#212529] border border-[#249F6B] py-2 px-5 rounded-full w-full"
                    type="file"
                    name="file"
                  />
                </span>
                <Image
                  className="absolute right-5 top-3 pointer-events-none z-[2]"
                  width={16}
                  height={16}
                  src="https://procedure.tech/wp-content/uploads/2023/09/upload-icon-1.svg"
                  alt="join-row-icon"
                />
              </div>
            </div>
            <button className="text-sm bg-green-600/50 text-black rounded-full shadow-md px-6 py-2.5 border-none animation-easein-slow shift-to-right">
              Go
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinProcedure;
