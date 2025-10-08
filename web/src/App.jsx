import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Archive from './Archive';
import Gallery from './Gallery';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
