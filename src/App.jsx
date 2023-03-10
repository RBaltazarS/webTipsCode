//Styles.
import './App.css'

//Imports.
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages.
import Home from "./pages/Home/Home"
import About from "./pages/About/About"


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
