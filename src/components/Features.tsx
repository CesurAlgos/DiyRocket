const Features = () => {
  const features = [
    {
      title: 'Kolay Kullanım',
      description: 'Kullanıcı dostu arayüz ile TON işlemlerinizi kolayca gerçekleştirin.',
      icon: '🚀',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Güvenli İşlemler',
      description: 'TON Connect entegrasyonu ile güvenli cüzdan bağlantısı.',
      icon: '🔒',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Hızlı Transfer',
      description: 'Saniyeler içinde TON transfer işlemlerinizi tamamlayın.',
      icon: '⚡',
      bgColor: 'bg-indigo-50'
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Özellikler</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features 