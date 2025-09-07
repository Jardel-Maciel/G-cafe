import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Homes from './pages/Homes'
import logo from './assets/Logo.png'

function Navbar({ menuOpen, setMenuOpen, logo }) {
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, setMenuOpen])

  // Fecha com ESC e com clique fora
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') setMenuOpen(false) }
    function handleClickOutside(e) {
      if (!menuOpen) return
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, setMenuOpen])

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full top-0 left-0 z-50">
      <img src={logo} alt="logo" className="w-32" />

      {/* Nav Desktop */}
      <nav className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      {/* Botão Hambúrguer - Mobile */}
      <button
        ref={buttonRef}
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        className="md:hidden p-2 rounded-md focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          // Close icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-60 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col p-4 gap-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)} className="py-2">Sobre</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)} className="py-2">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Router>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} logo={logo} />

      <main className="pt-20">
        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
import './App.css'