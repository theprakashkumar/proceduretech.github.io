import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      {children}
      <section className="mb-28">
        <div className="container-padding">
          <h3 className="dot dot-blue mb-1.5">Be Part of Promising</h3>
          <p className="max-w-4xl text-2xl mt-7 font-light">
            From brainstorm sessions to happy hours, there’s never a dull moment
            in the exciting and flexible work environment we’ve created.
          </p>
        </div>
        <div className="relative mt-[7vw] pr-[7vw]">
          <Image
            className="hidden rounded-r-full lg:block max-w-full"
            width={1920}
            height={579}
            src="/assets/about-join-us.jpg"
            alt="about team members"
          />
          <Image
            className="block rounded-r-full lg:hidden max-w-full"
            width={800}
            height={1000}
            src="/assets/mob-about-join-us-v3.jpg"
            alt="about team members"
          />
          <div className="absolute top-0 left-0 pt-16 max-w-16 z-5 pl-[7vw] flex flex-col sm:flex-row">
            <Link
              className="team-button animation-easein primary-button primary-button--blue"
              href="/contact/#consult"
            >
              Culture@Procedure
            </Link>
            <Link
              className="team-button animation-easein primary-button primary-button--green"
              href="/contact/#consult"
            >
              Team@Procedure
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
