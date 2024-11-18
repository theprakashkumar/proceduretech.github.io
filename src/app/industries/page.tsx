import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PageNavbar from "@/components/PageNavbar";
import IndustriesTabs from "./components/IndustriesTabs";
import { clientsData } from "@/constants/constant";

const industriesData = [
  {
    title: "Banking",
    description:
      "We can help your bank take its services—and brand experience—to the next level. We deliver products that address cybersecurity concerns and increase efficiency.",
    href: "/industries/banking/",
    color: "dot-green",
  },
  {
    title: "FoodTech",
    description:
      "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them and transform learning experiences.",
    href: "/industries/foodtech/",
    color: "dot-ochre",
  },
  {
    title: "EdTech",
    description:
      "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them and transform learning experiences.",
    href: "/industries/edtech/",
    color: "dot-iceblue",
  },
  {
    title: "InsurTech",
    description:
      "We offer InsurTech companies solutions that automate claims processing, provide advanced analytics and AI tools, improve the customer experience, and enhance security.",
    href: "/industries/insurtech/",
    color: "dot-red",
  },
  {
    title: "FinTech",
    description:
      "With our expertise and forward-thinking approach, your business can leverage technology and embrace innovation to reshape the future of finance and gain a competitive edge.",
    href: "/industries/fintech/",
    color: "dot-wine",
  },
];

const Industries = () => {
  return (
    <>
      <section className="relative">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-red mb-1.5 tracking-tighter">
                Propelling You to
                <br />
                Stay a Step Ahead
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                In this rapidly evolving digital landscape, our
                Think-Build-Measure approach is designed to meet the Digital
                Transformation needs of various industry segments. From
                harnessing new and emerging technologies, streamlining existing
                ones to helping your products thrive, we help businesses of all
                sizes score crucial wins in today’s tech-driven future.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            width={1920}
            height={1476}
            className="max-w-full overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/industries-banner.jpg"
            alt="Industries Banner"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            width={1920}
            height={1476}
            className="max-w-full align-middle overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/mob-industries-banner.jpg"
            alt="Industries Banner"
          />
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="flex flex-wrap -mb-[5%]">
            {industriesData.map((data) => (
              <div
                key={data.title}
                className="w-full lg:w-[45%] lg:mr-[5%] mb-12 pb-10 border-b border-b-black/10"
              >
                <h3 className={twMerge("dot dot-green", data.color)}>{data.title}</h3>
                <p className="mt-5 mb-9">{data.description}</p>
                <Link
                  className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right"
                  href={data.href}
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="pro-container">
          <h3>Our Clients</h3>
          <div className="mt-12 flex flex-wrap">
            {clientsData.map((url, index) => (
              <Image className="w-1/3 sm:w-[10%] lg:w-[14.2%] max-w-full" width={480} height={216} src={url} key={index} alt="Treebo" />
            ))}
          </div>
        </div>
      </section>
      <div className="py-16 lg:pt-32 lg:pb-36">
        <IndustriesTabs />
      </div>
      <div>
        <div className="pro-container mb-7">
          <h3 className="dot dot-green">We explore</h3>
          <h3 className="dot dot-ochre">We innovate</h3>
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

export default Industries;
