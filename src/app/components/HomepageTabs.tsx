"use client";

import React, { useState } from "react";
import { tabs } from "@/constants/constant";
import TabsSection from "@/components/TabsSection";

const HomepageTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="bg-cover bg-center py-16 lg:pt-28 lg:pb-36"
      style={{
        backgroundImage: `url(${tabs[selectedIndex].bgImage})`,
      }}
    >
      <div className="container-padding">
        <TabsSection
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};

export default HomepageTabs;
