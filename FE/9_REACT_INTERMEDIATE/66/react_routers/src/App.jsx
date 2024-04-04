import "./App.css";
import { useState } from "react";
import {NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import MainHeader from './components/MainHeader'
import { Link } from "react-router-dom";

function App() {

  return (

    <div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>

    

    <div className = "App"> 
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>{/* this is default route */}
          <Route path="/support" element={<div>Support Page</div>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>  

    </div>
  );
}

export default App;
