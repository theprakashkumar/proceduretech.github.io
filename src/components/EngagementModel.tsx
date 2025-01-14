interface Model {
  title: string
  description: string
  features: string[]
}

interface EngagementModelProps {
  models: Model[]
}

export default function EngagementModel({ models }: EngagementModelProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {models.map((model, index) => (
        <div key={index} className="p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            {model.title}
          </h3>
          <p className="text-gray-600 mb-6">{model.description}</p>
          <ul className="space-y-3">
            {model.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <span className="mr-2">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
