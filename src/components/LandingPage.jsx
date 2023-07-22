import React from "react";
import logo from "../assets/images/IK.png";
import Axios from "axios";
import { useState } from "react";

const LandingPage = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      contact: number, // Use 'contact' instead of 'number'
    }).then((response) => {
      setRegisterStatus(response);
      console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  return (
    <>
      <div className="text-black bg-white">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          id="mainNav"
        >
          <div className="container px-4">
            <a className="navbar-brand" href="#page-top">
              INKLESS READS
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
              <ul className="navbar-nav ms-auto"></ul>

              {/* <!-- Button trigger modal for FAQ --> */}
              <button
                type="button"
                className="btn btn-outline-light mx-3"
                data-bs-toggle="modal"
                data-bs-target="#staticFaq"
              >
                FAQ's
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade "
                id="staticFaq"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticFaqLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen ">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticFaqLabel">
                        FAQ's
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="py-5">
                        <h1 className="text-center pb-4">
                          Frequently Ask Questions
                        </h1>
                        <div
                          className="accordion accordion-flush mx-auto ink-acc"
                          id="ink-accordion"
                        >
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                <h4>
                                  How do I create an account on Inkless Reads?
                                </h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                To create an account on Inkless Reads, click on
                                the "Sign Up" button located at the top right
                                corner of the page. Fill in the required
                                information, including your name, email address,
                                and password. Once submitted, you will receive a
                                confirmation email to verify your account.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                <h4>How can I purchase an ebook?</h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                To purchase an ebook, browse through our
                                collection and click on the desired book. On the
                                book's page, you will find a "Buy Now" button.
                                Clicking on it will take you to the checkout
                                page where you can complete the purchase by
                                providing your payment information. Once the
                                transaction is successful, you will have access
                                to download the ebook.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                <h4>
                                  Can I access my purchased ebooks on multiple
                                  devices?
                                </h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                Yes, you can access your purchased ebooks on
                                multiple devices. Simply log in to your Inkless
                                Reads account on the device you wish to use and
                                navigate to your library. You will find all your
                                purchased ebooks available for download and
                                reading.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                              >
                                <h4>How do I download an ebook?</h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFour"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                To download an ebook, go to your library where
                                you can see the list of ebooks you've purchased.
                                Click on the "Download" button next to the
                                desired ebook, and it will be saved to your
                                device for offline reading.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                              >
                                <h4>
                                  What file formats are supported for the
                                  ebooks?
                                </h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFive"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                Inkless Reads supports ebooks in PDF and EPUB
                                formats. Most devices and ebook readers are
                                compatible with these formats, allowing you to
                                read the ebooks on various devices.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix"
                                aria-expanded="false"
                                aria-controls="flush-collapseSix"
                              >
                                <h4>Can I return or refund an ebook?</h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseSix"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                Due to the nature of digital products, we do not
                                offer returns or refunds for purchased ebooks.
                                We encourage you to review the book details and
                                sample chapters before making a purchase
                                decision.
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed acc-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven"
                                aria-expanded="false"
                                aria-controls="flush-collapseSeven"
                              >
                                <h4>How can I contact customer support?</h4>
                              </button>
                            </h2>
                            <div
                              id="flush-collapseSeven"
                              className="accordion-collapse collapse"
                              data-bs-parent="#ink-accordion"
                            >
                              <div className="accordion-body acc-body">
                                If you have any questions, concerns, or need
                                assistance, you can reach out to our customer
                                support team by sending an email to
                                ireads@aol.com. We strive to respond to all
                                inquiries within 24 hours.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-lg btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Button trigger modal for Privacy Policy --> */}
              <button
                type="button"
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#staticPrivacy"
              >
                Privacy Policy
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade "
                id="staticPrivacy"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticPrivacyLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen ">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticPrivacyLabel">
                        PRIVACY POLICY
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="py-5 px-5 mx-auto"
                        style={{ width: "80vw" }}
                      >
                        <h1>Privacy Policy for Inkless Reads</h1>
                        <p>Effective Date: July 2023</p>
                        <p>
                          At Inkless Reads, we value the privacy of our users
                          and are committed to protecting their personal
                          information. This Privacy Policy outlines how we
                          collect, use, disclose, and safeguard the personal
                          data provided by our users when accessing and using
                          our website and services. By using Inkless Reads, you
                          consent to the terms described in this Privacy Policy.
                        </p>
                        <br />
                        <h2>1. Information We Collect:</h2>
                        <ul>
                          <li>
                            <strong>Personal Information:</strong> When you
                            create an account or make a purchase on Inkless
                            Reads, we may collect personal information such as
                            your name, email address, billing address, and
                            payment details.
                          </li>
                          <li>
                            <strong>Log Data:</strong> We collect information
                            that your browser sends whenever you visit our
                            website. This data may include your IP address,
                            browser type, browser version, pages of our website
                            visited, the time and date of your visit, and other
                            statistics.
                          </li>
                          <li>
                            <strong>Cookies:</strong> We may use cookies and
                            similar technologies to enhance your browsing
                            experience and gather information about your
                            preferences. You can adjust your browser settings to
                            refuse cookies, but please note that certain
                            features of our website may not function properly as
                            a result.
                          </li>
                        </ul>
                        <br />
                        <h2>2. Use of Collected Information:</h2>
                        <ul>
                          <li>
                            <strong>Provide and Improve Services:</strong> We
                            use the information we collect to provide and
                            improve our services, including processing payments,
                            delivering ebooks, personalizing your experience,
                            and responding to your inquiries and requests.
                          </li>
                          <li>
                            <strong>Communication:</strong> We may use your
                            contact information to communicate with you about
                            your account, promotional offers, updates, and other
                            relevant information related to Inkless Reads. You
                            can opt out of these communications at any time.
                          </li>
                          <li>
                            <strong>Analytics:</strong> We may use collected
                            data for analytics purposes, such as analyzing user
                            behavior, improving our website and services, and
                            measuring the effectiveness of our marketing
                            efforts.
                          </li>
                        </ul>
                        <br />
                        <h2>3. Data Sharing and Disclosure:</h2>
                        <ul>
                          <li>
                            <strong>Third-Party Service Providers:</strong> We
                            may share your personal information with trusted
                            third-party service providers who assist us in
                            operating our website, processing payments,
                            delivering ebooks, and performing other necessary
                            business functions. These providers are obligated to
                            handle your information securely and confidentially.
                          </li>
                          <li>
                            <strong>Legal Compliance:</strong> We may disclose
                            your information if required by law, to comply with
                            legal processes, protect our rights, or respond to
                            legal requests and investigations.
                          </li>
                          <li>
                            <strong>3.3 Business Transfers:</strong> In the
                            event of a merger, acquisition, or sale of all or a
                            portion of our assets, your information may be
                            transferred as part of the transaction. We will
                            notify you before your personal information becomes
                            subject to a different privacy policy.
                          </li>
                        </ul>
                        <br />
                        <h2>4. Data Security:</h2>
                        <p>
                          We employ industry-standard security measures to
                          protect your personal information from unauthorized
                          access, disclosure, alteration, or destruction.
                          However, please note that no method of transmission or
                          storage over the Internet is 100% secure. While we
                          strive to use commercially acceptable means to protect
                          your data, we cannot guarantee its absolute security.
                        </p>
                        <br />
                        <h2>5. Children's Privacy:</h2>
                        <p>
                          Inkless Reads is not intended for use by individuals
                          under the age of 13. We do not knowingly collect
                          personal information from children. If we discover
                          that personal information of a child has been
                          unintentionally collected, we will take prompt steps
                          to delete it from our systems.
                        </p>
                        <br />
                        <h2>6. Changes to this Privacy Policy:</h2>
                        <p>
                          We reserve the right to update or modify this Privacy
                          Policy at any time. We will notify you of any material
                          changes by posting the updated policy on our website
                          or through other communication channels. Please review
                          this policy periodically to stay informed of any
                          updates.
                        </p>
                        <br />
                        <h2>7. Contact Us:</h2>
                        <p>
                          If you have any questions, concerns, or requests
                          regarding this Privacy Policy, please contact us at
                          ireads@aol.com.
                        </p>
                        <br />
                        <p>
                          By using Inkless Reads, you acknowledge that you have
                          read, understood, and agreed to this Privacy Policy.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-lg btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Hero--> */}
        <div
          className="container mx-auto  col-xl-10 col-xxl-8 px-4"
          style={{ marginTop: "100px", marginBottom: "100px", height: "70vh" }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="mx-5 d-none d-md-none d-xl-block d-xxl-block ">
                <img
                  src={logo}
                  alt="company logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h1 className="fw-bold text-center text-body-emphasis mb-3">
                GUSTO KO NG SINANGAG!
              </h1>
              <p
                className="text-dark col-lg-10 fs-4"
                style={{ textAlign: "center" }}
              >
                Pinirotong tampal-puke
              </p>
            </div>

            {/* -------------------login--------------- */}
            <div className="col-md-10 mx-auto mb-5 pb-5 rounded-3 border bg-body-tertiary col-lg-6">
              <form className="px-4 pt-5">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
                <div className="col-12">
                  <input
                    className="btn btn-lg btn-outline-dark w-100"
                    type="submit"
                    value="Login"
                    onClick={login}
                  />
                </div>

                <hr className="" />
                <h1
                  style={{
                    color: "red",
                    fontSize: "15px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {loginStatus}
                </h1>
              </form>

              <div className="px-4">
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the
                  {/* <!-- Button trigger modal for Terms of use --> */}
                  <span
                    type="button"
                    className="btn btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#staticTerm"
                  >
                    terms of use
                  </span>
                </small>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade "
                  id="staticTerm"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticTermLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-fullscreen ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticTermLabel">
                          Term of use
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div
                          className="py-5 px-5 mx-auto"
                          style={{ width: "80vw" }}
                        >
                          <h1>Terms of Use for Inkless Reads</h1>

                          <p>
                            Welcome to Inkless Reads. These Terms of Use govern
                            your access to and use of our website and services.
                            By accessing or using Inkless Reads, you agree to
                            comply with these terms and conditions. Please read
                            them carefully.
                          </p>
                          <br />
                          <h2>1. Intellectual Property</h2>
                          <p>
                            The content and materials available on Inkless
                            Reads, including but not limited to text, graphics,
                            logos, button icons, images, audio clips, digital
                            downloads, data compilations, and software, are the
                            property of Inkless Reads or its content providers
                            and are protected by applicable intellectual
                            property laws. You may not use, reproduce, modify,
                            distribute, or display any portion of the content
                            without prior written consent from Inkless Reads.
                          </p>
                          <br />
                          <h2>2. User Conduct</h2>
                          <p>When using Inkless Reads, you agree to:</p>
                          <ul>
                            <li>
                              Comply with all applicable laws and regulations.
                            </li>
                            <li>
                              Respect the intellectual property rights of
                              others.
                            </li>
                            <li>
                              Refrain from uploading or transmitting any
                              harmful, unlawful, or offensive content.
                            </li>
                            <li>
                              Not engage in any activity that may disrupt or
                              interfere with the proper functioning of Inkless
                              Reads.
                            </li>
                            <li>
                              Not attempt to gain unauthorized access to any
                              portion of Inkless Reads or its related systems or
                              networks.
                            </li>
                          </ul>
                          <br />
                          <h2>3. Third-Party Content</h2>
                          <p>
                            Inkless Reads may include links to third-party
                            websites, products, or services. We do not endorse
                            or assume any responsibility for the content,
                            accuracy, or practices of these third parties. Your
                            interaction with any third-party website or service
                            is at your own risk.
                          </p>
                          <br />
                          <h2>4. Limitation of Liability</h2>
                          <p>
                            Inkless Reads and its affiliates, directors,
                            employees, agents, and licensors shall not be liable
                            for any indirect, incidental, special,
                            consequential, or punitive damages arising out of or
                            in connection with your use of Inkless Reads, even
                            if advised of the possibility of such damages.
                          </p>
                          <br />
                          <h2>5. Indemnification</h2>
                          <p>
                            You agree to indemnify and hold Inkless Reads and
                            its affiliates, directors, employees, agents, and
                            licensors harmless from any claim or demand,
                            including reasonable attorneys' fees, made by any
                            third party due to or arising out of your breach of
                            these Terms of Use or your violation of any law or
                            the rights of a third party.
                          </p>
                          <br />
                          <h2>6. Governing Law</h2>
                          <p>
                            These Terms of Use shall be governed by and
                            construed in accordance with the laws of the
                            Republic of The Philippines. Any legal actions or
                            proceedings arising out of or relating to these
                            terms shall be exclusively brought in the courts of
                            federal or state courts located in Manila,
                            Philippines.
                          </p>
                          <br />
                          <h2>7. Changes to the Terms of Use</h2>
                          <p>
                            Inkless Reads reserves the right to modify or update
                            these Terms of Use at any time without prior notice.
                            Continued use of Inkless Reads after any such
                            changes shall constitute your consent to such
                            changes.
                          </p>
                          <br />
                          <h2>8. Contact Us</h2>
                          <p>
                            If you have any questions or concerns regarding
                            these Terms of Use, please contact us at
                            +630000000000.
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-lg btn-dark"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-lg btn-outline-dark w-100"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  type="submit"
                >
                  Sign up
                </button>
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
                        className="modal-title fs-4 text-dark"
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
                    <div className="modal-body px-4">
                      <form
                        method="post"
                        className="row g-3 needs-validation"
                        noValidate
                      >
                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingfirstName"
                            placeholder="First Name"
                            name="firstName"
                            onChange={(e) => {
                              setFirstname(e.target.value);
                            }}
                            required
                          />
                          <label
                            className="text-dark"
                            htmlFor="floatingfirstName"
                          >
                            First Name
                          </label>
                        </div>

                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatinglastName"
                            placeholder="last Name"
                            name="lastName"
                            onChange={(e) => {
                              setLastname(e.target.value);
                            }}
                            required
                          />
                          <label
                            className="text-dark"
                            htmlFor="floatinglastName"
                          >
                            Last Name
                          </label>
                        </div>

                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingRemail"
                            placeholder="name@example.com"
                            name="email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                          />
                          <label className="text-dark" htmlFor="floatingRemail">
                            Email address
                          </label>
                        </div>

                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="floatingNumber"
                            placeholder="Number"
                            name="number"
                            onChange={(e) => {
                              setNumber(e.target.value);
                            }}
                            required
                          />
                          <label className="text-dark" htmlFor="floatingNumber">
                            Contact Number
                          </label>
                        </div>

                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingRpassword"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            required
                          />
                          <label
                            className="text-dark"
                            htmlFor="floatingRpassword"
                          >
                            Password
                          </label>
                        </div>

                        <div className="form-floating col-md-6 mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingCpassword"
                            placeholder="Cpassword"
                            required
                          />
                          <label
                            className="text-dark"
                            htmlFor="floatingCpassword"
                          >
                            Confirm Password
                          </label>
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
                    <div className="modal-footer px-4">
                      <div className="col-12">
                        <input
                          className="btn btn-lg btn-outline-dark w-100"
                          type="submit"
                          onClick={register}
                        />
                      </div>
                    </div>
                    <h1
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {registerStatus}
                    </h1>
                  </div>
                </div>
              </div>
              {/* <!-------End of User Login/Register---------> */}
            </div>
          </div>
        </div>

        {/* <!-- Footer--> */}
        <footer className="py-3 bg-dark fixed-bottom">
          <div className="container px-4">
            <p className="m-0 text-center text-white">
              Copyright &copy; Inkless Reads 2023
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
