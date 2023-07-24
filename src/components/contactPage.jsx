import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactPage.css";

function contactPage() {
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
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className=" row py-5 align-items-center mx-5">
        <h2 className="text-dark py-5 text-center">Contact Details</h2>
        <div className="col-sm-12 col-md-6">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <ul>
                <li>
                  <i className="fa-solid fa-phone-volume"></i> +639000000000
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  inkless.reads@gmail.com
                </li>
                <li>
                  <i className="fa-solid fa-globe"></i> Philippines
                </li>
              </ul>
            </div>
            <hr className="w-75 mx-auto mt-5" />
            <div className="col-12">
              <form className="my-5 d-flex flex-column align-items-center">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control w-100"
                    placeholder="Email address"
                  />
                  <button className="btn btn-dark w-100" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <h2 className="text-center text-dark"> We'd love to hear from you</h2>
          <form
            className="contactForm w-100  mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input
              className="inputContactform form-control"
              type="text"
              name="user_name"
            />
            <label className="">Email</label>
            <input className="form-control" type="email" name="user_email" />
            <label>Message</label>
            <textarea className="contactTextarea form-control" name="message" />
            <input
              className="btn btn-dark mt-2 w-100"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default contactPage;
