import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const token = localStorage.getItem('token');
  
  // If not authenticated, redirect to login page
  if (!token) {
    return <Navigate to="/SignIn" replace />;
  }
  
  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
