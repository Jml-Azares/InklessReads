import React from "react";
import "./LandingPage.css";
import logo from "../assets/images/IK.png";
import logo2 from "../assets/images/logo2.png";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <div className="text-black bg-white">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          id="mainNav"
        >
          <div className="container px-4">
            <a className="navbar-brand" href="#page-top">
              <img src={logo2} alt="Company Logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- Hero--> */}
        <div className="container  col-xl-10 col-xxl-8 px-4 py-0">
          <div className="row align-items-center g-lg-5 pb-5">
            <div className="col-lg-7 text-center text-lg-start">
              <img src={logo} alt="company logo" />
              {/* <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                Vertically centered hero sign-up form
              </h1>
              <p className="text-dark col-lg-10 fs-4">
                Below is an example form built entirely with Bootstraps form
                controls.
              </p> */}
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label className="text-dark" htmlFor="floatingInput">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label className="text-dark" htmlFor="floatingPassword">
                    Password
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label className="text-dark">
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>

                <button
                  className="btn btn-lg btn-outline-dark w-100"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  type="submit"
                >
                  Sign up here
                </button>
                <hr className="my-4" />
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- registration modal --> */}
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-body-tertiary">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 text-dark"
                  id="exampleModalToggleLabel2"
                >
                  Sign up
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  action="connect.php"
                  method="post"
                  className="row g-3 needs-validation"
                  noValidate
                >
                  <div className="col-md-6  ">
                    <label
                      htmlFor="firstNAme "
                      className="form-label text-dark"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label text-dark">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label text-dark">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label text-dark">
                      Password
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">
                        Please input password.
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="number" className="form-label text-dark">
                      Contact number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      name="number"
                      required
                    />

                    <div className="invalid-feedback">
                      Please input a valid number.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label text-dark">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="zip" className="form-label text-dark">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="invalidCheck"
                        required
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="col-12">
                  <input className="btn btn-outline-dark w-100" type="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-------End of User Login/Register---------> */}

        {/* <!-- Footer--> */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
