import React from 'react';
import "./Testimonial.css";
import Review1 from "../assets/images/review1.jpg";
import Review2 from "../assets/images/review2.jpg";
import Review3 from "../assets/images/review3.jpg";

const Testimonial = () => {
  return (

      <>
        {/* <div className='container-fluid mx-auto my-5'>
          <div className='container'>
            <div className="row">
              <div className="col reviewBox">
              <div className='container text-center'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
                <br />
                <div className='text-center'>
                  <img src={Review1} alt="customer review2" className='reviewImg'/>
                  <h5>Brad Pitt</h5>
                  <p><cite>Celebrity</cite></p>
                </div>
              </div>
              <div className="col reviewBox">
              <div className='container text-center pt-3'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
                <br />
                <div className='text-center'>
                  <img src={Review2} alt="customer review1" className='reviewImg' />
                  <h5>Dwayne Johnson</h5>
                  <p><cite>Celebrity</cite></p>
                </div>
              </div>
              <div className="col reviewBox">
              <div className='container text-center'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
                <br />
                <div className='text-center'>
                  <img src={Review3} alt="customer review3" className='reviewImg'/>
                  <h5>Leonardo DiCarpio</h5>
                  <p><cite>Celebrity</cite></p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active text-center">
              <img src={Review1} className="d-block  reviewImg" alt="..."/>
              <h5>Brad Pitt</h5>
              <p><cite>Celebrity</cite></p>
              <div className='container'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
            </div>

            <div className="carousel-item text-center">
              <img src={Review2} className="d-block reviewImg" alt="..."/>
              <h5>Dwayne Johnson</h5>
              <p><cite>Celebrity</cite></p>
              <div className='container'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
            </div>

            <div className="carousel-item text-center">
              <img src={Review3} className="d-block reviewImg" alt="..."/>
              <h5>Leonardo DiCarpio</h5>
              <p><cite>Celebrity</cite></p>
              <div className='container'>
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate tenetur voluptatem aliquam mollitia voluptate perspiciatis voluptates qui."</blockquote>
              </div>
            </div>

          </div>
        </div> */}


        {/* -------- */}
 <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Review1} className="d-block reviewImg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Leonardo DiCarpio</h5>
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