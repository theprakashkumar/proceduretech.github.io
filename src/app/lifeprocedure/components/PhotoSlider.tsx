'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

type PhotoSliderProps = {
  photoData: string[]
}

const PhotoSlider = ({ photoData }: PhotoSliderProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (photoData.length <= 1) return
    const interval = setInterval(() => {
      setSelectedIndex(prev => (prev + 1 >= photoData.length ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [photoData.length])

  return (
    <div className="relative mt-[7vw] pr-[7vw]">
      <TabGroup
        onChange={setSelectedIndex}
        selectedIndex={selectedIndex}
        className="-mt-16 lg:mt-0 mb-28 relative block"
      >
        <TabPanels>
          {photoData.map((data, index) => (
            <TabPanel key={data}>
              <Image
                width={1700}
                height={752}
                className="block rounded-r-full"
                src={data}
                alt={`Slide ${index + 1}`}
                priority={index === 0}
              />
            </TabPanel>
          ))}
        </TabPanels>
        <TabList className="-bottom-9 absolute block w-full p-0 m-0 list-none text-center">
          {photoData.map(data => (
            <Tab
              key={`tab-${data}`}
              className="mx-1.5 h-3 w-3 bg-black rounded-full opacity-25 text-xs font-semibold text-white focus:outline-none data-[selected]:opacity-75  data-[focus]:outline-1 data-[focus]:outline-white"
            ></Tab>
          ))}
        </TabList>
      </TabGroup>
    </div>
  )
}

export default PhotoSlider
