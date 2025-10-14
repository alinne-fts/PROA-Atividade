
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import GrandCanyon from './componentes/GrandCanyon'
import MuralhasDaChina from './componentes/MuralhasDaChina'
import Aruba from './componentes/Aruba'

function App() {

  return (
    <>
      <main>
        <Router>
            <Header />
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Escocia' element={<Escocia />} />
                  <Route path='/GrandCanyon' element={ <GrandCanyon />} />
                  <Route path='MuralhasDaChina' element={ <MuralhasDaChina />} />
                  <Route path='Aruba' element={ <Aruba />} />
              </Routes>          
            <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
