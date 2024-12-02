import BlogSection from '@/components/BlogSection'
import JoinProcedure from '@/components/JoinProcedure'
import React from 'react'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      {children}
      {/* join procedure section */}
      <section className="mb-28">
        <div className="container-padding">
          <h3>Join the Pros</h3>
          <JoinProcedure />
        </div>
      </section>
      <BlogSection />
    </>
  )
}

export default Layout
