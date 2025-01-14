export default function TrustedBy() {
  const clients = [
    {
      name: 'Client 1',
      logo: '/logos/client1.svg',
    },
    {
      name: 'Client 2',
      logo: '/logos/client2.svg',
    },
    {
      name: 'Client 3',
      logo: '/logos/client3.svg',
    },
    {
      name: 'Client 4',
      logo: '/logos/client4.svg',
    },
    {
      name: 'Client 5',
      logo: '/logos/client5.svg',
    },
    {
      name: 'Client 6',
      logo: '/logos/client6.svg',
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-center text-gray-600 text-lg">
        Trusted by innovative companies
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center">
            {/* Replace with actual client logos */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">
              {client.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
