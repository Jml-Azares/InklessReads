import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginReg.css";
import CompanyLogo from "../assets/images/IK.png";

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
              className="btn btn-primary regBtn"
              onClick={register}
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
