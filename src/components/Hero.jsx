import React from "react";
import ReactDOM from "react-dom";
import heroGrid from '../assets/photo-grid.png'

function Hero(){
  return(
    <section className="heroContainer">
      <img src={heroGrid}  />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}
export default Hero