import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid IL-footer">
      <footer className="py-5 p-4">
        <div className="row">
          <div className="col-md-3 mb-3">
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
              <li className="nav-item mb-2">
                <i className="fa-solid fa-location-dot"></i>
                <span> Philippines</span>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-3 links">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  Catalog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Faq" className="nav-link p-0">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about-us" className="nav-link p-0">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
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
              <button className="btn subs-btn" type="button">
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-3 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn subs-btn" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Inkless Reads All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-unstyled d-flex">
            <li>
              <Link className="text-secondary terms-privacy" to="/privacyPolicy">
                Privacy Policy
              </Link>
            </li>
            <li className="ms-3">.</li>
            <li className="ms-3">
              <Link className="text-secondary terms-privacy" to="/terms">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
