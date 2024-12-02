'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const style = {
  dark: {
    input: 'bg-black text-white/50 border-white/30',
    button: 'bg-white',
  },
  light: {
    input: 'input-white bg-white text-[#212529] border-[#249F6B]',
    button: 'bg-green-600/50',
  },
}

type JoinProcedureProps = {
  type?: keyof typeof style
}

const options = ['Design Team', 'Tech Team', 'Other']

const JoinProcedure = ({ type = 'light' }: JoinProcedureProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <>
      <p className="max-w-[56.25rem] mb-7 font-light opacity-80 tracking-tight">
        From brainstorm sessions to happy hours, there’s never a dull moment in
        the exciting and flexible work environment we’ve created. Send us your
        resume to know opportunities for going Pro and stay in touch, you never
        know when we might need your Pro-power.
      </p>
      <div>
        <form className="max-w-[46.25rem]">
          <div className="mb-7">
            <div className="flex flex-wrap sm:flex-nowrap ml-1.5 -mb-5 sm:ml-0 sm:mb-0 justify-between">
              <span className="relative">
                <span className="flex flex-col sm:block">
                  {options.map(option => (
                    <span key={option} className="inline-block ml-2.5">
                      <label className="mb-5 sm:mb-0 block w-full mr-8 sm:inline-block">
                        <input
                          checked={selectedOption === option}
                          type="radio"
                          name="options"
                          value={option}
                          className="radio-input mr-2.5"
                          onChange={() => handleOptionChange(option)}
                        />
                        <span className="opacity-80 ml-2">{option}</span>
                      </label>
                    </span>
                  ))}
                </span>
              </span>
            </div>
          </div>
          <div className="mb-7">
            <div className="max-w-[31.25rem] relative">
              <span className="relative">
                <input
                  size={40}
                  className={twMerge(
                    'file-upload-input cursor-pointer border py-2 px-5 rounded-full w-full',
                    style[type].input
                  )}
                  type="file"
                  name="file"
                />
              </span>
              <Image
                className="absolute right-5 top-3 pointer-events-none z-[2]"
                width={16}
                height={16}
                src="/assets/upload-icon-1.svg"
                alt="join-row-icon"
              />
            </div>
          </div>
          <button
            className={twMerge(
              'text-sm text-black rounded-full shadow-md px-6 py-2.5 border-none animation-easein-slow shift-to-right',
              style[type].button
            )}
          >
            Go
          </button>
        </form>
      </div>
    </>
  )
}

export default JoinProcedure
