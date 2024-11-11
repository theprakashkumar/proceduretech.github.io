import BlogSection from "@/components/BlogSection";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <BlogSection />
    </>
  );
};

export default Layout;
