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
          <img className='md' src="data:image/png;base64,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" alt="menu"></img>
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
