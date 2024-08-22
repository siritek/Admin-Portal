import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Login from './Pages/Login';
import './App.css';
import NewUser from './Pages/NewUser'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated && (
          <Route
            path="/*"
            element={<AuthenticatedRoutes setIsAuthenticated={setIsAuthenticated} />}
          />
        )}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </Router>
  );
};

const AuthenticatedRoutes = ({ setIsAuthenticated }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      {/* <NavBar setIsAuthenticated={setIsAuthenticated} /> */}
      <Routes>
        {/* <Route path="Dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/employee" element={<Employee />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/newUser" element={<NewUser />} />

      </Routes>
    </div>
  </div>
);

export default App;
