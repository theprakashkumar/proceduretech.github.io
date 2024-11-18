import HoverImage from "@/app/components/HoverImage";
import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const dynamicParams = false;
type pagesDataType = {
  heroSection: {
    name: string;
    role: string;
    style: {
      nameColor: string;
    };
    linkedin: string;
    twitter: string;
  };
  profileSection: {
    heading: string;
    hashTags: string;
    imageUrl: string;
    backgroundColor: string;
    subHeading: string;
    paragraphs: string[];
  };
  teamMembersData: {
    name: string;
    position: string;
    image1: string;
    image2: string;
    href: string;
    color: string;
  }[];
};

const pagesData: { [key: string]: pagesDataType } = {
  "ulhas-mandrawadkar": {
    heroSection: {
      name: "Ulhas Mandrawadkar",
      role: "Co-Founder and CTO",
      style: {
        nameColor: "dot-red",
      },
      linkedin: "https://www.linkedin.com/in/ulhasm/",
      twitter: "https://twitter.com/ulhas_sm/",
    },
    profileSection: {
      heading:
        "“Innovation happens when we dare to step outside our comfort zone and explore the unknown.”",
      hashTags: "#technogeek #podcaster #futurist #pro",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/ulhas-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "With Ulhas at the helm, innovation is propelled into uncharted territories, promising a future brimming with technological marvels that reshape the landscape of Procedure. His vision has been recognized by the international community, leading him to win multiple awards and accolades for his contributions in the field of innovation.",
      paragraphs: [
        "Ulhas began his journey as an iOS developer at Xoriant Solutions, where he honed his skills and creativity. Later, he worked at Chalo, a company acquired by OpenTable, where he architected the iPhone application for mobile payments and collaborated on implementing secret features alongside the Apple marketing team.",
        "As an early engineer at HyperTrack, he developed location tracking SDKs for iOS and Android, simplifying installation and providing tutorials for fellow engineers.",
        "A Bachelor of Engineering from Mumbai University, Ulhas is a strong advocate for clean coding practices, customer-centricity, and believes in the power of unit testing and behavior-driven development. He has contributed to open-source projects such as OpenLocate iOS and Android SDKs, Django Push Notifications, and Fastlane – an open-source build tool for iOS and Android.",
        "Ulhas’s revolutionary work on integrating OpenTable’s payment module with their booking system catalyzed a momentous milestone. His accomplishments graced the illustrious stage of the Apple Pay keynote, commandeered by the visionary duo, Tim Cook and Eddy Cue. Furthermore, his transformative ideas and technical prowess have earned him the esteemed recognition as a co-inventor on a patent detailing the seamless workflow of a payment system intertwined with OpenTable’s prodigious booking product.",
      ],
      backgroundColor: "bg-blue",
    },
    teamMembersData: [
      {
        name: "Braj Baheti",
        position: "Co-Founder and CEO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
        href: "/about/braj-baheti",
        color: "bg-green",
      },
      {
        name: "Renuka Rode",
        position: "General Manager",
        image1:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
        image2:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
        href: "/about/renuka-rode",
        color: "bg-brickred",
      },
    ],
  },
  'braj-baheti': {
    heroSection: {
      name: "Braj Baheti",
      role: "Co-Founder and CEO",
      style: {
        nameColor: "dot-blue",
      },
      linkedin: "https://www.linkedin.com/in/brajkishorb/",
      twitter: "https://twitter.com/BrajkishorB/",
    },
    profileSection: {
      heading:
        "“Blend the art of technology with science of product management to build a masterpiece.”",
      hashTags: "#innovisionary #alchemist #automationguru #pro",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/braj-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "Braj’s story of inception is nothing short of extraordinary. With an unwavering determination and a mind wired for forward thinking, his journey to co-founding Procedure is a testament to his ingenuity and passion for solving complex problems with technology.",
      paragraphs: [
        'While he qualified as a Chartered Accountant in November 2011, Braj had begun his professional journey at EY in the risk advisory function. Armed with an acute eye for detail and a thirst for innovative processes, he automated numerous standard audit checks and began to envision how technology could revolutionize the industry.',
        'Braj left EY to join a Quantitative Trading Desk in Singapore, where he continued to expand his experience in designing state-of-the-art systems for data warehousing and constructing intricate trading strategies. This inspired him to explore code-driven solutions—and the universe of possibilities they opened up.',
        'Eager to share his passion for automation and process optimization, Braj founded Let Us Excel, breathing life into his vision of automating manual data processing, eradicating the errors that hindered businesses, and empowering employees with Excel proficiency. This pursuit unveiled a profound truth—the need for elegant execution and the missing layer of consulting and product management in the tech industry.',
        'Determined to fill this void, he embarked on a quest to find a tech co-founder who shared his unwavering commitment to building remarkable, game-changing solutions. Destiny intervened, as Braj crossed paths with Ulhas, a fellow visionary on a parallel voyage. Finding an instant harmony in their shared vision, Procedure was brought to life. As a co-founder, Braj continues to drive Procedure’s audacious ambition to reshape the landscape of cutting-edge solutions and thirst for delivering digital engineering masterpieces.'
      ],
      backgroundColor: "bg-green",
    },
    teamMembersData: [
      {
        name: "Renuka Rode",
        position: "General Manager",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
        href: "/about/renuka-rode",
        color: "bg-brickred",
      },
      {
        name: "Ulhas Mandrawadkar",
        position: "Co-Founder and CTO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
        href: "/about/ulhas-mandrawadkar",
        color: "bg-blue",
      },

    ]
  },
  'renuka-rode': {
    heroSection: {
      name: "Renuka Rode",
      role: "General Manager",
      style: {
        nameColor: "dot-green",
      },
      linkedin: "https://www.linkedin.com/in/renuka-rode-6516a8117/",
      twitter: "https://twitter.com/renukarode/",
    },
    profileSection: {
      heading:
        "“To produce excellence without boundaries, infuse talent with larger-picture thinking.”",
      hashTags: "#OPSmaestro #QApro #projectguru #efficiencyninja",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/renuka-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "Renuka’s true strength lies in her ability to infuse innovation into every facet of Procedure’s operations. She champions marketing initiatives as well as talent engagement projects, diving right in to take charge of them all—setting up new systems and managing from scratch anything that demands attention.",
      paragraphs: [
        'As an experienced Scrum Master, Renuka also manages crucial projects and works closely with the team to align them on deliverables and expectations and ensures smooth delivery.',
        'In her prior role as a consultant at Capgemini, she provided valuable insights and recommendations to esteemed clients, contributing to their digital transformation journeys. Her ability to meticulously navigate complex projects and deliver pragmatic solutions earned her recognition for her exceptional management skills.',
        'As a Bachelor of Engineering from Mumbai University, she is guided by her visionary mindset for a harmonious blend of cross-functional collaboration to achieve precision. By embracing cutting-edge technologies and cultivating a culture of continuous improvement, Renuka aims to position Procedure as a pioneer in the industry, inspiring others to reimagine what is achievable.'
      ],
      backgroundColor: "bg-brickred",
    },
    teamMembersData: [
      {
        name: "Braj Baheti",
        position: "Co-Founder and CEO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
        href: "/about/braj-baheti",
        color: "bg-green",
      },
      {
        name: "Ulhas Mandrawadkar",
        position: "Co-Founder and CTO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
        href: "/about/ulhas-mandrawadkar",
        color: "bg-blue",
      },
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
                  pageData.heroSection.style.nameColor
                )}
              >
                {pageData.heroSection.name}
              </h1>
              <h4 className="max-w-3xl pt-5 mb-1.5 text-xl font-normal">
                Co-Founder and CTO
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="mt-28 -mb-12 lg:mb-0 lg:mt-12 lg:pl-[7vw]">
          <div className={twMerge("flex flex-wrap rounded-none pt-12 lg:pt-0 lg:flex-nowrap justify-evenly items-center lg:rounded-l-full bg-blue",pageData.profileSection.backgroundColor)}>
            <div className="max-w-xl px-[7vw] lg:px-0 lg:ml-[4%]">
              <h3 className="text-2xl lg:text-4xl font-light mb-1.5">
                {pageData.profileSection.heading}
              </h3>
              <p className="text-xl mt-12 font-light mb-2.5">
                {pageData.profileSection.hashTags}
              </p>
            </div>
            <Image
              className="max-w-full lg:max-w-md self-end"
              width={800}
              height={800}
              src={pageData.profileSection.imageUrl}
              alt="profile photo"
            />
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="max-w-4xl">
            <h4 className="text-xl mb-14 font-semibold">
              {pageData.profileSection.subHeading}
            </h4>
            {pageData.profileSection.paragraphs.map((data, index) => (
              <p key={index} className="text-xl mb-8">
                {data}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mb-28">
        {pageData.teamMembersData.map((member) => (
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
      </section>
    </>
  );
}
