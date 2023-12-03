import React from "react";
import ReactDOM from "react-dom";
import airbnbLogo from '../assets/airbnb-logo.png'

function Navbar(){
  return(
    <nav>
      <img src={airbnbLogo}  />
    </nav>
  )
}
export default Navbar