import React from "react";
import "./contactPage.css";

function contactPage() {
  return (
    <>
      <div className="p-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-dark">Contact Details</h2>
        <ul>
          <li>
            <i className="fa-solid fa-phone-volume"></i> +639000000000
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i> inkless.reads@gmail.com
          </li>
          <li>
            <i className="fa-solid fa-globe"></i> Philippines
          </li>
        </ul>
        <hr className="w-50" />
        <form className="p-5 d-flex flex-column align-items-center">
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
            />
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </form>
        <form className="p-5 d-flex flex-column align-items-center">
          <h5>Contact Us</h5>
          <div className="d-flex flex-row flex-wrap gap-2">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
            <label htmlFor="email" className="visually-hidden">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email address"
              required
            />
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              id="message"
              className="form-control" // Add 'form-control' class here
              placeholder="Message"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mx-2" type="button">
              Submit
            </button>
            <button className="btn btn-secondary mx-2" type="button">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default contactPage;
