import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginReg.css";
import CompanyLogo from "../assets/images/IK.png";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

function LoginReg() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID",
  //   measurementId: "YOUR_MEASUREMENT_ID",
  // };

  // // Initialize Firebase
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }

  // const auth = firebase.auth();
  // const database = firebase.database();

  // // Set up for register function
  // function register() {
  //   // get all input fields
  //   const firstname = document.getElementById("firstname").value;
  //   const lastname = document.getElementById("lastname").value;
  //   const password = document.getElementById("password").value;
  //   const confirmPassword = document.getElementById("confirmPassword").value;
  //   const email = document.getElementById("email").value;
  //   const birthday = document.getElementById("birthday").value;
  //   const contact = document.getElementById("contact").value;
  //   const address = document.getElementById("address").value;
  //   const city = document.getElementById("city").value;
  //   const countrySelect = document.getElementById("countrySelect").value;
  //   const zip = document.getElementById("zip").value;

  //   // validate input fields
  //   if (
  //     validate_email(email) === false ||
  //     validate_password(password) === false
  //   ) {
  //     alert("Email and Password are invalid");
  //     return;
  //   }
  //   if (
  //     validate_field(firstname) &&
  //     validate_field(lastname) &&
  //     validate_field(confirmPassword) === false
  //   ) {
  //     alert("One or More Extra fields are invalid");
  //     return;
  //   }

  //   // Move on with Auth
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(function () {
  //       var user = auth.currentUser;

  //       // Add this user to firebase database
  //       var database_ref = database.ref();

  //       //create user data
  //       var user_data = {
  //         email: email,
  //         firstname: firstname,
  //         lastname: lastname,
  //         birthday: birthday,
  //         contact: contact,
  //         address: address,
  //         city: city,
  //         countrySelect: countrySelect,
  //         zip: zip,
  //         last_login: Date.now(),
  //       };

  //       database_ref.child("user/" + user.uid).set(user_data);

  //       alert("User Created!!");
  //     })
  //     .catch(function (error) {
  //       // Firebase will use this to alert its errors
  //       var error_code = error.code;
  //       var error_message = error.message;

  //       alert(error_message);
  //     });
  // }

  // function validate_email(email) {
  //   const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  //   if (expression.test(email) === true) {
  //     //Email is good
  //     return true;
  //   } else {
  //     //Email is not good
  //     return false;
  //   }
  // }

  // function validate_password(password) {
  //   //firebase only accepts lengths greater than 6
  //   if (password.length < 6) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // function validate_field(field) {
  //   if (field === null) {
  //     return false;
  //   }

  //   if (field.length <= 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  return (
    <>
      <h1 className="text-center pt-5">Registration Page</h1>

      <div className="container logMain-container mx-auto my-5">
        <div className="row">
          {/* Login container */}
          <div className="col-sm-12 col-md-12 col-lg-6  loginBox">
            <img src={CompanyLogo} alt="company logo" />
          </div>

          {/* Registration container */}
          <div className="col-sm-8 col-md-12 col-lg-6 p-5 regBox">
            <h3>Registration Form</h3>
            <p>Please fill the following with your personal information</p>

            <div className="row mb-3">
              {/* Input First name */}
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  aria-describedby="Firstname"
                  placeholder="Firstname"
                />
              </div>

              {/* Input Last name */}
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  aria-describedby="Lastname"
                  placeholder="Lastname"
                />
              </div>
            </div>

            <div className="row mb-3">
              {/* Input Password */}
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="Password"
                  placeholder="Password"
                />
              </div>

              {/* Input Confirm Password */}
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
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
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="row mb-3">
              {/* Birth Month*/}
              <div className="col-4">
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  aria-describedby="birthday"
                  placeholder="Birthday"
                />
              </div>

              {/* Contact */}
              <div className="col-8">
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  aria-describedby="Contact"
                  placeholder="Contact number"
                />
              </div>
            </div>

            <div className="row mb-3">
              {/* Address*/}
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="Address"
                  placeholder="Address"
                />
              </div>

              {/* City */}
              <div className="dropdown col-4">
                <input
                  className="form-control"
                  id="city"
                  type="text"
                  aria-describedby="City"
                  placeholder="City/Town"
                ></input>
              </div>
            </div>

            <div className="row">
              {/* Country */}
              <div className="col-6">
                <select
                  id="countrySelect"
                  className="form-select"
                  defaultValue=""
                >
                  <option value="" disabled>
                    -Select Country-
                  </option>
                  {countries.map((country) => (
                    <option
                      className="text-black"
                      key={country.alpha2Code}
                      value={country.name}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Zip */}
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  aria-describedby="Zip"
                  placeholder="Zip code"
                />
              </div>
            </div>

            <button
              type="button"
              className="btn btn-secondary regBtn"
              // onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginReg;
