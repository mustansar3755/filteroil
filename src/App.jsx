import { Routes, Route } from 'react-router-dom'
import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  useLenis()
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Baqi pages (oil-filtration etc.) baad me yahan add honge */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
