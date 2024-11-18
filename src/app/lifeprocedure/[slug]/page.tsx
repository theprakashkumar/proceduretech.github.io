import HoverImage from "@/app/components/HoverImage";
import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PhotoSlider from "../components/PhotoSlider";

export const dynamicParams = false;
type pagesDataType = {
  heroSection: {
    heading: string;
    subHeading: string;
    style: {
      headingColor: string;
      subHeadingColor: string;
    };
  };
  profileOne: {
    name: string;
    description: string;
    imageUrl: string;
    color: string;
  };
  profileTwo: {
    name: string;
    description: string;
    imageUrl: string;
    color: string;
  };
  sectionImageOne: {
    desktop: string;
    mobile: string;
  };
  sectionImageTwo: {
    desktop: string;
    mobile: string;
  };
  pointersTitle: string;
  pointers: {
    heading: string;
    description: string;
    color: string;
  }[];
  photoSliders: string[];
};

const pagesData: { [key: string]: pagesDataType } = {
  'cultureprocedure': {
    heroSection: {
      heading: "Where Heart",
      subHeading: "Meets Hustle",
      style: {
        headingColor: "",
        subHeadingColor: "dot-red",
      },
    },
    profileOne: {
      name: "Pooja Dabade",
      description:
        "Procedure’s culture encourages everyone to contribute their unique insights and ideas. This leads us to learn from each other and continually improve—creating a dynamic workplace.",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/09/culture1-bw.jpg",
      color: 'bg-green'
    },
    profileTwo: {
      name: "Mohit Kumar",
      description:
        "At Procedure, teamwork leads to trust. The challenge of work is part of every job—but the diverse team I worked with here made me think outside my box and find lifelong friends.",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/09/culture2-bw.jpg",
      color: 'bg-brickred'
    },
    sectionImageOne: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/culture-capsule2.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-culture-capsule2.jpg",
    },
    sectionImageTwo: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/culture-capsule3.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-culture-capsule3.jpg",
    },
    pointersTitle: "Be a Part of Promising",
    pointers: [
      {
        heading: "Openness",
        description:
          "We believe in fostering a culture of openness because creativity flourishes when we’re not hemmed in by tradition and held back by the fear that our ideas may be ridiculed.",
        color: "dot-wine",
      },
      {
        heading: "Innovation",
        description:
          "Embracing the ever-evolving world of technology, we strive to be at the forefront of innovation, constantly pushing boundaries and redefining what’s possible.",
        color: "dot-ochre",
      },
      {
        heading: "Pragmatism",
        description:
          "We approach challenges with a practical mindset, finding smart and efficient solutions that deliver tangible results and focus on driving meaningful change.",
        color: "dot-brown",
      },
      {
        heading: "Agility",
        description:
          "In the fast-paced world of technology, we adapt and move swiftly to ensure that our strategies are flexible and our actions nimble.",
        color: "dot-green",
      },
      {
        heading: "Trust",
        description:
          "Trust is the cornerstone of our relationships, because we know that when we work together, we can achieve remarkable outcomes.",
        color: "dot-iceblue",
      },
    ],
    photoSliders: [
      'https://procedure.tech/wp-content/uploads/2023/10/culture1-v2.webp',
      'https://procedure.tech/wp-content/uploads/2023/10/culture2-v2.webp',
      'https://procedure.tech/wp-content/uploads/2023/10/culture3-v2.webp'
    ]
  },
  'teamprocedure': {
    heroSection: {
      heading: "Upgrade to Pro",
      subHeading: "Join Us",
      style: {
        headingColor: "dot-blue",
        subHeadingColor: "dot-green",
      },
    },
    profileOne: {
      name: "Adarsh Udayan",
      description:
        "I enjoy working at Procedure because the team spirit and can-do energy are so infectious. Every project teaches me something new, and it’s amazing how much you can achieve when you’re all working together!",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/10/team-capsule1.jpg",
      color: 'bg-brickred'
    },
    profileTwo: {
      name: "Rachel Salunke",
      description:
        "The best part about working at Procedure is the teamwork that leads to unique creativity. Solving design challenges with a diverse set of people leads to far better solutions and ideas.",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/09/team4.jpg",
      color: 'bg-blue'
    },
    sectionImageOne: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/team-capsule2.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-team-capsule2.jpg",
    },
    sectionImageTwo: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/team-capsule3.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-team-capsule3.jpg",
    },
    pointersTitle: "Why work with Procedure?",
    pointers: [
      {
        heading: "Passion",
        description:
          "Working in our dynamic and forward-thinking environment needs people who enjoy thinking out of the box and relish the challenge of a fast moving world of tech innovation.",
        color: "dot-wine",
      },
      {
        heading: "Team Play",
        description:
          "Collaboration Power is at the heart of our culture, fostering an atmosphere where diverse ideas merge to pave the way for groundbreaking solutions, bringing out the best in everyone.",
        color: "dot-ochre",
      },
      {
        heading: "Curiosity",
        description:
          "Becoming a team of experts is about staying on the cutting-edge of the latest technological advancements and being intellectually curious and always eager to learn.",
        color: "dot-brown",
      },
      {
        heading: "Solution Focus",
        description:
          "Results-Oriented Mindset: We are problem solvers with an innate ability to devise ingenious solutions to overcome obstacles.",
        color: "dot-green",
      },
      {
        heading: "Fun",
        description:
          "When team members are having fun, they’re more motivated, creative, and productive, leading to exceptional work culture.",
        color: "dot-iceblue",
      },
    ],
    photoSliders: [
      'https://procedure.tech/wp-content/uploads/2023/10/work1-v2.webp',
      'https://procedure.tech/wp-content/uploads/2023/10/work2-v2-1.webp',
      'https://procedure.tech/wp-content/uploads/2023/10/work3-v2-1.webp'
    ]
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
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot",
                  pageData.heroSection.style.headingColor
                )}
              >
                {pageData.heroSection.heading}
              </h1>
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot",
                  pageData.heroSection.style.subHeadingColor
                )}
              >
                 {pageData.heroSection.subHeading}
              </h1>
            </PageNavbar>
          </div>
        </div>
      </section>
      <section className="-mt-24 lg:mt-0 mb-28">
        <div
          className={twMerge(
            "flex items-center justify-between overflow-hidden h-auto pt-12 lg:pt-0 m-0 lg:h-96 px-[7vw] lg:rounded-r-full lg:mr-[calc(7vw*_3)]",
            pageData.profileOne.color
          )}
        >
          <div className="mx-auto p-0 lg:m-0">
            <h4 className="text-3xl mb-5">{pageData.profileOne.name}</h4>
            <p className="max-w-[22.5rem] font-light mb-8">
              {pageData.profileOne.description}
            </p>
          </div>
          <HoverImage
            img1={pageData.profileOne.imageUrl}
            img2={pageData.profileOne.imageUrl}
            className="m-auto lg:m-0 lg:even:ml-[7vw] lg:odd:mr-[7vw] max-w-[25rem] max-h-full self-end"
          />
        </div>
        <div className="block h-auto overflow-hidden lg:ml-[calc(7vw*_3)]">
          <Image className="rounded-l-full" width={1920} height={600} src={pageData.sectionImageOne.desktop} alt='desktop image for mobile' />
          <Image className="hidden" width={1920} height={600} src={pageData.sectionImageOne.mobile} alt='desktop image for mobile' />
        </div>
        <div className="block h-auto overflow-hidden lg:mr-[calc(7vw*_3)]">
          <Image className="rounded-r-full" width={1920} height={600} src={pageData.sectionImageTwo.desktop} alt='desktop image for mobile' />
          <Image className="hidden" width={1920} height={600} src={pageData.sectionImageTwo.mobile} alt='desktop image for mobile' />
        </div>
        <div
          className={twMerge(
            "flex items-center flex-row-reverse justify-between overflow-hidden h-auto pt-12 lg:pt-0 m-0 lg:h-96 px-[7vw] lg:rounded-l-full lg:ml-[calc(7vw*_3)]",
            pageData.profileTwo.color
          )}
        >
          <div className="mx-auto p-0 lg:m-0">
            <h4 className="text-3xl mb-5">{pageData.profileTwo.name}</h4>
            <p className="max-w-[22.5rem] font-light mb-8">
              {pageData.profileTwo.description}
            </p>
          </div>
          <HoverImage
            img1={pageData.profileTwo.imageUrl}
            img2={pageData.profileTwo.imageUrl}
            className="m-auto lg:m-0 lg:even:ml-[7vw] lg:odd:mr-[7vw] max-w-[25rem] max-h-full self-end"
          />
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="flex flex-wrap -mb-[5%]">
            {pageData.pointers.map((data, index) => (
              <div
                key={data.heading}
                className="w-full lg:w-[28%] lg:mr-[5.3%] mb-12 lg:mb-[5%]"
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
      <section className="mb-28">
        <PhotoSlider photoData={pageData.photoSliders} />
      </section>
    </>
  );
}
