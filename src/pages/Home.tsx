import { useTonConnectUI } from '@tonconnect/ui-react'

const Home = () => {
  const [tonConnectUI] = useTonConnectUI()
  const connected = tonConnectUI.connected

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        {connected ? 'Cüzdanınız Bağlandı!' : 'Lütfen TON Cüzdanınızı Bağlayın'}
      </h1>
      {connected && (
        <div className="bg-white p-4 rounded shadow">
          <p>Cüzdanınız başarıyla bağlandı. Artık işlem yapabilirsiniz.</p>
        </div>
      )}
    </div>
  )
}

export default Home