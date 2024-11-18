import Link from "next/link";
import Image from "next/image";
import { capabilitiesData } from "@/constants/constant";
import { twMerge } from "tailwind-merge";
import CapabilitiesTabs from "./components/CapabilitiesTabs";
import PageNavbar from "@/components/PageNavbar";

const Capabilities = () => {
  return (
    <>
      <section className="relative">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-green mb-1.5 tracking-tighter">
                Produce Your
                <br />
                Roadmap to Success
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                We integrate strategy, design and software engineering to help
                your business define its digital future and take your products
                to the next level. We love to innovate so that we can meet the
                changing needs of our clients’ businesses—and forge a new path
                together.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            width={1920}
            height={1476}
            className="max-w-full overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/capabilities-banner.jpg"
            alt="Capabilities Banner"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            width={1920}
            height={1476}
            className="max-w-full align-middle overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/mob-capabilities-banner.jpg"
            alt="Capabilities Banner"
          />
        </div>
      </section>
      <section>
        <div className="pro-container">
          <h3 className="text-3xl text-gray-500 font-light mb-12">
            Our Capabilities
          </h3>
          <div className="flex flex-wrap">
            {capabilitiesData.map((data) => (
              <div
                key={data.title}
                className="w-full mr-0 lg:mr-[5%] lg:w-[30%] pt-20 first:pt-0 lg:pt-0 last:mr-0"
              >
                <h2
                  className={twMerge(
                    `text-5xl text-gray-500 font-bold mb-9 dot capitalize after:bg-[#7EB9E6]`
                  )}
                >
                  {data.title}
                </h2>
                <ul>
                  {data.items.map((item) => (
                    <li className="group relative" key={item.title}>
                      <Link
                        className="text-black w-full text-2xl font-light block py-2.5 pr-12 border-b border-b-black/10 custom-animation shift-to-right bg-white"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                      <Image
                        className="block lg:hidden top-0 right-0 absolute group-hover:block"
                        width={49}
                        height={49}
                        src="https://procedure.tech/wp-content/themes/proceduretech/img/svg/arrow-button.svg"
                        alt="pointer"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-16 lg:pt-32 lg:pb-36">
        <CapabilitiesTabs />
      </div>
      <div>
        <div className="pro-container mb-7">
          <h3 className="dot dot-green">We think</h3>
          <h3 className="dot dot-ochre">Therefore we build</h3>
        </div>
        <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
          <div className="rounded-r-full py-[7vw] bg-[#1DA069] text-white">
            <div className="pro-container">
              <h3 className="mt-5">Get a Free Consultation</h3>
              <div>
                <form className="max-w-xl pt-7 lg:pt-12">
                  <div className="flex flex-wrap pr-12">
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="email" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email"
                          type="email"
                          name="email"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Phone" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Phone"
                          type="tel"
                          name="Phone"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Name" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                          type="text"
                          name="Name"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="CompanyName" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Company Name"
                          type="text"
                          name="CompanyName"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <br />
                    <div className="w-6/12 mb-5 pr-5">
                      <button className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right mt-5">
                        Go
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
