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
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                INKLESS-READS
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalogs
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/literature">
                    Literature
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/scienceFiction">
                    Science Fiction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/history">
                    History
                  </Link>
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
                //search icon-----------------
                className="search-icon btn btn-outline-secondary fa-solid fa-magnifying-glass"
                type="button"

                id="button-addon1">
                </button>
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
            {/* -------------cart icon---------- */}
            <Link to="/Checkout" className="cart-icon px-3 fa-solid fa-cart-shopping"></Link>

            {/* ------------user icon -----------*/}
            <Link to="/LoginReg" className="user-icon px-3 fa-solid fa-user-large"></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
