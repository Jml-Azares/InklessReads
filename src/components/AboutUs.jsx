import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
// import logo from "../assets/images/IK.png";
import AboutImage1 from "../assets/images/about-image1.jpg";
import AboutImage2 from "../assets/images/about-image2.jpg";

import mission from "../assets/images/missionImage.png";
import vision from "../assets/images/visionImage.png";

import avatar from "../assets/images/avatar.jpg";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import dante from "../assets/images/dante.jpg";
import joseph from "../assets/images/joseph.jpg";
import luis from "../assets/images/luis.jpg";

const AboutUs = () => {
  return (
    <>
      {/* -----------------About Us Starts Here---------------------- */}
      <div className="aboutUs-head text-center py-3">
        <h1>About Us</h1>
      </div>

      <div className="px-4 text-center">
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to Inkless Reads, your go-to destination for a delightful
            reading experience! We are an innovative ebook website that aims to
            bring the joy of literature to readers all around the world. Whether
            you're a fan of captivating novels, thought-provoking non-fiction,
            or enchanting poetry, Inkless Reads has something for everyone.
            <br />
            <br />
            We understand the importance of affordability, which is why we offer
            competitive pricing for our ebooks. We believe that great literature
            should be accessible to all, and our commitment to fair pricing
            ensures that readers of all backgrounds can indulge in their love
            for books without breaking the bank.
          </p>
        </div>
      </div>

      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={AboutImage1}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead">
              With our user-friendly interface, navigating through our extensive
              library is a breeze. Our advanced search and recommendation
              features make it effortless to find your next favorite book. You
              can also personalize your reading experience by creating
              customized reading lists and tracking your reading progress.
              <br />
              <br />
              At Inkless Reads, we believe in the power of words to inspire,
              entertain, and transport readers to new worlds. We are passionate
              about fostering a love for reading and providing a platform for
              both established and emerging authors to showcase their talent.
              Our curated collection features a diverse range of genres and
              styles, ensuring that there's always something to suit every taste
              and interest.
            </p>
          </div>
        </div>
      </div>

      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <p className="lead">
              What sets us apart is our commitment to quality. We take great
              care in selecting the best works from talented authors and
              publishers to offer our readers a premium reading experience. Each
              ebook on our platform is carefully formatted and optimized for
              easy reading on various devices, whether you prefer reading on
              your tablet, smartphone, or e-reader.
              <br />
              <br />
              Inkless Reads is more than just an ebook store. We strive to
              create a vibrant community of book lovers who can connect,
              discuss, and share their passion for literature. Join our thriving
              community forums to engage in lively discussions, recommend your
              favorite reads, and discover new literary gems recommended by
              fellow readers.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={AboutImage2}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* -------------------Mission Vision------------------------ */}

      <div className="card-group mb-5 my-5">
        <div className="card mis-vis">
          <img src={mission} className="card-img-top" alt="Mission" />
          <div className="card-body text-center w-100">
            <h5 className="card-title text-center">Mission</h5>
            <p className="card-text">
              Our mission at Inkless Reads is to ignite a love for reading,
              connect readers with exceptional literature, and foster a vibrant
              community of book enthusiasts. We strive to provide a diverse
              collection of high-quality ebooks that entertain, inspire, and
              enlighten readers from all walks of life. Through our platform, we
              aim to promote the joy of reading, support talented authors, and
              make literature accessible to everyone.
            </p>
          </div>
        </div>
        <div className="card mis-vis">
          <img src={vision} className="card-img-top" alt="Vision" />
          <div className="card-body text-center w-100">
            <h5 className="card-title text-center ">Vision</h5>
            <p className="card-text">
              At Inkless Reads, our vision is to create a world where books are
              cherished and celebrated. We envision a future where reading is a
              cherished pastime, where stories have the power to bridge gaps,
              ignite imaginations, and create meaningful connections. We aim to
              be the go-to destination for readers seeking exceptional
              literature, innovative digital reading experiences, and a
              welcoming community of book lovers. Through our commitment to
              excellence and passion for literature, we aspire to leave a
              lasting impact on the way people read, learn, and experience the
              power of words.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Team --> */}
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row ">
            {/* <!-- Team member Dante avatar--> */}
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div
                className="image-flip"
                onTouchStart={() => {
                  this.classNameList.toggle("hover");
                }}
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid my-3"
                            src={avatar}
                            alt="card image"
                          />
                        </p>
                        <h4 className="card-title">Fullstack Developer</h4>
                        <blockquote className="text-dark">
                          "My software never has bugs. It just develops random
                          features."
                        </blockquote>
                        <div className="text-end pe-5">
                          <i className="fa-solid fa-arrows-rotate text-dark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-3">
                        <img
                          className="imgBack mb-2"
                          src={dante}
                          alt="card image"
                        />
                        <h4 className="card-title">Dante Alcantara Jr</h4>
                        <ul className="list-inline pt-3">
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-facebook text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-twitter text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-github text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-linkedin text-dark"></i>
                            </Link>
                          </li>
                          <div className="text-end pe-5 pt-2">
                            <i className="fa-solid fa-arrows-rotate text-dark"></i>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Team member Joseph avatar--> */}
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div
                className="image-flip"
                onTouchStart={() => {
                  this.classNameList.toggle("hover");
                }}
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid my-3"
                            src={avatar2}
                            alt="card image"
                          />
                        </p>
                        <h4 className="card-title">Fullstack Developer</h4>
                        <blockquote className="text-dark">
                          "The only problem with troubleshooting is that
                          sometimes trouble shoots back."
                        </blockquote>
                        <div className="text-end pe-5">
                          <i className="fa-solid fa-arrows-rotate text-dark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-3">
                        <img
                          className="imgBack mb-2"
                          src={joseph}
                          alt="card image"
                        />
                        <h4 className="card-title">JOSEPH MORONI AZARES</h4>
                        <ul className="list-inline pt-3">
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-facebook text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-twitter text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-github text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-linkedin text-dark"></i>
                            </Link>
                          </li>
                          <div className="text-end pe-5 pt-2">
                            <i className="fa-solid fa-arrows-rotate text-dark"></i>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Team member Luis avatar--> */}
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div
                className="image-flip"
                onTouchStart={() => {
                  this.classNameList.toggle("hover");
                }}
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid my-3"
                            src={avatar1}
                            alt="card image"
                          />
                        </p>
                        <h4 className="card-title">Fullstack Developer</h4>
                        <blockquote className="text-dark">
                          "I'm not anti-social; I'm just not user friendly"
                        </blockquote>
                        <div className="text-end pe-5 pt-3">
                          <i className="fa-solid fa-arrows-rotate text-dark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-3">
                        <img
                          className="imgBack mb-2"
                          src={luis}
                          alt="card image"
                        />
                        <h4 className="card-title">LUIS ANGELO TABUG</h4>
                        <ul className="list-inline pt-3">
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-facebook text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-twitter text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-github text-dark"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="social-icon text-xs-center"
                              target="_blank"
                              to="#"
                            >
                              <i className="fa-brands fa-linkedin text-dark"></i>
                            </Link>
                          </li>
                          <div className="text-end pe-5 pt-3">
                            <i className="fa-solid fa-arrows-rotate text-dark"></i>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team --> */}
    </>
  );
};

export default AboutUs;
