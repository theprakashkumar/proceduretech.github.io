import { PostType, TagsType } from '@/data/types'
import Link from 'next/link'
import React from 'react'

type RightSectionProps = {
  latestPosts: PostType[]
  tags: TagsType[]
}

const RightSection = ({ latestPosts, tags }: RightSectionProps) => {
  return (
    <div className="lg:w-[30%] mr-0 pt-5 border-t-0 lg:border-t lg:border-t-black/20">
      <h4 className="text-4xl mb-10 mt-5 text-[#505050] font-semibold">
        Latest Posts
      </h4>
      <div className="border-b border-b-black/20 pb-5 mb-10">
        {latestPosts.map((post, index) => (
          <div key={index} className="mb-10">
            <h6 className="text-sm opacity-75 mb-1.5 font-normal">{`${post.date} | ${post.name}`}</h6>
            <h5 className="text-xl mb-2.5 text-[#212529] font-medium">
              {post.title}
            </h5>
            <p className="text-sm mb-5 font-light">{post.description}</p>
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
        {tags.map(tag => (
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
  )
}

export default RightSection
