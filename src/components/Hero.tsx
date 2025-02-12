const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-6">
            DiyRocket ile TON'a Bağlanın
          </h1>
          <p className="mt-6 text-xl text-gray-100 sm:text-2xl max-w-3xl mx-auto">
            TON blockchain üzerinde hızlı ve güvenli işlemler yapın.
          </p>
          <div className="mt-10">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Hemen Başlayın
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 