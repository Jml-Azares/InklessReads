import React, { useState, useEffect, useRef } from "react";
import "./Checkout.css";
import axios from "axios";
import AddToCart from "./AddToCart";
import qr from "../assets/images/paymentQR.jpg";

import emailjs from "@emailjs/browser";

function Checkout({ cart, setCart }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of countries from the API
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wfwm9nj",
        "template_7qw7ghh",
        form.current,
        "9-FrRj1YMcGW4Ccg1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Order Placed successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="text-center pt-5 text-dark">Checkout Page</h1>

      <div className="row container px-5 py-3 mb-5 mx-auto">
        <div className="col-sm-12 col-md-6 left-container">
          {/* <h3>Billing address</h3>
          <form>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputFirstname"
                  aria-describedby="Firstname"
                  placeholder="Firstname"
                />
              </div>

              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputLastname"
                  aria-describedby="Lastname"
                  placeholder="Lastname"
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  aria-describedby="Password"
                  placeholder="Password"
                />
              </div>

              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="InputconfirmPassword"
                  aria-describedby="InputconfirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputAddress"
                aria-describedby="Address"
                placeholder="Address Line 1"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputAddress2"
                aria-describedby="Address2"
                placeholder="Address Line 2"
              />
            </div>

            <div className="row">
              <div className="col">
                <select
                  className="form-select"
                  id="InputCountry"
                  // aria-describedby="Country"
                  // placeholder="Country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    -Select Country-
                  </option>
                  {countries.map((country) => (
                    <option
                      className="text-black"
                      key={country.name.common}
                      value={country.name.common}
                    >
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputState"
                  aria-describedby="State"
                  placeholder="State/Province"
                />
              </div>

              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputZip"
                  aria-describedby="City"
                  placeholder="City"
                />
              </div>
            </div>

            <hr />

            <div className="mt-4 pb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                Save this information for next time
              </label>
            </div>

            <hr />
            <div className="row mt-5">
              <div className="col-md-12 col-lg-4">
                <div className="row">
                  <div className="col">
                    <ul>
                      <h5>Payment Options</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Credit card
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Debit card
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Paypal
                        </label>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4">
                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="InputCardname"
                      aria-describedby="Cardname"
                      placeholder="Cardname"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="date"
                      className="form-control"
                      id="InputCardexpiry"
                      aria-describedby="nameExpiry"
                      placeholder="cardExpiry"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4">
                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="number"
                      className="form-control mb-3"
                      id="InputCardnumber"
                      aria-describedby="InputCardnumber"
                      placeholder="cardNumber"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="InputCVV"
                      aria-describedby="cardCVV"
                      placeholder="cardCVV"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form> */}
          <h3 className="pt-5">Your cart</h3>
          <div className="top-container">
            <form>
              {cart.map((item) => (
                <div className="your-cart-books row" key={item.id}>
                  <small className="col-9">{item.title}</small>
                  <small className="col-3">$1</small>
                  <hr />
                </div>
              ))}
              <div className="your-cart-amount">
                <div className="mb-3"></div>
                <hr />

                <div
                  className="mb-3"
                  style={{ color: "black", textAlign: "center" }}
                >
                  ${cart.length}
                </div>
              </div>
            </form>
          </div>
          <img
            src={qr}
            alt="qr"
            style={{ height: "50%", width: "100%", objectFit: "contain" }}
          />
        </div>

        <div className="col-sm-12 col-md-6 right-container">
          <form
            className="contactForm w-100 my-5  mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name of the book</label>
            <input
              className="inputContactform form-control"
              type="text"
              name="user_name"
              placeholder="Input the name of the book"
            />
            <label className="">Email</label>
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="Please provide a valid Email address"
            />
            <label>Message</label>
            <textarea
              className="contactTextarea form-control lh-1"
              name="message"
              placeholder="Message or anything you want to add"
            />
            <input type="file" className="btn btn-dark my-2 w-100" />

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy and terms and conditions.
              </label>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Pay via QR code. Just scan the QR code and fill up the necessary
                forms, then upload a copy of your payment transactions. Once the
                payment is received, you will be notified that your order will
                be processed and the softcopy of the ordered book will be sent
                to your email address.
              </label>
              <input
                className="btn btn-dark mt-2 w-100"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
