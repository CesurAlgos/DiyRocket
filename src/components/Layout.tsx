import { Outlet } from 'react-router-dom'
import { TonConnectButton } from '@tonconnect/ui-react'

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/75">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">DiyRocket</h1>
          <TonConnectButton />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 DiyRocket. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout