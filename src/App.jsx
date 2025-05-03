import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from "./Navbar-Links/About";
import Home from "./Navbar-Links/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SoftwareHouses from "./Navbar-Links/SoftwareHouses";
import Contact from "./Navbar-Links/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpForm from "./components/SignIn";
import CreateAccountForm from "./components/CreateAccount";

// App content separated to use useLocation
function AppContent() {
  const location = useLocation();

  // List of routes where we want to Hide navbar and footer
  const hideNavAndFooter = ["/SignUpForm", "/CreateAccountForm"].includes(location.pathname);

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/softwareHouses" element={<SoftwareHouses />} />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </>
          }
        />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/CreateAccountForm" element={<CreateAccountForm />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

// Wrap AppContent in BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
