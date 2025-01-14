export default function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        'Their team seamlessly integrated with ours and delivered exceptional results.',
      author: 'John Smith',
      position: 'CTO, Tech Corp',
      company: 'Tech Corp',
    },
    {
      quote: 'They helped us transform our vision into a successful product.',
      author: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'Innovation Labs',
    },
  ]

  return (
    <div className="space-y-12">
      <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-600 mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-bold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-500">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
