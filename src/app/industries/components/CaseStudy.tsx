import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CaseStudyProps = {
  date: string;
  imgSrc: string;
  title: string;
  sector: string;
  services: string;
  link: string;
  className?: string;
};

const CaseStudy = ({
  date,
  imgSrc,
  title,
  sector,
  services,
  link,
  className,
}: CaseStudyProps) => (
  <div className="w-full mb-24 sm:w-2/5 sm:mr-[10%] sm:mb-[10%]">
    <h6 className="mb-5">{date}</h6>
    <Image
      className={twMerge("rounded-r-full max-w-full", className)}
      width={700}
      height={700}
      src={imgSrc}
      alt="Case Study Thumbnail"
      priority
    />
    <h4 className="text-4xl mb-2.5 mt-5 text-gray-600">{title}</h4>
    <p className="mb-7">
      <strong>Sector:</strong> {sector}
      <br />
      <strong>Services:</strong> {services}
    </p>
    <Link
      className="text-sm bg-white text-black rounded-full shadow-md px-6 py-2.5 animation-easein-slow shift-to-right"
      href={link}
      target="_blank"
    >
      Download
    </Link>
  </div>
);

export default CaseStudy;
