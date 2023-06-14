import Moviepage from './pages/MoviePage'
import Landingpage from "./pages/LandingPage"
import DetailPage from "./pages/DetailPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/moviepage" element={<Moviepage/>} />
          <Route path="/detailpage/:details" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
