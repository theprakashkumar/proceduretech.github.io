import Image from 'next/image'
import React from 'react'

type RoundedLeftImageProps = {
  desktop: string
  mobile: string
  alt?: string
}

const RoundedLeftImage = ({ desktop, mobile }: RoundedLeftImageProps) => {
  return (
    <div className="mt-10 mb-12 lg:mt-12 pl-[7vw]">
      <Image
        className="hidden max-w-full rounded-l-full lg:block"
        width={1920}
        height={599}
        src={desktop}
        alt="Digital ventures image"
      />
      <Image
        className="block max-w-full rounded-l-full lg:hidden"
        width={800}
        height={517}
        src={mobile}
        alt="Digital ventures image"
      />
    </div>
  )
}

export default RoundedLeftImage
