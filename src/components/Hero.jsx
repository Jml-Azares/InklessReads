import React from 'react'
import './Hero.css';

export default function Hero() {
  return (

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src="src/assets/images/carousel1.jpg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-outline-light'>BUY NOW</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="src/assets/images/carousel2.jpg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-outline-light'>BUY NOW</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src="src/assets/images/carousel3.jpg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-outline-light'>BUY NOW</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
}