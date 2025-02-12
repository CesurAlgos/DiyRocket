const Features = () => {
  const features = [
    {
      title: 'Kolay Kullanım',
      description: 'Kullanıcı dostu arayüz ile TON işlemlerinizi kolayca gerçekleştirin.',
      icon: '🚀'
    },
    {
      title: 'Güvenli İşlemler',
      description: 'TON Connect entegrasyonu ile güvenli cüzdan bağlantısı.',
      icon: '🔒'
    },
    {
      title: 'Hızlı Transfer',
      description: 'Saniyeler içinde TON transfer işlemlerinizi tamamlayın.',
      icon: '⚡'
    }
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features 