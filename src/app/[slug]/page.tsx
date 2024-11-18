import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export const dynamicParams = false;
type PagesDataType = {
  heroSection: {
    heading: string;
    description: string;
    images: {
      desktop: string;
      mobile: string;
    };
    date: string;
    name: string;
  };
  subHeadings: string[];
  latestPosts: {
    date: string;
    name: string;
    imgSrc: string;
    title: string;
    description: string;
    link: string;
    imgClassName: string;
  }[];
  tags: {
    name: string;
    link: string;
  }[];
  author: {
    imgSrc: string;
    name: string;
    teamName: string;
  };
};

const pagesData: { [key: string]: PagesDataType } = {
  "frontend-performance-testing-best-practices": {
    heroSection: {
      heading: "Frontend Performance Testing: Best Practices",
      description:
        "Our complete suite of technology services to deliver better products, create stronger brands, new markets, and greater profitability through digital capabilities.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2022/11/blog1-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2022/11/mob-blog1-banner.webp",
      },
      date: "November 30, 2022",
      name: "Rizwan Memon",
    },
    subHeadings: [
      "You have been working hard to deliver all the features on the project, and suddenly one fine day the company’s Slack goes off with messages like “Our bundle is around 17MB”or “Our website is lacking speed”. You are scratching your head as to why you even got here in the first place. What did you miss?",
      "This blog will walk you through some best practices for Frontend Performance and Testing. It will walk you through metrics you can calculate on your CI/CD pipelines to avoid those surprise attacks related to performance issues and React best practices for an optimized bundle.",
    ],
    latestPosts: [
      {
        date: "May 26, 2022",
        name: "Rucheta Gogte",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Why Robot Framework",
        description:
          "If you are trying to identify what are the best automation frameworks out there, we…",
        link: "https://procedure.tech/why-robot-framework/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "January 3, 2022",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/resources-blog4.webp?fit=800%2C800&ssl=1",
        title: "Reducing our Deployment times by 87%",
        description:
          "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with…",
        link: "https://procedure.tech/reducing-our-deployment-times-by-87/",
        imgClassName: "rounded-r-none rounded-tr-full rounded-tl-full",
      },
      {
        date: "June 10, 2021",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2021/06/resources-blog2.webp?fit=800%2C800&ssl=1",
        title: "Connecting Django to RDS via pgbouncer using IAM auth",
        description:
          "To connect Django to RDS via using IAM, you'll need an OIDC provider and a…",
        link: "https://procedure.tech/connecting-django-to-rds-via-pgbouncer-using-iam-auth/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-tl-full",
      },
    ],
    tags: [
      {
        name: "Pipelines",
        link: "https://procedure.tech/tag/pipelines/",
      },
      {
        name: "react",
        link: "https://procedure.tech/tag/react/",
      },
      {
        name: "Slack",
        link: "https://procedure.tech/tag/slack/",
      },
      {
        name: "Frontend",
        link: "https://procedure.tech/tag/frontend/",
      },
      {
        name: "CI/CD",
        link: "https://procedure.tech/tag/ci-cd/",
      },
    ],
    author: {
      imgSrc: "https://procedure.tech/wp-content/uploads/2022/11/rizwan.jpg",
      name: "Rizwan Memon",
      teamName: "Tech@Procedure",
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
      <section className="relative pb-12 lg:pb-0">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar
              textColorType="white"
              className="w-full sm:w-[90%] text-white lg:w-[90%]"
            >
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 dot mb-1.5 tracking-tighter"
                )}
              >
                {pageData.heroSection.heading}
              </h1>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className=" max-w-full "
            width={1920}
            height={599}
            src={pageData.heroSection.images.desktop}
            alt="Blog Header image"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            className="block max-w-full w-full lg:hidden"
            width={800}
            height={1400}
            src={pageData.heroSection.images.mobile}
            alt="Blog Header image"
          />
        </div>
        <div className="absolute opacity-70 bottom-24 lg:bottom-[4vw] z-[3] text-lg text-white">
          <div className="container-padding">
            {`${pageData.heroSection.date} | ${pageData.heroSection.name}`}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container-padding">
          <div className="mt-[7vw] flex flex-wrap pb-7 lg:border-b lg:border-b-black/20">
            <div className="w-full mr-0 mb-12 lg:mb-0 lg:w-[65%] lg:mr-[5%]">
              {pageData.subHeadings.map((data, index) => (
                <h2 key={index} className="text-xl lg:text-3xl mb-14">
                  {data}
                </h2>
              ))}
            </div>
            <div className="lg:w-[30%] mr-0 pt-5 border-none lg:border-t border-t-black/20">
              <h4 className="text-4xl mb-10 mt-5 text-[#505050] font-semibold">
                Latest Posts
              </h4>
              <div className="border-b border-b-black/20 pb-5 mb-10">
                {pageData.latestPosts.map((post, index) => (
                  <div key={index} className="mb-10">
                    <h6 className="text-sm opacity-75 mb-1.5 font-normal">{`${post.date} | ${post.name}`}</h6>
                    <h5 className="text-xl mb-2.5 text-[#212529] font-medium">{post.title}</h5>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden my-0 mx-auto py-16 px-0 cursor-default pointer-events-none lg:block">
        <div className="container-padding">
          <Link className="relative left-0 flex items-center" href="#">
            <Image
              width={500}
              height={500}
              className="w-20 h-20 rounded-full mr-5 max-w-full"
              src={pageData.author.imgSrc}
              alt={pageData.author.name}
            />
            <div className="">
              <h5 className="text-xl font-semibold">{pageData.author.name}</h5>
              <p className="text-sm">{pageData.author.teamName}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
