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
import ProtectedRoute from "./components/ProtectedRoute";

// App content separated to use useLocation
function AppContent() {
  const location = useLocation();

  // List of routes where we want to Hide navbar and footer
  const hideNavAndFooter = ["/SignIn", "/CreateAccountForm"].includes(location.pathname);

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/softwareHouses" 
          element={
            <ProtectedRoute>
              <SoftwareHouses />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ProtectedRoute>
              <Contact />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </ProtectedRoute>
          } 
        />
        <Route path="/SignIn" element={<SignUpForm />} />
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
