import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap's JavaScript file
import Login from './components/Login';
import Register from './components/Register';
import Landing_page from './components/Landing_page'
import { Routes, Route ,Navigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux'
import Users from './components/Users';
import Member from './components/member';
import Teams from './components/Teams';

function App() {
  const id = useSelector((state)=>state.info.id)
  useEffect(()=>{console.log(id)},[id])

  return (
    <>
      <Routes>
      <Route exact path="/" element={id ? <Navigate to="/api/users" />:<Landing_page/>} />
        <Route path="/api/users" element={<div><Users/></div>} />
        <Route path="/api/users/:id" element={<Member/>} />
        <Route path="/api/teams" element={<Teams />} />
        {/* <Route exact path="/newUpload" element={<NewPhoto/>}/> */}
      </Routes>
    </>
  );
}

export default App;
