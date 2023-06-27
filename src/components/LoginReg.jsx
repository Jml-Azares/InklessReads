import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginReg.css";
import CompanyLogo from "../assets/images/IK.png";

function LoginReg() {
  const [countries, setCountries] = useState([]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [errorFirstname, setErrorFirstname] = useState(null);
  const [errorLastname, setErrorLastname] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [errorContact, setErrorContact] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorCountry, setErrorCountry] = useState("");
  const [errorZip, setErrorZip] = useState("");

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

  function handleReset() {
    setFirstname("");
    setLastname("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setDate("");
    setContact("");
    setAddress("");
    setCity("");
    setCountry("");
    setZip("");

    setErrorFirstname(null);
    setErrorLastname("");
    setErrorPassword("");
    setErrorConfirmPassword("");
    setErrorEmail("");
    setErrorDate("");
    setErrorContact("");
    setErrorAddress("");
    setErrorCity("");
    setErrorCountry("");
    setErrorZip("");
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!firstname) {
      setErrorFirstname("Firstname is required!");
    }
    if (!lastname) {
      setErrorLastname("Lastname is required!");
    }

    if (!password) {
      setErrorPassword("Password is required!");
    }
    if (confirmPassword !== password) {
      setErrorConfirmPassword("Password is not equal!");
    }
    if (!email) {
      setErrorEmail("Email is required!");
    }
    if (!date) {
      setErrorDate("Birthdate is required!");
    }
    if (!contact) {
      setErrorContact("Contact is required!");
    }
    if (!address) {
      setErrorAddress("Address is required!");
    }
    if (!city) {
      setErrorCity("City is required!");
    }
    if (!country) {
      setErrorCountry("Country is required!");
    }
    if (!zip) {
      setErrorZip("Zip is required!");
    }

    console.log(firstname);
    console.log(lastname);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);
    console.log(date);
    console.log(contact);
    console.log(address);
    console.log(city);
    console.log(country);
    console.log(zip);
    // alert("You successfully signed up!");
  }

  return (
    <>
      <h1 className="text-center pt-5">Registration Page</h1>

      <div className="container logMain-container mx-auto my-5">
        <div className="row">
          {/* Login container */}
          <div className="col-12 col-lg-6  loginBox">
            <img src={CompanyLogo} alt="company logo" />
          </div>

          {/* Registration container */}
          <form
            className="col-12 col-lg-6 p-5"
            name="signup"
            id="signup-form"
            onSubmit={handleFormSubmit}
          >
            <div className="regBox">
              <h3>Registration Form</h3>
              <p>Please fill in the following with your personal information</p>

              <div className="row mb-3">
                {/* Input First name */}
                <div className="col">
                  <div id="error-firstname" className="error">
                    {!firstname && errorFirstname}
                  </div>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="firstname"
                    aria-describedby="Firstname"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                {/* Input Last name */}
                <div className="col">
                  <div id="error-lastname" className="error">
                    {!lastname && errorLastname}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    aria-describedby="Lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                {/* Input Password */}
                <div className="col">
                  <div id="error-password" className="error">
                    {!password && errorPassword}
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Input Confirm Password */}
                <div className="col">
                  <div id="error-retypePassword" className="error">
                    {password !== confirmPassword && errorConfirmPassword}
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="retypePassword"
                    aria-describedby="InputconfirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Input Email Address */}
              <div className="mb-3">
                <div id="error-email" className="error">
                  {!email && errorEmail}
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="row mb-3">
                {/* Birth Month*/}
                <div className="col-4">
                  <div id="error-date" className="error">
                    {!date && errorDate}
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    aria-describedby="birthday"
                    placeholder="Birthday"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                {/* Contact */}
                <div className="col-8">
                  <div id="error-contact" className="error">
                    {!contact && errorContact}
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    aria-describedby="Contact"
                    placeholder="Contact number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                {/* Address*/}
                <div className="col-8">
                  <div id="error-address" className="error">
                    {!address && errorAddress}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="Address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* City */}
                <div className="dropdown col-4">
                  <div id="error-city" className="error">
                    {!city && errorCity}
                  </div>
                  <input
                    className="form-control"
                    id="city"
                    type="text"
                    aria-describedby="City"
                    placeholder="City/Town"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="row">
                {/* Country */}
                <div className="col-6">
                  <div id="error-country" className="error">
                    {!country && errorCountry}
                  </div>
                  <select
                    id="country"
                    className="form-select"
                    defaultValue=""
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
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
                  <div id="error-zip" className="error">
                    {!zip && errorZip}
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="zip"
                    aria-describedby="Zip"
                    placeholder="Zip code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-secondary regBtn"
                onClick={handleFormSubmit}
              >
                Register
              </button>

              <button
                type="reset"
                name="resetBtn"
                onClick={handleReset}
                className="btn btn-secondary regBtn"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginReg;
