import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tiktok.png";
import twitter from "../assets/images/twitter.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid mx-auto px-5 bg-dark IL-footer fixed-bottom">
      <footer className="pt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-2">
            <div className="row mx-auto">
              <div className="row mx-auto text-center">
                {/* contact details */}
                {/* <div className="col-sm-4 col-md-4 mb-1">
                  <h4 className="eventHeader">Contact Details</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <i className="fa-solid fa-square-phone"></i>
                      <span> +630000000000</span>
                    </li>
                    <li className="nav-item mb-2">
                      <i className="fa-solid fa-envelope-circle-check"></i>
                      <span> ireads@aol.com</span>
                    </li>
                    <li className="nav-item mb-3">
                      <i className="fa-solid fa-location-dot"></i>
                      <span> Philippines</span>
                    </li>
                  </ul>
                </div> */}

                {/* catalogs */}
                {/* <div className="col-sm-4 col-md-4 mb-1">
                  <h4 className="eventHeader">Catalogs</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <Link
                        to="/literature"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Literature
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/scienceFiction"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Science Fiction
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/history"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        History
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/politics"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Politics
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/romance"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Romance
                      </Link>
                    </li>
                  </ul>
                </div> */}

                {/* page links */}
                {/* <div className="col-sm-4 col-md-4 mb-1">
                  <h4 className="eventHeader">Links</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <Link
                        to="/"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/Faq"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        FAQs
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/about-us"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/PrivacyPolicy"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to="/Terms"
                        className="nav-link p-0"
                        onClick={scrollToTop}
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>

              {/* <div className="row"> */}
              {/* google maps */}
              {/* <div
                  className="col-sm-12 col-md-12"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123504.21022926751!2d120.97978792906643!3d14.683921220237673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1687313097572!5m2!1sen!2sph"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div> */}
            </div>
          </div>

          {/* news letter section and contact form */}
          {/* <div className="col-sm-12 col-md-6 my-5 mb-3">
            <form>
              <h5 className="eventHeader">Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
            <br />
            <form>
              <h5 className="eventHeader">Contact Us</h5>
              <div className="d-flex flex-column flex-sm-column w-100 gap-2">
                <input
                  id="Name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  id="Email"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <textarea
                  id="Message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                />
                <button className="btn btn-secondary" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div> */}
        </div>

        {/* <br /> */}

        {/* footer copyrights and icons */}
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <p className="text-center">
            &copy; 2023 Inkless Reads, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook Logo"
                  className="SocialIcon"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram Logo"
                  className="SocialIcon"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="Tiktok Logo" className="SocialIcon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter Logo" className="SocialIcon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
