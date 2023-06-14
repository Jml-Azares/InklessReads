import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";



import inkless from "../assets/images/inkless-logo.png";


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={inkless} alt="Company Logo" className="logo" />
        <button
          className="navbar-toggler bg-body-tertiary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                INKLESS-READS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalogs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Literature
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Science Fiction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    History
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">

              <Link className="nav-link text-white" aria-current="page" to="/about-us">
                About-Us
              </Link>

            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <button
                //search icon
                className="search-icon btn btn-outline-secondary fa-solid fa-magnifying-glass"
                type="button"
                id="button-addon1"
              ></button>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </form>
          <div className="nav-icons">
            {/* cart icon */}
            <a
              href="#"
              className="cart-icon px-3 fa-solid fa-cart-shopping"
            ></a>
            {/* user icon */}
            <a href="#" className="user-icon px-3 fa-solid fa-user-large"></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
