import Link from 'next/link'
import ServiceGrid from '@/components/ServiceGrid'
import EngagementModel from '@/components/EngagementModel'
import ClientTestimonials from '@/components/ClientTestimonials'
import CaseStudies from '@/components/CaseStudies'
import TrustedBy from '@/components/TrustedBy'
import HeroPattern from '@/components/HeroPattern'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10 text-gray-900">
              We build exceptional software teams and products
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 lg:mb-16">
              Partner with us for end-to-end software development services that
              transform your ideas into market-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://cal.com/braj/consultation"
                target="_blank"
                className="primary-button text-center"
              >
                Book a Call with Our CEO
              </Link>
              <Link href="/work" className="secondary-button text-center">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12 sm:py-16 mt-20 lg:mt-28">
        <div className="container-padding">
          <TrustedBy />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-padding">
          <CaseStudies />
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container-padding">
          <ClientTestimonials />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-padding">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-center">
            Our Services
          </h2>
          <ServiceGrid
            services={[
              {
                title: 'Frontend Development',
                description:
                  'Building responsive, performant user interfaces with modern frameworks',
                icon: '🎨',
              },
              {
                title: 'Backend Development',
                description: 'Scalable server-side solutions and robust APIs',
                icon: '⚙️',
              },
              {
                title: 'DevOps',
                description:
                  'Streamlined deployment and infrastructure automation',
                icon: '🔄',
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications',
                icon: '📱',
              },
              {
                title: 'Design',
                description: 'User-centered design and seamless experiences',
                icon: '✨',
              },
              {
                title: 'Product Development',
                description: 'End-to-end product strategy and execution',
                icon: '🚀',
              },
            ]}
          />
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container-padding">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-center">
            How We Work
          </h2>
          <EngagementModel
            models={[
              {
                title: 'Team Augmentation',
                description:
                  'Extend your team with our skilled developers who integrate seamlessly with your existing workflow.',
                features: [
                  'Flexible scaling',
                  'Direct communication',
                  'Quick onboarding',
                ],
              },
              {
                title: 'Product Development Pods',
                description:
                  'Self-contained, cross-functional teams that take complete ownership of your product development.',
                features: [
                  'End-to-end delivery',
                  'Agile methodology',
                  'Regular updates',
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="container-padding text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to build something great?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="primary-button bg-white text-gray-900 hover:bg-gray-100 inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
