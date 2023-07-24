import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
import logo from "../assets/images/logo2.png";
import Search from "./search";
import AuthDetails from "./AuthDetails";

export default function Header({ cart, setCart }) {
  const navigate = useNavigate();
  const history = useNavigate();

  const goToCheckout = () => {
    navigate("/Checkout");
  };

  const goToLogInReg = () => {
    navigate("/loginReg");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link to="/home" onClick={scrollToTop}>
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogs
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item drop-item" to="/literature">
                      Literature
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item drop-item"
                      to="/scienceFiction"
                    >
                      Science Fiction
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item drop-item" to="/history">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item drop-item" to="/politics">
                      Politics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item drop-item" to="/romance">
                      Romance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/contactPage"
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>

            <div className="nav-icons d-flex">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-4 pt-1">
                    <Search />
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/userProfile"
                    >
                      <i className="fa-regular fa-circle-user"></i>
                    </Link>
                  </li> */}
                  <li>
                    <AuthDetails />
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/AdminDash"
                    >
                      Admin
                    </Link>
                  </li> */}
                </ul>
              </div>
              {/* ----------------------------cart icon------------------------------------- */}
              {/* <button
                className="btn text-white fs-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <p className="user-icon fa-solid fa-cart-arrow-down"></p>
              </button> */}

              {/* <!-------User Login/Register---------> */}
              {/* <!-- login modal --> */}
              {/* <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel"
                      >
                        Login
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <form action="login.php" method="post">
                      <div className="modal-body">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="Password"
                            name="password"
                          />
                        </div>

                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                        <input type="submit" className="btn btn-primary" />
                      </div>
                    </form>

                    <div className="modal-footer">
                      <h6>Don't have account yet?</h6>
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Register here
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <!-- registration modal --> */}
              {/* <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel2"
                      >
                        Register
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
                        <div className="col-md-6">
                          <label htmlFor="firstNAme" className="form-label">
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
                          <label htmlFor="lastName" className="form-label">
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

                        <div className="col-md-6">
                          <label htmlFor="password" className="form-label">
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
                          <label htmlFor="Cpassword" className="form-label">
                            Confirm Password
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="password"
                              className="form-control"
                              id="Cpassword"
                              name="Cpassword"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <div className="invalid-feedback">
                              Please input password.
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <label htmlFor="email" className="form-label">
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
                          <label htmlFor="birthdate" className="form-label">
                            Birthdate
                          </label>
                          <input
                            type="date"
                            className="form-control lh-1"
                            id="birthdate"
                            name="birthdate"
                            required
                          />

                          <div className="invalid-feedback">
                            Please input birthdate.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="number" className="form-label">
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
                            Please input a valid contact number.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            required
                          />

                          <div className="invalid-feedback">
                            Please input a valid address.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="city" className="form-label">
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
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            required
                          />

                          <div className="invalid-feedback">
                            Please input Country name.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="zip" className="form-label">
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
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            className="btn btn-primary w-100"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Back to Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn text-white fs-2"
                type="button"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <i className="user-icon fa-solid fa-user-tie"></i>
              </button> */}
              {/* <!-------End of User Login/Register---------> */}
            </div>
          </div>
        </div>
      </nav>

      {/*------------------------------- Offcanvas------------------------------- */}
      {/* <div
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" data-bs-theme="dark">
          <AddToCart cart={cart} setCart={setCart} />

          <br />
          <br />
          {cart.length !== 0 && (
            <Link data-bs-dismiss="offcanvas" onClick={goToCheckout}>
              Proceed to checkout
            </Link>
          )}
        </div>
      </div> */}
    </>
  );
}
