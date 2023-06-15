import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <>
      <h1 className="text-center">Checkout Page</h1>

      <div className="row container px-5 py-5 mx-auto">
        <div className="col-8 left-container">
          <h3>Billing address</h3>
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

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address (Optional)"
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
                placeholder="Address"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputAddress2"
                aria-describedby="Address2"
                placeholder="Address 2 (Optional)"
              />
            </div>

            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputCountry"
                  aria-describedby="Country"
                  placeholder="Country"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputState"
                  aria-describedby="State"
                  placeholder="State"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputZip"
                  aria-describedby="Zip"
                  placeholder="Zip"
                />
              </div>
            </div>

            <hr />

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Save this information for next time
              </label>
            </div>

            <hr />
            <div className="row">
              <div className="row">
                <div className="col">
                  <ul>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
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
                        for="flexRadioDefault1"
                      >
                        Debit card
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
                        for="flexRadioDefault1"
                      >
                        Paypal
                      </label>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="InputCardname"
                    aria-describedby="Cardname"
                    placeholder="Cardname"
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    id="InputCardexpiry"
                    aria-describedby="cardnameExpiry"
                    placeholder="cardExpiry"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="InputCardnumber"
                    aria-describedby="InputCardnumber"
                    placeholder="cardNumber"
                  />
                </div>
                <div className="col">
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
          </form>
        </div>

        <div className="col-4 right-container">
          <h3>Your cart</h3>
          <div className="top-container">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Book name "
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Second book name "
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Third book name "
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Promo Code "
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Total Amount "
                />
              </div>
            </form>
          </div>

          <div className="promocode-input">
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary text-white"
                type="button"
                id="button-addon2"
              >
                Redeem
              </button>
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
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
            <label className="form-check-label" for="exampleCheck1">
              I would like to receive referral marketing and promotional emails
              (optional)
            </label>
          </div>

          <button type="submit" className="btn btn-primary checkoutbtn my-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
