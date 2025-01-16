'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WorkFilter from '@/components/WorkFilter'

interface CaseStudy {
  title: string
  description: string
  image: string
  industry: string
  services: string[]
  technologies: string[]
  href: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'AI-Powered EdTech Platform',
    description:
      'Revolutionizing online education with personalized learning paths and real-time analytics',
    image: '/images/case-studies/edtech-platform.jpg',
    industry: 'EdTech',
    services: ['Product Development', 'AI/ML', 'Frontend Development'],
    technologies: ['React', 'Python', 'AWS'],
    href: '/work/edtech-platform',
  },
  {
    title: 'FinTech Payment Solution',
    description:
      'Building a secure and scalable payment processing system for modern businesses',
    image: '/images/case-studies/fintech-payment.jpg',
    industry: 'FinTech',
    services: ['Backend Development', 'Cloud Architecture', 'Security'],
    technologies: ['Go', 'AWS', 'Kubernetes'],
    href: '/work/fintech-payment',
  },
  // Add more case studies...
]

const filters = [
  {
    name: 'Industries',
    options: [
      { label: 'EdTech', value: 'EdTech' },
      { label: 'FinTech', value: 'FinTech' },
      { label: 'Healthcare', value: 'Healthcare' },
      { label: 'E-commerce', value: 'E-commerce' },
    ],
  },
  {
    name: 'Services',
    options: [
      { label: 'Product Development', value: 'Product Development' },
      { label: 'Frontend Development', value: 'Frontend Development' },
      { label: 'Backend Development', value: 'Backend Development' },
      { label: 'Cloud Architecture', value: 'Cloud Architecture' },
      { label: 'AI/ML', value: 'AI/ML' },
    ],
  },
  {
    name: 'Technologies',
    options: [
      { label: 'React', value: 'React' },
      { label: 'Python', value: 'Python' },
      { label: 'Go', value: 'Go' },
      { label: 'AWS', value: 'AWS' },
      { label: 'Kubernetes', value: 'Kubernetes' },
    ],
  },
]

export default function WorkPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const filteredCaseStudies = useMemo(() => {
    if (activeFilters.length === 0) return caseStudies

    return caseStudies.filter(study => {
      const studyTags = [
        study.industry,
        ...study.services,
        ...study.technologies,
      ]
      return activeFilters.some(filter => studyTags.includes(filter))
    })
  }, [activeFilters])

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-padding mb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Discover how we've helped companies across different industries
            build exceptional digital products and scale their engineering
            teams.
          </p>
        </div>
      </section>

      <div className="container-padding">
        <div className="lg:grid lg:grid-cols-[300px,1fr] lg:gap-12">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block">
            <WorkFilter
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={setActiveFilters}
            />
          </aside>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-8">
            <button
              onClick={() => {
                /* Add mobile filter modal logic */
              }}
              className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>
          </div>

          {/* Case Studies Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredCaseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group block">
                <article className="relative bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                        {study.industry}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-gray-600 mb-6">{study.description}</p>

                    {/* Tags */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-sm text-gray-600 bg-gray-50 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-sm text-gray-500 border border-gray-200 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container-padding mt-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to build your next digital product?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            href="https://cal.com/braj/consultation"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </main>
  )
}
