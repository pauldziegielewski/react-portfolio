import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from './pages/portfolio';


function App() {
 

  return (
    <>
 
     {/* <Footer/> */}
     <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
     

      <Footer/>
     </BrowserRouter>
     
    </>
  )
}

export default App
