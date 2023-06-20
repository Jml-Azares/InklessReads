import React from 'react';
import "./Testimonial.css";
import Review1 from "../assets/images/review1.jpg";
import Review2 from "../assets/images/review2.jpg";
import Review3 from "../assets/images/review3.jpg";

const Testimonial = () => {
  return (

      <>
        
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Review1} className="d-block reviewImg" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <h5>Brad Pitt</h5>
          <p><cite>Celebrity</cite></p>
          <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Review2} className="d-block reviewImg" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <h5>Dwayne Johnson</h5>
          <p><cite>Celebrity</cite></p>
          <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Review3} className="d-block reviewImg" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <h5>Leonardo DiCarpio</h5>
          <p><cite>Celebrity</cite></p>
          <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


     
      </>
  )
}

export default Testimonial