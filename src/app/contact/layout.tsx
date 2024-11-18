import BlogSection from "@/components/BlogSection";
import JoinProcedure from "@/components/JoinProcedure";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <JoinProcedure />
      <BlogSection />
    </>
  );
};

export default Layout;
