import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PageNavbar from "@/components/PageNavbar";
import { clientsData } from "@/constants/constant";
import Link from "next/link";
import HoverImage from "../components/HoverImage";

const pointerData = [
  {
    heading: "Inspired Engineering",
    description:
      "We encourage creativity and experimentation, and are excited about using technology to solve problems and devise new strategies.",
    color: "dot-ochre",
  },
  {
    heading: "Power Teamwork",
    description:
      "We believe in working together to achieve our goals, where every member plays a crucial role, fostering diverse ideas to converge into groundbreaking solutions and results.",
    color: "dot-wine",
  },
  {
    heading: "Produce Excellence",
    description:
      "We strive for excellence in everything we do, for the highest level of skill and performance. Our curiosity provides the eagerness to break boundaries.",
    color: "dot-iceblue",
  },
];

const teamMembersData = [
  {
    name: "Ulhas Mandrawadkar",
    position: "Co-Founder and CTO",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
    href: "/about/ulhas-mandrawadkar",
    color: "bg-blue",
  },
  {
    name: "Renuka Rode",
    position: "General Manager",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
    href: "/about/renuka-rode",
    color: "bg-brickred",
  },
  {
    name: "Braj Baheti",
    position: "Co-Founder and CEO",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
    href: "/about/braj-baheti",
    color: "bg-green",
  },
];

const About = () => {
  return (
    <>
      <section className="relative">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-blue mb-1.5 tracking-tighter">
                Provoking Innovation
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl dot dot-red mb-1.5 tracking-tighter">
                Building Possibilities
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                Meet The Power of Pro: prolific innovation, proficient
                execution, proactive mindsets, and amplified productivity. With
                a goal to build prominent presence and achieve progressive
                strides. We are The Procedure that aspires to fuel a digital
                revolution to create profound impact.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            width={1920}
            height={1476}
            className="max-w-full overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/about-banner.jpg"
            alt="About Banner"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            width={1920}
            height={1476}
            className="max-w-full align-middle overflow-clip"
            src="https://procedure.tech/wp-content/uploads/2023/08/mob-about-banner.jpg"
            alt="About Banner"
          />
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <h3>Our Clients</h3>
          <div className="mt-12 flex flex-wrap">
            {clientsData.map((url, index) => (
              <Image
                className="w-1/3 sm:w-[10%] lg:w-[14.2%] max-w-full"
                width={480}
                height={216}
                src={url}
                key={index}
                alt="Treebo"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <h2 className="mb-12">Our Story</h2>
          <div className="flex flex-wrap -mb-[5%]">
            {pointerData.map((data, index) => (
              <div
                key={data.heading}
                className="w-full md:w-[28%] md:mr-[5.3%] mb-12 md:mb-[5%]"
              >
                <h3
                  className={twMerge(
                    "text-gray-400 dot text-7xl font-bold mb-2.5",
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
      <section className="flex flex-wrap">
        {teamMembersData.map((member) => (
          <Link
            key={member.name}
            href={member.href}
            className={twMerge(
              "odd:px-[7vw] even:px-[7vw] lg:odd:pl-[7vw] lg:odd:pr-[calc(7vw_/_2)] lg:even:pr-[7vw] lg:even:pl-[calc(7vw_/_2_+_1rem)] h-auto flex-wrap lg:flex-nowrap lg:h-[18.75rem] w-full lg:w-6/12 flex justify-between custom-animation",
              member.color
            )}
          >
            <div className="pt-14">
              <h4 className="text-3xl font-normal">{member.name}</h4>
              <h5 className="text-lg mb-1.5">{member.position}</h5>
            </div>
            <HoverImage
              img1={member.image1}
              img2={member.image2}
              width={300}
              height={300}
              className="max-w-full max-h-full self-end align-middle w-full lg:w-auto"
            />
          </Link>
        ))}
        <div className="flex odd:px-[7vw] even:px-[7vw] lg:odd:pl-[7vw] lg:odd:pr-[calc(7vw_/_2)] lg:even:pr-[7vw] lg:even:pl-[calc(7vw_/_2_+_1rem)] h-auto flex-wrap lg:flex-nowrap lg:h-[18.75rem] w-full lg:w-6/12 custom-animation flex-col justify-center items-start bg-black/60 text-white py-14 lg:py-0">
          <h4 className="text-3xl font-normal mb-1.5">
            Progressive, Proactive & Pro-fun
          </h4>
          <p className="mb-12 max-w-md font-extralight text-lg">
            A passionate team committed to push the boundaries of technology
            with the world’s best coffee.
          </p>
          <Link
            className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right"
            href="/lifeprocedure/"
          >
            Life@Procedure
          </Link>
        </div>
      </section>
      <section>
        <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
          <div className="rounded-r-full -mb-5 pt-[7vw] text-[#212529]">
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
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
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
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
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
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
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
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <br />
                    <div className="w-6/12 mb-5 pr-5">
                      <button className="text-sm bg-green-600/50 text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right mt-5">
                        Go
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
