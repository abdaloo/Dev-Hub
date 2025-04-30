import About from "./Navbar-Links/About";
import Home from "./Navbar-Links/Home";
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import SoftwareHouses from "./Navbar-Links/SoftwareHouses";
import Contact from "./Navbar-Links/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/softwareHouses" element={<SoftwareHouses/>}/>
          <Route path="/contact" element={<><Contact /><ToastContainer position="bottom-right" autoClose={3000} /></>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
