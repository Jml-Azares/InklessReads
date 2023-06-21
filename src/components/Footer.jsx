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
    <div className="container-fluid px-5 IL-footer">
      <footer className="pt-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Contact Details</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <i className="fa-solid fa-square-phone"></i>
                <span> +630000000000</span>
              </li>
              <li className="nav-item mb-2">
                <i className="fa-solid fa-envelope-circle-check"></i>
                <span> ireads@aol.com</span>
              </li>
              <li className="nav-item mb-5">
                <i className="fa-solid fa-location-dot"></i>
                <span> Philippines</span>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Catalogs</h5>
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
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Faq" className="nav-link p-0" onClick={scrollToTop}>
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
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
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
              <h5>Contact Us</h5>
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
          </div>
        </div>
        <br />
        <div className="d-flex flex-column flex-sm-row justify-content-between py-3 border-top">
          <p>&copy; 2023 Inkless Reads, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://www.facebook.com/"
                target="_blank"
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
              >
                <img src={tiktok} alt="Tiktok Logo" className="SocialIcon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="https://twitter.com/"
                target="_blank"
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
