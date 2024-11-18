import PageNavbar from "@/components/PageNavbar";
import React from "react";
import { twMerge } from "tailwind-merge";
import CaseStudy from "../components/CaseStudy";

const Page = () => {
  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="container-padding">
          <PageNavbar className="static mt-14 lg:w-full">
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot dot-blue"
              )}
            >
              Case Studies
            </h1>
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-green"
              )}
            >
              Proof in Action
            </h1>
          </PageNavbar>
        </div>
      </section>
      <section className="mb-28">
        <div className="container-padding">
          <div className="flex flex-wrap -mb-12">
            <CaseStudy
              date="August 24, 2023"
              imgSrc="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/plum-case-study.webp?fit=700%2C700&ssl=1"
              title="Streamlining Crisis Communication for Enhanced Coordination & Effective Response"
              sector="Crisis Communication"
              services="UI & UX, Process Consulting, Innovation"
              link="https://procedure.tech/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/"
            />
            <CaseStudy
              date="August 24, 2023"
              imgSrc="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/espn-case-study.webp?fit=700%2C700&ssl=1"
              title="A FinTech Platform for Simplifying Bulk Payments and Reshaping Businesses"
              sector="FinTech"
              services="UX & UI, Product Engineering, Process Consulting"
              link="https://procedure.tech/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/"
              className="rounded-r-none rounded-bl-full rounded-br-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
