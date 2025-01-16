import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Dummy case studies data - you can move this to a separate data file
const caseStudies = {
  'edtech-platform': {
    title: 'AI-Powered EdTech Platform',
    client: 'EduTech Solutions',
    industry: 'EdTech',
    duration: '8 months',
    teamSize: '6 engineers',
    description:
      'Revolutionizing online education with personalized learning paths and real-time analytics',
    challenge:
      'The client needed to transform their traditional learning management system into an AI-powered platform that could provide personalized learning experiences at scale.',
    solution:
      'We implemented a sophisticated recommendation engine using machine learning algorithms that analyze student performance and learning patterns to create customized learning paths.',
    impact: [
      'Increased student engagement by 45%',
      'Improved course completion rates by 60%',
      'Reduced average time to master concepts by 30%',
    ],
    services: ['Product Development', 'AI/ML', 'Frontend Development'],
    technologies: ['React', 'Python', 'AWS'],
    images: [
      {
        url: '/images/case-studies/edtech-platform/hero.jpg',
        alt: 'EdTech Platform Dashboard',
      },
      {
        url: '/images/case-studies/edtech-platform/feature-1.jpg',
        alt: 'Learning Path Visualization',
      },
      {
        url: '/images/case-studies/edtech-platform/feature-2.jpg',
        alt: 'Analytics Dashboard',
      },
    ],
    testimonial: {
      quote:
        "Procedure's team delivered beyond our expectations. The AI-powered features they implemented have transformed how our students learn.",
      author: 'Sarah Chen',
      position: 'CTO at EduTech Solutions',
    },
  },
  'fintech-payment': {
    title: 'FinTech Payment Solution',
    client: 'PayFlow',
    industry: 'FinTech',
    duration: '12 months',
    teamSize: '8 engineers',
    description:
      'Building a secure and scalable payment processing system for modern businesses',
    challenge:
      'PayFlow needed a robust payment infrastructure that could handle millions of transactions while maintaining strict security standards and regulatory compliance.',
    solution:
      'We developed a microservices-based architecture using Go, implementing real-time payment processing with advanced fraud detection and automated compliance checks.',
    impact: [
      'Processed $2B in transactions within first year',
      'Reduced transaction processing time by 80%',
      'Achieved 99.99% uptime',
      'Decreased fraud rates by 75%',
    ],
    services: ['Backend Development', 'Cloud Architecture', 'Security'],
    technologies: ['Go', 'AWS', 'Kubernetes'],
    images: [
      {
        url: '/images/case-studies/fintech-payment/hero.jpg',
        alt: 'Payment Dashboard',
      },
      {
        url: '/images/case-studies/fintech-payment/feature-1.jpg',
        alt: 'Transaction Flow',
      },
      {
        url: '/images/case-studies/fintech-payment/feature-2.jpg',
        alt: 'Analytics View',
      },
    ],
    testimonial: {
      quote:
        'The scalability and security of our payment infrastructure has given us a significant competitive advantage in the market.',
      author: 'Michael Ross',
      position: 'CEO at PayFlow',
    },
  },
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-padding mb-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
              {caseStudy.industry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {caseStudy.description}
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container-padding mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">CLIENT</h3>
            <p className="text-lg font-medium">{caseStudy.client}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">DURATION</h3>
            <p className="text-lg font-medium">{caseStudy.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              TEAM SIZE
            </h3>
            <p className="text-lg font-medium">{caseStudy.teamSize}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">INDUSTRY</h3>
            <p className="text-lg font-medium">{caseStudy.industry}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container-padding mb-20">
        <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
          <Image
            src={caseStudy.images[0].url}
            alt={caseStudy.images[0].alt}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="container-padding mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-gray-600">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      {/* Feature Images */}
      <section className="container-padding mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudy.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] relative rounded-lg overflow-hidden"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="container-padding mb-20 bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Impact</h2>
          <div className="space-y-4">
            {caseStudy.impact.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-lg text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Services */}
      <section className="container-padding mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Services Provided</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="container-padding mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <cite className="text-gray-600 not-italic">
              <p className="font-medium">{caseStudy.testimonial.author}</p>
              <p>{caseStudy.testimonial.position}</p>
            </cite>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-padding">
        <div className="max-w-3xl mx-auto text-center">
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
