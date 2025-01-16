import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  role: string
  description: string
  icon: string
}

interface Benefit {
  title: string
  description: string
  icon: string
}

const teamMembers: TeamMember[] = [
  {
    role: 'Product Manager',
    description:
      'Drives product vision, strategy, and roadmap while ensuring alignment with business goals.',
    icon: '/icons/product-manager.svg',
  },
  {
    role: 'Tech Lead',
    description:
      'Provides technical leadership, architecture decisions, and ensures code quality standards.',
    icon: '/icons/tech-lead.svg',
  },
  {
    role: 'UI/UX Designer',
    description:
      'Creates intuitive user experiences and visually appealing interfaces that delight users.',
    icon: '/icons/designer.svg',
  },
  {
    role: 'Frontend Developer',
    description:
      'Builds responsive and performant user interfaces using modern web technologies.',
    icon: '/icons/frontend.svg',
  },
  {
    role: 'Backend Developer',
    description:
      'Develops robust APIs and services that power your application.',
    icon: '/icons/backend.svg',
  },
  {
    role: 'QA Engineer',
    description:
      'Ensures product quality through comprehensive testing and automation.',
    icon: '/icons/qa.svg',
  },
]

const benefits: Benefit[] = [
  {
    title: 'End-to-End Delivery',
    description:
      'A complete team that handles everything from design to deployment, allowing you to focus on your business.',
    icon: '/icons/delivery.svg',
  },
  {
    title: 'Seamless Communication',
    description:
      'Direct access to your team with regular updates and transparent communication channels.',
    icon: '/icons/communication.svg',
  },
  {
    title: 'Agile Methodology',
    description:
      'Iterative development with sprint planning, daily standups, and continuous delivery.',
    icon: '/icons/agile.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'Rigorous testing and code review processes to ensure high-quality deliverables.',
    icon: '/icons/quality.svg',
  },
]

export default function DedicatedTeamsPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-padding mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Dedicated Product Teams That Drive Innovation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Build your next digital product with a complete, self-managed team
            of expert developers, designers, and product managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://cal.com/braj/consultation"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
            >
              Schedule a Call
            </Link>
            <Link
              href="#team-structure"
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
          Why Choose Our Dedicated Teams
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

      {/* Team Structure Section */}
      <section
        id="team-structure"
        className="container-padding mb-24 bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Your Complete Product Team
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Each team is carefully structured to include all the roles needed
            for successful product development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-6">
                  <Image
                    src={member.icon}
                    alt={member.role}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container-padding mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Team Assembly</h3>
              <p className="text-gray-600">
                We carefully select team members based on your project
                requirements and technology stack.
              </p>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Project Kickoff</h3>
              <p className="text-gray-600">
                We align on goals, establish communication channels, and set up
                development processes.
              </p>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Continuous Delivery</h3>
              <p className="text-gray-600">
                Regular sprints with demos, feedback cycles, and iterative
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-padding bg-gray-900 text-white py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Product?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our dedicated product teams can help bring your
            vision to life.
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
