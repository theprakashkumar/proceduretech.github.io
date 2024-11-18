import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BlogCardProps = {
  date: string;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  imgClassName?: string;
};

const BlogCard = ({
  date,
  imgSrc,
  title,
  description,
  link,
  imgClassName,
}: BlogCardProps) => (
  <div className="w-full mb-24 sm:w-2/5 sm:mr-[10%] sm:mb-[10%]">
    <h6 className="mb-5">{date}</h6>
    <Image
      className={twMerge("rounded-r-full max-w-full", imgClassName)}
      width={700}
      height={700}
      src={imgSrc}
      alt="Case Study Thumbnail"
      priority
    />
    <h4 className="text-4xl mb-2.5 mt-5 text-gray-600">{title}</h4>
    <p className="mb-7">{description}</p>
    <Link
      className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right"
      href={link}
      target="_blank"
    >
      Read
    </Link>
  </div>
);

export default BlogCard;
