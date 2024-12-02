import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type BlogCardProps = {
  date: string
  imgSrc: string
  title: string
  description: string
  link: string
  imgClassName?: string
}

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
      className={twMerge('rounded-r-full max-w-full', imgClassName)}
      width={700}
      height={700}
      src={imgSrc}
      alt="Case Study Thumbnail"
      priority
    />
    <h4 className="text-4xl mb-2.5 mt-5 text-gray-600">{title}</h4>
    <p className="mb-7">{description}</p>
    <Link className="primary-button bg-white" href={link} target="_blank">
      Read
    </Link>
  </div>
)

export default BlogCard
