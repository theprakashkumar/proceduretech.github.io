import Image from 'next/image'
import Link from 'next/link'

interface Benefit {
  title: string
  description: string
  icon: string
}

interface Process {
  title: string
  description: string
  number: string
}

const benefits: Benefit[] = [
  {
    title: 'Flexible Team Scaling',
    description:
      'Scale your development team up or down based on project needs, without the overhead of full-time hiring.',
    icon: '/icons/flexible-team.svg',
  },
  {
    title: 'Immediate Availability',
    description:
      'Get access to pre-vetted developers who can start contributing to your project within days, not months.',
    icon: '/icons/availability.svg',
  },
  {
    title: 'Cost Efficiency',
    description:
      'Reduce operational costs while maintaining high-quality development standards and productivity.',
    icon: '/icons/cost-efficiency.svg',
  },
  {
    title: 'Technical Excellence',
    description:
      'Work with developers who are experts in their field and follow industry best practices.',
    icon: '/icons/technical.svg',
  },
]

const process: Process[] = [
  {
    number: '01',
    title: 'Requirements Analysis',
    description:
      'We discuss your needs, team structure, and technical requirements to understand your project goals.',
  },
  {
    number: '02',
    title: 'Team Selection',
    description:
      'We match you with developers who have the right skills and experience for your project.',
  },
  {
    number: '03',
    title: 'Integration & Onboarding',
    description:
      'Our developers integrate with your team and processes, ready to contribute from day one.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'We provide continuous support and ensure our developers maintain high performance standards.',
  },
]

export default function TeamAugmentationPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-padding mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Scale Your Engineering Team with Expert Developers
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Access top-tier software developers who seamlessly integrate with
            your team and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://cal.com/braj/consultation"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
            >
              Book a Call
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-900 px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container-padding mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose Our Team Augmentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="container-padding mb-24 bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container-padding mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technologies We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Frontend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/react.svg"
                  alt="React"
                  width={24}
                  height={24}
                />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/next.svg"
                  alt="Next.js"
                  width={24}
                  height={24}
                />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/vue.svg" alt="Vue" width={24} height={24} />
                <span>Vue.js</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Backend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/node.svg"
                  alt="Node.js"
                  width={24}
                  height={24}
                />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/python.svg"
                  alt="Python"
                  width={24}
                  height={24}
                />
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/go.svg" alt="Go" width={24} height={24} />
                <span>Go</span>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mobile</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/react.svg"
                  alt="React Native"
                  width={24}
                  height={24}
                />
                <span>React Native</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/flutter.svg"
                  alt="Flutter"
                  width={24}
                  height={24}
                />
                <span>Flutter</span>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">DevOps</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image src="/icons/aws.svg" alt="AWS" width={24} height={24} />
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/kubernetes.svg"
                  alt="Kubernetes"
                  width={24}
                  height={24}
                />
                <span>Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-padding bg-gray-900 text-white py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Team?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our team augmentation services can help you
            achieve your goals faster.
          </p>
          <Link
            href="https://cal.com/braj/consultation"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
