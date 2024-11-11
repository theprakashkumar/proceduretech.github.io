import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const dynamicParams = false;
type pagesDataType = {
  heroSection: {
    heading: string;
    description: string;
    images: {
      desktop: string;
      mobile: string;
    };
    color: string;
  };
  pointers: {
    heading: string;
    description: string;
    color: string;
  }[];
  consultSection: {
    heading: string;
    subHeading: string;
    styles: {
      headingColor: string;
      subHeadingColor: string;
      backgroundColor: string;
    };
  };
};

const pagesData: { [key: string]: pagesDataType } = {
  "banking": {
    heroSection: {
      heading: "Banking",
      description:
        "We can help your bank take its services—and brand experience—to the next level. We deliver products that address cybersecurity concerns and increase efficiency.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/banking.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-banking.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Enhanced Efficiency",
        description:
          "Experience an advanced level of operational efficiency and productivity with our solutions and tools that streamline banking operations, so you can focus on growing your business in a faster and smarter way.",
        color: "dot-red",
      },
      {
        heading: "Robust Cybersecurity",
        description:
          "Bank with the confidence that our multi-layered cybersecurity measures provide, protecting you against potential threats and ensuring the safety of your customers’ valuable data.",
        color: "dot-wine",
      },
      {
        heading: "Seamless Customer Experience",
        description:
          "Delight your customers with a seamless and personalized banking experience, through our solutions that make it easier for your customers to interact with your brand, resulting in customer loyalty.",
        color: "dot-ochre",
      },
      {
        heading: "Digital Transformation",
        description:
          "We enable you to modernize your business and stay ahead of the competition. By leveraging emerging technologies like AI, ML, and blockchain, you can take advantage of new opportunities and unlock new revenue streams.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  'edtech': {
    heroSection: {
      heading: "EdTech",
      description:
        "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/edtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-edtech.jpg",
      },
      color: "dot-red",
    },
    pointers: [
      {
        heading: "Future-Ready Applications",
        description:
          "Our technology and protocols ensure that data stays encrypted, authentication is rigorous, cyber threats are addressed—and you can build trust with customers while complying with industry regulations.",
        color: "dot-red",
      },
      {
        heading: "Learner-Centric Design",
        description:
          "Our software, services, and consulting solutions enable you to achieve significant time and cost savings while improving productivity and delivering seamless user experiences to your customers.",
        color: "dot-wine",
      },
      {
        heading: "Gamified Learning Experiences",
        description:
          "We provide scalable solutions that can easily adapt to changing business needs. Our flexible architecture allows you to grow your business without compromising performance or security.",
        color: "dot-ochre",
      },
      {
        heading: "Ongoing Support & Maintenance",
        description:
          "We Our analytics capabilities enable you to gain valuable insights from vast amounts of data. Our advanced tools can pinpoint trends, detect anomalies, and predict customer behavior—allowing you to make informed decisions that drive growth.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  'fintech': {
    heroSection: {
      heading: "FinTech",
      description:
        "With our expertise and forward-thinking approach, your business can leverage technology and embrace innovation to reshape the future of finance.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/fintech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-fintech.jpg",
      },
      color: "dot-red",
    },
    pointers: [
      {
        heading: "Enhanced Security",
        description:
          "Our technology and protocols ensure that data stays encrypted, authentication is rigorous, cyber threats are addressed—and you can build trust with customers while complying with industry regulations.",
        color: "dot-red",
      },
      {
        heading: "Streamlined Processes",
        description:
          "Our UX/UI team creates design that make learning delightful and engaging. By considering students’ needs and preferences, we ensure that our clients’ applications are easy to navigate and visually stimulating.",
        color: "dot-wine",
      },
      {
        heading: "Scalable Infrastructure",
        description:
          "Our software, services, and consulting solutions enable you to achieve significant time and cost savings while improving productivity and delivering seamless user experiences to your customers.",
        color: "dot-ochre",
      },
      {
        heading: "Data Analytics and Insights",
        description:
          "We establish long-term relationships with our clients to ensure that the applications perform optimally and meet evolving user needs. Our dedicated team provides long-term support with troubleshooting, updates, and enhancements.",
        color: "dot-green",
      },
      {
        heading: "Regulatory Compliance",
        description:
          "We understand that regulations are necessary and have the expertise to help you with compliance. We keep you compliant so that you have the freedom to pursue new opportunities and innovation.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  'foodtech': {
    heroSection: {
      heading: "FoodTech",
      description:
        "With our forward-thinking approach, you can savor the benefits of improved processes, enhanced customization and seamless customer experiences and leave your competitors hungry for more.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/foodtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-foodtech.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Food Delivery Solutions",
        description:
          "Our food delivery solutions and route optimization algorithms optimize the entire process to ensure fast and efficient delivery and provide your customers with a seamless delivery experience.",
        color: "dot-red",
      },
      {
        heading: "Smart Menu Management",
        description:
          "Our user-friendly and intuitive tools empower businesses to manage offerings, track inventory, and make real-time updates. By employing our solutions, you can cater to changing consumer preferences and trends.",
        color: "dot-wine",
      },
      {
        heading: "Integrated Ordering & Payment",
        description:
          "We help you streamline the ordering process and increase order volumes so that you can enhance customer satisfaction and improve overall operational efficiency.",
        color: "dot-ochre",
      },
      {
        heading: "Data-Driven Insights",
        description:
          "We use advanced analytics tools to uncover hidden patterns in customer preferences, ordering patterns, and market trends. Our expertise in data analysis provides valuable insights that can help you grow your business.",
        color: "dot-iceblue",
      }
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  'insurtech': {
    heroSection: {
      heading: "InsurTech",
      description:
        "By automating processes, utilizing advanced analytics and AI tools, we enhance customer experience and security. Let’s create and innovate for insurance, from sunsets to moonshots!",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/foodtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-foodtech.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Automated Claims Processing",
        description:
          "Our solutions can automate the claims processing lifecycle, reducing human error and increasing efficiency to improve customer experience, reduce costs, and speed up the claims process.",
        color: "dot-red",
      },
      {
        heading: "Advanced Analytics and AI",
        description:
          "Gain competitive advantage with our advanced data analytics and AI solutions that can detect fraudulent claims, track losses and identify trends, improving underwriting accuracy and cost control.",
        color: "dot-wine",
      },
      {
        heading: "Seamless Customer Experience",
        description:
          "We help improve the entire customer journey, from quoting to claims management. Our solutions facilitate exceptional customer delight, leading to increased customer retention and loyalty.",
        color: "dot-ochre",
      },
      {
        heading: "Enhanced Security",
        description:
          "We help our clients build robust security measures that protect against fraud, identity theft, and data breaches. By partnering with us, your company can protect customer trust by staying compliant with industry regulations.",
        color: "dot-iceblue",
      }
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(pagesData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const pageData = pagesData[slug];

  return (
    <>
      <section className="relative pb-12 mb-28">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1 className={twMerge("text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-brown mb-1.5 tracking-tighter",pageData.heroSection.color)}>
                {pageData.heroSection.heading}
              </h1>
              <h4 className="max-w-[50rem] pt-5 text-xl leading-7 font-light lg:font-normal mb-1.5">
                {pageData.heroSection.description}
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="mt-10 mb-12 lg:mt-12 pl-[7vw]">
          <Image
            className="hidden max-w-full rounded-l-full lg:block"
            width={1920}
            height={599}
            src={pageData.heroSection.images.desktop}
            alt="Digital ventures image"
          />
          <Image
            className="block max-w-full rounded-l-full lg:hidden"
            width={800}
            height={517}
            src={pageData.heroSection.images.mobile}
            alt="Digital ventures image"
          />
        </div>
        <h4 className="block max-w-[50rem] -mb-16 font-light text-xl pro-container lg:hidden">
          {pageData.heroSection.description}
        </h4>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="flex flex-wrap -mb-[5%]">
            {pageData.pointers.map((data, index) => (
              <div key={data.heading} className="w-full lg:w-[28%] lg:mr-[5.3%] mb-12 lg:mb-[5%]">
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
      <div>
        <div className="pro-container mb-7">
          <h3 className={twMerge("dot",pageData.consultSection.styles.headingColor)}>{pageData.consultSection.heading}</h3>
          <h3 className={twMerge("dot",pageData.consultSection.styles.subHeadingColor)}>{pageData.consultSection.subHeading}</h3>
        </div>
        <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
          <div 
            className="rounded-r-full py-[7vw] text-white"
            style={{
              backgroundColor: pageData.consultSection.styles.backgroundColor
            }}
          >
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
}
