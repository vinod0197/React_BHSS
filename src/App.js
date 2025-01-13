import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import TabsPage from './pages/TabsPage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    const userType = username === 'admin' ? 'Admin' : 'Candidate'; // Determine user type
    setUser({
      name: username,
      id: Math.floor(Math.random() * 10000),
      role: userType,
      email: `${username}@example.com`
    });
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      {user ? (
        <>
          {/* Display Header for logged-in users */}
          <Header user={user} onLogout={handleLogout} />
          
          <div style={{ padding: '20px' }}>
            {/* Routes for logged-in users */}
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/home" element={<HomePage user={user} />} />
              <Route path="/tabs" element={<TabsPage user={user} />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid routes to Home */}
            </Routes>
          </div>
          
          {/* Display Footer */}
          <Footer />
        </>
      ) : (
        <>
          {/* Routes for non-logged-in users */}
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect invalid routes to Login */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
