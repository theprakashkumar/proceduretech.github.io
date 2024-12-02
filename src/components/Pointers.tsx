import React from 'react'
import { PointersType } from '@/data/types'
import PointerCard from './PointerCard'

type PointersProps = {
  title?: string
  pointers: PointersType[]
  eachElementClassName?: string
}

const Pointers = ({ title, pointers, eachElementClassName }: PointersProps) => {
  return (
    <section className="mb-28">
      <div className="container-padding">
        {title && <h2 className="mb-12">{title}</h2>}
        <div className="flex flex-wrap -mb-[5%]">
          {pointers.map((data, index) => (
            <PointerCard
              key={data.heading}
              data={data}
              index={index}
              eachElementClassName={eachElementClassName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pointers
