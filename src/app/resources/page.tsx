import BlogCard from "@/components/BlogCard";
import PageNavbar from "@/components/PageNavbar";
import React from "react";
import { twMerge } from "tailwind-merge";

const blogsData = [
  {
    date: "November 30, 2022",
    name: "Rizwan Memon",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/plum-case-study.webp?fit=700%2C700&ssl=1",
    title: "Frontend Performance Testing: Best Practices",
    description:
      "You have been working hard to deliver all the features on the project, and suddenly…",
    link: "https://procedure.tech/frontend-performance-testing-best-practices/",
  },
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
];

const Page = () => {
  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="pro-container">
          <PageNavbar className="static mt-14 lg:w-full">
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot dot-blue"
              )}
            >
              Resources
            </h1>
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-red"
              )}
            >
              Blogs & Insights
            </h1>
          </PageNavbar>
        </div>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="flex flex-wrap -mb-12">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.title}
                date={blog.date}
                imgSrc={blog.imgSrc}
                title={blog.title}
                description={blog.description}
                link={blog.link}
                imgClassName={blog.imgClassName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
