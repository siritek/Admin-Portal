
import React from 'react';
import { Link } from 'react-router-dom';
import {  FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icons
import './Sidebar.css'; // Assuming you have the CSS in the same directory

const Sidebar = () => {
  // const history = useHistory();

  const handleLogout = () => {
    // Perform any logout logic here, such as clearing authentication tokens
    // For example: localStorage.removeItem('authToken');
    
    // Redirect to the login page
    // history.push('/login');
    window.location.href = '/login';
  };
  return (
    <div id="sidebar" className="sidebar">
      {/* Top section with user information */}
      <div className="sidebar-top">
        <div className="user-info">
          <div className="user-circle">
            {/* Placeholder for user image */}
            <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1720555420~exp=1720556020~hmac=c103c9a782a88b14b0ceb1e1bb7cd7090462145be912860a146ef8f1884b0add" alt="User" />
          </div>
          <div className="user-name">
            Pramod Kulkarni {/* Replace with dynamic user name */}
            <p>user ID : Sirin123</p>
          </div>
        </div>
      </div>
      

      {/* Sidebar navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="Dashboard">Dashboard</Link></li>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/projects">Projects</Link></li>
           <li><Link to="/payment">Payment</Link></li>
           <li><Link to="/NewUser">New User</Link></li>

        </ul>
      </nav>

      {/* Bottom section with logout button */}
      <div className="sidebar-bottom">
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;














