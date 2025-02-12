import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import './App.css'

// GitHub Pages için manifestUrl'yi düzeltiyoruz
const manifestUrl = window.location.hostname === 'localhost' 
  ? '/tonconnect-manifest.json'
  : '/DiyRocket/tonconnect-manifest.json'

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </TonConnectUIProvider>
  )
}

export default App