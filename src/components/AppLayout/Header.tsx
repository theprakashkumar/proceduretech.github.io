'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { twMerge } from 'tailwind-merge'

const navLinks = [
  {
    id: 'work',
    title: 'Our Work',
    href: '/work',
  },
  {
    id: 'services',
    title: 'Services',
    dropdown: [
      {
        title: 'Specialists On Demand',
        items: [
          { title: 'Team Augmentation', href: '/services/team-augmentation' },
          {
            title: 'Dedicated Product Teams',
            href: '/services/dedicated-teams',
          },
        ],
      },
      {
        title: 'Effective Development',
        items: [
          { title: 'Applied AI', href: '/services/applied-ai' },
          {
            title: 'Agentic Development',
            href: '/services/agentic-development',
          },
          { title: 'Digital Product Design', href: '/services/product-design' },
          { title: 'Web Development', href: '/services/web-development' },
          { title: 'Mobile Development', href: '/services/mobile-development' },
          { title: 'Data Engineering', href: '/services/data-engineering' },
        ],
      },
    ],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    dropdown: [
      {
        title: 'Web Development',
        items: [
          { title: 'React', href: '/technologies/react' },
          { title: 'Next.js', href: '/technologies/nextjs' },
          { title: 'Node', href: '/technologies/node' },
          { title: 'Go', href: '/technologies/go' },
          { title: 'Python', href: '/technologies/python' },
          { title: 'Java', href: '/technologies/java' },
        ],
      },
      {
        title: 'Cloud & DevOps',
        items: [
          { title: 'AWS', href: '/technologies/aws' },
          { title: 'Serverless', href: '/technologies/serverless' },
          { title: 'Microservices', href: '/technologies/microservices' },
        ],
      },
      {
        title: 'Mobile Development',
        items: [
          { title: 'React Native', href: '/technologies/react-native' },
          { title: 'Flutter', href: '/technologies/flutter' },
          { title: 'Native iOS', href: '/technologies/native-ios' },
          { title: 'Native Android', href: '/technologies/native-android' },
        ],
      },
    ],
  },
  {
    id: 'industries',
    title: 'Industries',
    dropdown: [
      {
        items: [
          { title: 'Fintech', href: '/industries/fintech' },
          { title: 'EdTech', href: '/industries/edtech' },
          { title: 'Healthcare', href: '/industries/healthcare' },
          { title: 'E-commerce', href: '/industries/ecommerce' },
          {
            title: 'Travel & Hospitality',
            href: '/industries/travel-hospitality',
          },
          { title: 'Insurance', href: '/industries/insurance' },
        ],
      },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    dropdown: [
      {
        items: [
          { title: 'About Us', href: '/company/about' },
          { title: 'How We Deliver', href: '/company/delivery' },
          { title: 'Careers', href: '/company/careers' },
        ],
      },
    ],
  },
]

interface DropdownSection {
  title?: string
  items: { title: string; href: string }[]
}

const Header = () => {
  const pathname = usePathname()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed w-full top-0 left-0 z-40 bg-white border-b border-gray-100">
      <div className="container-padding">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              width={120}
              height={32}
              className="h-6 w-auto sm:h-8"
              src="/assets/logo.svg"
              alt="Procedure Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            {navLinks.map(link => (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href || '#'}
                  className={twMerge(
                    'text-sm font-medium transition-colors hover:text-gray-600 flex items-center gap-1 whitespace-nowrap',
                    pathname === link.href ? 'text-gray-900' : 'text-gray-600'
                  )}
                >
                  {link.title}
                  {link.dropdown && (
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                  )}
                </Link>

                {/* Full-width Dropdown Menu */}
                {link.dropdown && activeDropdown === link.id && (
                  <div className="absolute left-[50%] right-0 -translate-x-[50%] top-[calc(100%+1px)] w-screen">
                    <div className="bg-white shadow-lg border-b border-gray-100">
                      <div className="max-w-[1400px] mx-auto px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-8">
                          {link.dropdown.map(
                            (section: DropdownSection, idx) => (
                              <div key={idx}>
                                {section.title && (
                                  <>
                                    <h3 className="text-sm font-medium text-gray-400 mb-3 lg:mb-4">
                                      {section.title}
                                    </h3>
                                    <div className="h-px bg-gray-100 mb-3 lg:mb-4" />
                                  </>
                                )}
                                <div className="space-y-2 lg:space-y-3">
                                  {section.items.map((item, itemIdx) => (
                                    <Link
                                      key={itemIdx}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="https://cal.com/braj/consultation"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 whitespace-nowrap"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isNavbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation - Slide from top */}
      {isNavbarOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="container-padding py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <div key={link.id} className="space-y-2">
                  <Link
                    href={link.href || '#'}
                    className={twMerge(
                      'text-sm font-medium transition-colors hover:text-gray-900 py-2 block',
                      pathname === link.href ? 'text-gray-900' : 'text-gray-600'
                    )}
                    onClick={() => !link.dropdown && setIsNavbarOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-4">
                      {link.dropdown.map((section: DropdownSection, idx) => (
                        <div key={idx} className="space-y-2">
                          {section.title && (
                            <h3 className="text-sm font-medium text-gray-400">
                              {section.title}
                            </h3>
                          )}
                          <div className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                                onClick={() => setIsNavbarOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="https://cal.com/braj/consultation"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                onClick={() => setIsNavbarOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
