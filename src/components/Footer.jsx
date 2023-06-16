import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tiktok.png";
import twitter from "../assets/images/twitter.png";

export default function Footer() {
  return (
    <div className="container-fluid IL-footer">
      <footer className="py-5 p-4">
        <div className="row">

          {/* Contact details */}
          <div className="col-md-3 mb-3 contactDetails">
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

          {/* privacy policy and terms of use */}
        <div>
          <ul className="list-unstyled d-flex">
            <li>
              <Link
                className="terms-privacy"
                to="/privacyPolicy"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="">.</li>
            <li className="">
              <Link className="terms-privacy" to="/terms">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

          </div>

          {/* footer links to different pages */}
          <div className="col-md-2 mb-3 links footerLinks">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/literature" className="nav-link p-0">
                  Literature
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/scienceFiction" className="nav-link p-0">
                  Science Fiction
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/history" className="nav-link p-0">
                  History
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

          {/* contact form */}
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

          {/* newsletter section */}
          <div className="col-md-3 offset-md-1 my-3">
            <form className="mb-3">
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

           {/* footer social media icons */}
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link
                className="link-body-emphasis"
                to="https://www.facebook.com/"
                target="blank"
              >
                <img src={facebook} alt="facebook Logo" className="SocialIcon" />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="link-body-emphasis"
                to="https://www.instagram.com/"
                target="blank"
              >
                <img src={instagram} alt="instagram Logo" className="SocialIcon" />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="link-body-emphasis"
                to="https://www.tiktok.com/en/"
                target="blank"
              >
                <img src={tiktok} alt="tiktok Logo" className="SocialIcon" />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="link-body-emphasis"
                to="https://twitter.com/"
                target="blank"
              >
                <img src={twitter} alt="twitter Logo" className="SocialIcon" />
              </Link>
            </li>
          </ul> 

          </div>

        </div>

        {/* footer text copyrights */}
        <div className="d-flex flex-column flex-sm-row justify-content-between copyRightsText border-top">
          <h5 className="footerText">&copy; 2023 Inkless Reads All rights reserved.</h5>
        </div>

        
      </footer>
    </div>
  );
}
