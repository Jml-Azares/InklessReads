import React from "react";
import "./Testimonial.css";
import homeCarousel1 from "../assets/images/review1.jpg";
import homeCarousel2 from "../assets/images/review2.jpg";
import homeCarousel3 from "../assets/images/review3.jpg";

const Testimonial = () => {
  return (
    <>
      {/* ---------------testimonials----------------- */}
      <div className="container-fluid cardMainContainer p-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {/* -----------------carousel -----------------------*/}
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* <img src={homeCarousel1} className="d-block " alt="..." /> */}
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={homeCarousel1}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-dark">Brad Pitt</h5>
                          <p className="card-text text-dark">
                            "Wow! Napadpad ako sa online na website ng ebook na
                            ito, at nabigla ako sa koleksyong inaalok nila. Ang
                            interface ay user-friendly, na ginagawang madali ang
                            pag-browse at pagtuklas ng mga bagong pamagat."
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  {/* <img src={homeCarousel2} className="d-block " alt="..." /> */}
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={homeCarousel2}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-dark">
                            Dwayne Johnson
                          </h5>
                          <p className="card-text text-dark">
                            "Matagal ko nang ginagamit ang online ebook na
                            website na ito, at hindi ko ito mairerekomenda nang
                            sapat. Ang hanay ng mga genre at may-akda ay
                            kahanga-hanga, na tumutugon sa lahat ng uri ng mga
                            mambabasa."
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  {/* <img src={homeCarousel3} className="d-block " alt="..." /> */}
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={homeCarousel3}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-dark">
                            Leonardo DiCarpio
                          </h5>
                          <p className="card-text text-dark">
                            "Bilang isang masugid na mambabasa, sinubukan ko ang
                            ilang online na platform ng ebook, ngunit ang isang
                            ito ay namumukod-tangi sa iba."
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/*testimonial right container  */}
          <div className="col-sm-12 col-md-6 pt-4">
            <h3 className="text-dark">
              At <strong className="text-dark">Inkless Reads</strong> , we
              genuinely value our customers' feedback and reviews. Your
              satisfaction is our top priority, and we strive to provide you
              with exceptional service every step of the way. We believe that
              your opinions and experiences shape our growth and success as a
              company.
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Testimonial;
