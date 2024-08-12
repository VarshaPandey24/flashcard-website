import React,{useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ReactDOM from "react-dom";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Flipcard from './components/Flipcard/Flipcard';
import FlipCardApp from './FlipCardApp';




const App = () => {
  return (
    <div className='App'>
      
      <Navbar/>
      <Hero/>
      
    <FlipCardApp/>
    
    
    </div>
  );
};


export default App;
