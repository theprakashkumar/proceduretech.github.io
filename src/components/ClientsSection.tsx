import React from 'react'
import Image from 'next/image'
import { clientsData } from '@/constants/constant'

type ClientsSection = {
  className?: string
}

const ClientsSection = ({ className }: ClientsSection) => {
  return (
    <section className={className}>
      <div className="container-padding">
        <h3>Our Clients</h3>
        <div className="mt-12 flex flex-wrap">
          {clientsData.map((url, index) => (
            <Image
              className="w-1/3 sm:w-[10%] lg:w-[14.2%] max-w-full"
              width={480}
              height={216}
              src={url}
              key={index}
              alt="Treebo"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
