import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-fluid IL-footer">
      <footer className="py-5 p-4">
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
                <span> il.reads@yandex.com</span>
              </li>
              <li className="nav-item mb-2">
                <i className="fa-solid fa-location-dot"></i>
                <span> Philippines</span>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 links">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Catalog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
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
                className="form-control msg"
                placeholder="Message"
              />
              <button className="btn subs-btn" type="button">
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
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
              <a className="link-body-emphasis" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-unstyled d-flex">
            <li>
              <a className="text-secondary terms-privacy" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="ms-3">.</li>
            <li className="ms-3">
              <a className="text-secondary terms-privacy" href="#">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
