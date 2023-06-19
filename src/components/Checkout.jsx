import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <>
      <h1 className="text-center pt-5">Checkout Page</h1>

      <div className="row container px-5 py-5 mx-auto">
        <div className="col-sm-12 col-md-6 left-container">
          <h3>Billing address</h3>
          <form>
            <div className="row mb-3">
              {/* Input First name */}
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputFirstname"
                  aria-describedby="Firstname"
                  placeholder="Firstname"
                />
              </div>
                {/* Input Last name */}
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
              {/* Input Username */}
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
              {/* Input Password */}
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  
                  id="InputPassword"
                  aria-describedby="Password"
                  placeholder="Password"
                />
              </div>
                {/* Input Confirm Password */}
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
              {/* Input Email Address */}
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

              {/* Address */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputAddress"
                aria-describedby="Address"
                placeholder="Address"
              />
            </div>
              {/* Address 2 Optional */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputAddress2"
                aria-describedby="Address2"
                placeholder="Address 2 (Optional)"
              />
            </div>
              {/* Country */}
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
              {/* State */}
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="InputState"
                  aria-describedby="State"
                  placeholder="State"
                />
              </div>
              {/* Zip */}
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

            <div className="mt-4 pb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="mb-4 form-check">
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
            <div className="row mt-5">

              {/* 1st row */}
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <div className="col">
                    <ul>
                      <h5>Payment Options</h5>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" for="flexRadioDefault2" > 
                          Credit card
                        </label>  
                      </div>
                          
                      <div className="form-check">  
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1"> 
                          Debit card
                        </label>
                      </div>
                        
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1" >
                          Paypal
                        </label>
                      </div>
                    </ul>
                  </div>
                </div>   
              </div>

                      {/*2nd col Card name */}
              <div className="col-sm-12 col-md-6">
                <div className="row mb-3">        
                  <div className="col-12">        
                    <input type="text" className="form-control mb-3" id="InputCardname" aria-describedby="Cardname" placeholder="Cardname"/>
                  </div>     
                          {/*Card expiry  */}
                  <div className="col-12">     
                    <input type="date" className="form-control" id="InputCardexpiry" aria-describedby="nameExpiry" placeholder="cardExpiry"/> 
                  </div>
                </div>
              </div>


              {/* 3rd col Card number*/}
              <div className="col-sm-12 col-md-6">
                <div className="row mb-3">
                  <div className="col-12">
                    <input type="number" className="form-control mb-3" id="InputCardnumber" aria-describedby="InputCardnumber" placeholder="cardNumber"/>
                  </div>    
                      {/* Card CVV */}
                  <div className="col-12">   
                    <input type="text" className="form-control" id="InputCVV" aria-describedby="cardCVV" placeholder="cardCVV"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>   
                  

        <div className="col-sm-12 col-md-6 right-container">
          <h3>Your cart</h3>
          <div className="top-container">
            <form>
              {/* Input First Book name */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Book name "
                />
              </div>
              <hr />
              {/* Input Second Book name */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Second book name "
                />
              </div>
              <hr />
              {/* Input Third book name */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Third book name "
                />
              </div>
              <hr />
              {/* Input Promo code */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Promo Code "
                />
              </div>
              <hr />
              {/* Input Total amount */}
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
            {/* Input Box for Reedem with button */}
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
            {/* Checkout Button */}
          <button type="submit" className="btn btn-primary checkoutbtn my-3">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
