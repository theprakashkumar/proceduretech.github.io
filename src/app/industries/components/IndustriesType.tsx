import { industriesData } from '@/data'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const IndustriesType = () => {
  return (
    <section className="mb-28">
      <div className="container-padding">
        <div className="flex flex-wrap -mb-[5%]">
          {industriesData.map(data => (
            <div
              key={data.title}
              className="w-full lg:w-[45%] lg:mr-[5%] mb-12 pb-10 border-b border-b-black/10"
            >
              <h3 className={twMerge('dot dot-green', data.color)}>
                {data.title}
              </h3>
              <p className="mt-5 mb-9">{data.description}</p>
              <Link className="primary-button bg-white" href={data.href}>
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesType
