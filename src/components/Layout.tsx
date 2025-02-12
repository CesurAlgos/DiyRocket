import { Outlet } from 'react-router-dom'
import { TonConnectButton } from '@tonconnect/ui-react'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <header className="bg-white shadow p-4 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">DiyRocket</h1>
          <TonConnectButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout