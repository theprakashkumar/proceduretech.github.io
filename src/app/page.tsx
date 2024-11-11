import BlogSection from "@/components/BlogSection";
import HomepageTabs from "./components/HomepageTabs";
import TeamSection from "@/app/components/TeamSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative overflow-hidden bg-[#f0eff2]">
        <div className="visible animate-[fadeIn] text-center lg:text-start">
          <video
            src="https://videos.files.wordpress.com/SLOAqkn3/red-ball-swirl-v3.mp4"
            className="w-[228%] max-w-none relative right-[113%] lg:max-w-full lg:right-0"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="visible animate-[fadeIn] [animation-delay:1s] relative w-full pb-14 lg:absolute top-[50%] lg:w-[50%] z-10 lg:-translate-y-[50%]">
          <div className="pro-container tracking-[-0.3px] text-[#212529] text-center lg:text-left">
            <h1 className="mb-5">
              Your Goal is Our Aim
            </h1>
            <p className="text-xl mb-9">
              Maximize the value of your business with our precise, insightful
              and agile digital engineering solutions
            </p>
            <Link
              className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right"
              href="/contact/#consult"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <HomepageTabs />
      {/* video section */}
      <div className="relative overflow-hidden bg-white flex flex-col-reverse flex-wrap lg:block">
        <div className="visible animate-[fadeIn] text-center lg:text-right -mb-2.5">
          <video
            src="https://videos.files.wordpress.com/8qNSFTGt/home-spiral-balls-v2.mp4"
            className="hidden lg:inline max-w-full max-h-[51.875rem] relative -right-[15%] xl:right-auto"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            src="https://videos.files.wordpress.com/yMCrh7At/mobile-home-spiral-balls-v3.mp4"
            className="inline lg:hidden max-w-full max-h-[37.5rem] lg:max-h-[51.875rem] relative right-0 lg:right-[-15%] xl:right-auto"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="visible animate-[fadeIn] [animation-delay:1s] relative w-full pb-14 lg:absolute top-[50%] lg:w-[50%] z-10 lg:-translate-y-[50%]">
          <div className="pro-container">
            <div className="-mb-24 lg:mb-0 py-0 lg:py-20 relative z-10">
              <h2 className="-mr-[7vw] pt-10 lg:pt-0 mb-7 text-[#212549]">
                Continuous Excellence, Agile Delivery
              </h2>
              <div className="">
                <Link
                  className="border-t border-t-black/10 flex items-end py-5 justify-between text-black border-b border-b-black/10 custom-animation shift-to-right"
                  href="/capabilities/#think"
                >
                  <div>
                    <h4 className="font-bold mb-1">Think</h4>
                    <h6 className="font-medium mb-1">
                      Services to help you make the right decisions to achieve
                      business goals
                    </h6>
                  </div>
                  <div className="ml-10 mb-5 mr-5 relative left-0">
                    <div className="p-2 rounded-full shadow-md">
                      <ArrowRightIcon className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-end py-5 justify-between text-black border-b border-b-black/10 custom-animation shift-to-right"
                  href="/capabilities/#think"
                >
                  <div>
                    <h4 className="font-bold mb-1">Build</h4>
                    <h6 className="text-base font-medium mb-1">
                      We build products faster and better to deliver right to
                      your customers
                    </h6>
                  </div>
                  <div className="ml-10 mb-5 mr-5 relative left-0">
                    <div className="p-2 rounded-full shadow-md">
                      <ArrowRightIcon className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-end py-5 justify-between text-black border-b border-b-black/10 custom-animation shift-to-right"
                  href="/capabilities/#think"
                >
                  <div>
                    <h4 className="font-bold mb-1">Measure</h4>
                    <h6 className="text-base font-medium mb-1">
                      We continually track how well our strategies and products
                      are work
                    </h6>
                  </div>
                  <div className="ml-10 mb-5 mr-5 relative left-0">
                    <div className="p-2 rounded-full shadow-md">
                      <ArrowRightIcon className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog section */}
      <BlogSection />
      {/* team */}
      <TeamSection />
      {/* contact us  */}
      <div className="visible animate-[fadeIn] py-16 lg:pt-0 lg:pb-28 team-home">
        <div className="pro-container">
          <div className="mr-0 ml-auto max-w-[43.75rem]">
            <h2 className="max-w-none pb-10 lg:pt-28 lg:pb-7 lg:max-w-[46.876rem] text-left tracking-tight">
              Become part of a prolific and promising team
            </h2>
            <p className="max-w-[56.25rem] mb-7 font-light opacity-80 tracking-tight">
              From brainstorm sessions to happy hours, there’s never a dull
              moment in the exciting and flexible work environment we’ve
              created. Send us your resume to know opportunities for going Pro
              and stay in touch, you never know when we might need your
              Pro-power.
            </p>
            <div>
              <form className="max-w-[46.25rem]">
                <div className="mb-7">
                  <div className="max-w-[31.25rem] relative">
                    <span className="relative">
                      <input
                        size={40}
                        className="cursor-pointer bg-black text-white/50 border border-white/30 py-2 px-5 rounded-full w-full"
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
                <button className="text-sm mb-7 bg-white text-black rounded-full shadow-md px-6 py-2.5 border-none custom-animation shift-to-right">
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
