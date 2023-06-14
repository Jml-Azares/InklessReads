import React from 'react'
import './Hero.css';

export default function Hero() {
  return (

      <div className='container-fluid heroContainer'>
        <div className='container heroContent'>
          <h1>Lorem ipsum, dolor sit amet </h1>
          <h5>Lorem ipsum dolor sit amet consectetur</h5>
          <button className='btn btn-outline-light' type='button'>Buy Now</button>
        </div>
      </div>

  );
}