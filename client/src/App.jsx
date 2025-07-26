
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] text-white">
      <Header />
      <main className="flex-grow px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
