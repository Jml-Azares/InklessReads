import React from "react";
import "./contactPage.css";

function contactPage() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-dark">Contact Details</h2>
        <ul>
          <l1>
            <i className="fa-solid fa-phone-volume"></i> +639000000000
          </l1>
          <li>
            <i className="fa-solid fa-envelope"></i> inkless.reads@gmail.com
          </li>
          <li>
            <i className="fa-solid fa-globe"></i> Philippines
          </li>
        </ul>
        <hr className="w-50" />
        <form className="p-5">
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
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default contactPage;
