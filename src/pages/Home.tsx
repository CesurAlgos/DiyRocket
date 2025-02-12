import { useTonConnectUI } from '@tonconnect/ui-react'
import Hero from '../components/Hero'
import Features from '../components/Features'

const Home = () => {
  const [tonConnectUI] = useTonConnectUI()
  const connected = tonConnectUI.connected

  return (
    <div>
      <Hero />
      <Features />
      
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">
          {connected ? 'Cüzdanınız Bağlandı!' : 'Cüzdanınızı Bağlayın'}
        </h2>
        {connected ? (
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <p className="text-green-700">
              Cüzdanınız başarıyla bağlandı. Artık işlem yapabilirsiniz.
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <p className="text-blue-700">
              TON işlemleriniz için lütfen cüzdanınızı bağlayın.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home