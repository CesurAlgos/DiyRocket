import { Outlet } from 'react-router-dom'
import { TonConnectButton } from '@tonconnect/ui-react'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">DiyRocket</h1>
          <TonConnectButton />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 DiyRocket. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout