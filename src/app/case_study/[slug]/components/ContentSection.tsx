import PointerCard from '@/components/PointerCard'
import { CaseStudiesDataType } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type ContentSectionProps = {
  pageData: CaseStudiesDataType
}

const ContentSection = ({ pageData }: ContentSectionProps) => {
  return (
    <div className="w-full mr-0 mb-12 border-b border-b-black/20 lg:border-0 lg:mb-0 lg:w-[65%] lg:mr-[5%]">
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Sector
      </h4>
      <p className="mb-14 font-light">{pageData.name}</p>
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Services
      </h4>
      <div className="flex flex-wrap pb-10">
        {pageData.services.map(service => (
          <Link
            key={service.link}
            className="py-1.5 px-5 bg-[#D0D0D0] mr-2.5 mb-2.5 rounded-full border-none text-sm relative animation-easein-slow left-0 hover:bg-[rgba(208,208,208,0.3)]"
            href={service.link}
          >
            {service.name}
          </Link>
        ))}
      </div>
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Overview
      </h4>
      {pageData.content.overview.map((data, index) => (
        <p
          key={`overview-${index}`}
          className={twMerge('mb-14 font-light', index !== 0 && '-mt-7')}
        >
          {data}
        </p>
      ))}
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Business Challenge
      </h4>
      {pageData.content.challenge.map((data, index) => (
        <p
          key={`challenge-${index}`}
          className={twMerge('mb-14 font-light', index !== 0 && '-mt-7')}
        >
          {data}
        </p>
      ))}
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Approach
      </h4>
      {pageData.content.approach.map((data, index) => (
        <p
          key={`approach-${index}`}
          className={twMerge('mb-14 font-light', index !== 0 && '-mt-7')}
        >
          {data}
        </p>
      ))}
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Solution
      </h4>
      <div className="flex flex-wrap mb-7">
        {pageData.content.solution.map((data, index) => (
          <PointerCard
            key={data.heading}
            data={data}
            index={index}
            headingClassName="text-base font-semibold"
          />
        ))}
      </div>
      <h4 className="text-4xl mb-2.5 mt-5 text-[#505050] font-semibold">
        Impact & Results
      </h4>
      {pageData.content.impactAndResult.map((data, index) => (
        <p
          key={`impactAndResult-${index}`}
          className={twMerge('mb-14 font-light', index !== 0 && '-mt-7')}
        >
          {data}
        </p>
      ))}
      <h6 className="text-lg font-medium mt-24 mb-5">Share</h6>
      <ul className="text-base flex gap-5 font-light m-0 pb-5">
        {pageData.socialLinks.map(social => (
          <li className="inline list-none" key={social.href}>
            <Link className="py-2.5 mr-4" href={social.href}>
              <Image
                className="max-w-9"
                width={38}
                height={38}
                src={social.src}
                alt={social.alt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentSection
