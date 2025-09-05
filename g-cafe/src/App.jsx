import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Homes from './pages/Homes'
import logo from './assets/Logo.png'



function App() {


  return (
    <>

      <Router>
        <header className='flex justify-around items-center pt-5 '>
          
          <img src={logo} alt=" logo marca" className='w-40 ' />
         
          <nav className=' gap-4 p-4 justify-around items-center md:flex hidden'>
            
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
