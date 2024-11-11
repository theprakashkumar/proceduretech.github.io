"use client";

import TabsSection from "@/components/TabsSection";
import { tabs } from "@/constants/constant";
import React, { useState } from "react";

const IndustriesTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="lg:pl-[7vw]">
      <div 
        className="bg-cover bg-center p-16 lg:pl-0 lg:py-28 lg:pr-[7vw] lg:rounded-l-full"
        style={{
          backgroundImage: `url('${tabs[selectedIndex].bgImage})`,
        }}
    >
        <TabsSection
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};

export default IndustriesTabs;
