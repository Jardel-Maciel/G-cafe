import './App.css'
import Botao from "./Components/Botao/Botao"
import Home from "./Components/Home/Home"
import Hero from "./Components/Home/Hero"
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Homes from './pages/Homes'



function App() {
  

  return (
    <>
     
      <Router>
        <nav className='flex gap-4 p-4 justify-around bg-yellow-200'>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

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
