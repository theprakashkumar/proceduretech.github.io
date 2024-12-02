import { aboutPageMembersData } from '@/data'
import Link from 'next/link'
import React from 'react'
import TeamCard from './TeamCard'

const TeamsData = () => {
  return (
    <section className="flex flex-wrap">
      {aboutPageMembersData.map(member => (
        <TeamCard key={member.name} member={member} />
      ))}
      <div className="flex odd:px-[7vw] even:px-[7vw] lg:odd:pl-[7vw] lg:odd:pr-[calc(7vw_/_2)] lg:even:pr-[7vw] lg:even:pl-[calc(7vw_/_2_+_1rem)] h-auto flex-wrap lg:flex-nowrap lg:h-[18.75rem] w-full lg:w-6/12 animation-easein-slow flex-col justify-center items-start bg-black/60 text-white py-14 lg:py-0">
        <h4 className="text-3xl font-normal mb-1.5">
          Progressive, Proactive & Pro-fun
        </h4>
        <p className="mb-12 max-w-md font-extralight text-lg">
          A passionate team committed to push the boundaries of technology with
          the world’s best coffee.
        </p>
        <Link className="primary-button bg-white" href="/lifeprocedure/">
          Life@Procedure
        </Link>
      </div>
    </section>
  )
}

export default TeamsData
