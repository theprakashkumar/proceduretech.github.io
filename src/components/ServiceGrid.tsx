interface Service {
  title: string
  description: string
  icon: string
}

interface ServiceGridProps {
  services: Service[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
