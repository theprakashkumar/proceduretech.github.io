export default function CaseStudies() {
  const cases = [
    {
      title: 'E-commerce Platform Transformation',
      description:
        'Helped a retail client increase their online sales by 200% through a complete digital transformation',
      tags: ['React', 'Node.js', 'AWS'],
      image: '/images/case-study-1.jpg',
    },
    {
      title: 'FinTech Mobile App',
      description:
        'Developed a secure and scalable mobile banking solution with over 100k active users',
      tags: ['React Native', 'Python', 'Firebase'],
      image: '/images/case-study-2.jpg',
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-xl text-gray-600">
          Recent projects that made an impact
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((case_, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {/* Add actual images in production */}
              <div className="w-full h-full bg-gray-200" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">
              {case_.title}
            </h3>
            <p className="text-gray-600 mb-4">{case_.description}</p>
            <div className="flex gap-2">
              {case_.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
