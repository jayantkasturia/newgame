import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/authContext';
import Navbar from './components/Cparts/Navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Home from './pages/Home';
import MainUser from './pages/MainUser';
interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/login');
    }
  }, [userLoggedIn, navigate]);

  return <>{userLoggedIn ? children : null}</>;
};

function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={
          <AuthGuard>
            <Routes>
            <Route path="/user" element={<MainUser />} />
            </Routes>
          </AuthGuard>}>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
