import React from "react";
import './Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <div className="flexCenter paddings innerWidth nwrapper">
  
          <img className ="imgL" src="./src/assets/logo.png"  />
          <button className="button"> Admin LogIn </button>
        </div>
      
    </div>
  );
}

export default Navbar;
