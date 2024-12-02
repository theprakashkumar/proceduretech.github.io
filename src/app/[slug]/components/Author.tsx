import { AuthorDataType } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type AuthorProps = {
  authorData: AuthorDataType
}

const Author = ({ authorData }: AuthorProps) => {
  return (
    <div className="container-padding">
      <Link className="relative left-0 flex items-center" href="#">
        <Image
          width={500}
          height={500}
          className="w-20 h-20 rounded-full mr-5 max-w-full"
          src={authorData.imgSrc}
          alt={authorData.name}
        />
        <div className="">
          <h5 className="text-xl font-semibold">{authorData.name}</h5>
          <p className="text-sm">{authorData.teamName}</p>
        </div>
      </Link>
    </div>
  )
}

export default Author
