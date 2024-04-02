import React from 'react'
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap's JavaScript file
import Login from './Login';
import Register from './Register';
// import Landing_page from './components/Landing_page'
import { Routes, Route ,Navigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux'

const Landing_page = () => {
    const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 'login' ? 'active' : ''} rounded-5`} onClick={() => handleTabChange('login')} type="button">Login</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 'register' ? 'active' : ''} rounded-5`} onClick={() => handleTabChange('register')} type="button">Register</button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`} id="login" role="tabpanel">
          <Login />
          {/* Login form goes here */}
        </div>
        <div className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`} id="register" role="tabpanel">
          <Register />
          {/* Register form goes here */}
        </div>
      </div>
    </div>
  )
}

export default Landing_page
