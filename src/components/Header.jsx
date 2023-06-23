import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import inkless from "../assets/images/IK.png";
import AddToCart from "./AddToCart";

export default function Header({ cart, setCart }) {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/Checkout");
  };

  const goToLogInReg = () => {
    navigate("/loginReg");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <img src={inkless} alt="Company Logo" className="logo" />
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
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Inkless Reads
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
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/about-us"
                >
                  About-Us
                </Link>
              </li>
            </ul>

            <div className="nav-icons d-flex">
              {/* ----------------------------cart icon------------------------------------- */}
              <button
                className="btn text-white fs-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <p className="user-icon fa-solid fa-cart-shopping"></p>
              </button>

              {/* ----------------------------user icon ------------------------------------*/}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn fs-2"
                data-bs-toggle="modal"
                data-bs-target="#modalSignin"
              >
                {/* ------------user icon -----------*/}
                <p className="user-icon fa-solid fa-user-large"></p>
              </button>

              {/* <!---------------------- Modal --------------------------------------> */}
              <div
                className="modal fade"
                id="modalSignin"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                      <h1
                        className="modal-title fw-bold mb-0 fs-2"
                        id="exampleModalLabel"
                      >
                        Login to our Website
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form className="">
                        <div className="form mb-3">
                          <input
                            type="email"
                            className="form-control modalForm rounded-3"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form mb-3">
                          <input
                            type="password"
                            className="form-control modalForm rounded-3"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button
                          className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                          type="submit"
                        >
                          Sign in
                        </button>

                        <hr className="my-4" />
                        <h2 className="fs-5 fw-bold mb-3">
                          Or use a third-party
                        </h2>
                        <button
                          className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                          type="submit"
                        >
                          Sign in with Facebook
                        </button>
                        <button
                          className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3"
                          type="submit"
                        >
                          Sign in with Google
                        </button>

                        <hr className="my-4" />
                        <h2 className="fs-5 mb-1">Don't have account yet?</h2>

                        <Link
                          id="signup-link"
                          className="fs-6"
                          data-bs-dismiss="modal"
                          onClick={goToLogInReg}
                        >
                          Sign up here
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*------------------------- search icon--------------------------------- */}
            <form className="d-flex" role="search">
              <div className="input-group">
                <button
                  className="search-icon btn btn-outline-secondary fa-solid fa-magnifying-glass"
                  type="button"
                  id="button-addon1"
                ></button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a book name..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/*------------------------------- Offcanvas------------------------------- */}
      <div
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
      </div>
    </>
  );
}
