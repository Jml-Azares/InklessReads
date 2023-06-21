import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import BookExpo from "../assets/images/bookExpo.jpg";
import BookExpo2 from "../assets/images/bookExpo2.jpg";
import BookExpo3 from "../assets/images/bookExpo3.jpg";

const Events = () => {
  useEffect(() => {
    const checkBoxes = () => {
      const boxes = document.querySelectorAll(".box");
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    };

    checkBoxes();

    window.addEventListener("scroll", checkBoxes);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="container-fluid Events">
        <h1 className="text-white">Upcoming Events</h1>

        {/* -------------1st row---------------------------------- */}
        <div className="row box">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-ms-12 col-lg- fs-4 container date text-center pt-3 mx-auto">
                <p>24</p>
                <strong>Dec 2023</strong>
                <h5 className="text-danger">Book Expo</h5>
              </div>

              <div className="col-sm-12 col-ms-12 col-lg-4">
                <img src={BookExpo} alt="Book Expo" className="eventImg" />
              </div>

              <div className="col-sm-12 col-ms-12 col-lg-4">
                <div className="custom-block-info eventContent pe-5">
                  <Link
                    to="#"
                    className="events-title mb-3 text-dark-emphasis fs-2"
                  >
                    Private activities
                  </Link>

                  <p className="text-dark-emphasis">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <div className="d-flex flex-wrap border-top mt-4 pt-3">
                    <div className="mb-4 mb-lg-0">
                      <div className="d-flex flex-wrap align-items-center mb-1">
                        <span className="custom-block-span text-dark-emphasis">
                          Location:
                        </span>

                        <p className="mb-0 text-dark-emphasis">
                          National Center, NYC
                        </p>
                      </div>

                      <div className="d-flex flex-wrap align-items-center">
                        <span className="custom-block-span text-dark-emphasis">
                          Ticket:
                        </span>

                        <p className="mb-0 text-dark-emphasis">$250</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center ms-lg-auto">
                      <Link
                        to="#"
                        className="btn btn-secondary text-dark-emphasis"
                      >
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------2nd row-------------------------- */}
        <div className="row box">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-ms-12 col-lg-4">
                <div className="custom-block-info eventContent pe-5">
                  <Link
                    to="#"
                    className="events-title mb-3 text-dark-emphasis fs-2"
                  >
                    Festival Day & Literary Marketplace
                  </Link>

                  <p className="text-dark-emphasis">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <div className="d-flex flex-wrap border-top mt-4 pt-3">
                    <div className="mb-4 mb-lg-0">
                      <div className="d-flex flex-wrap align-items-center mb-1">
                        <span className="custom-block-span text-dark-emphasis">
                          Location:
                        </span>

                        <p className="mb-0 text-dark-emphasis">
                          Brooklyn Borough Hall and surrounding venues
                        </p>
                      </div>

                      <div className="d-flex flex-wrap align-items-center">
                        <span className="custom-block-span text-dark-emphasis">
                          Ticket:
                        </span>

                        <p className="mb-0 text-dark-emphasis">$250</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center ms-lg-auto">
                      <Link
                        to="#"
                        className="btn btn-secondary text-dark-emphasis"
                      >
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-ms-12 col-lg-4">
                <img src={BookExpo2} alt="Book Expo2" className="eventImg" />
              </div>

              <div className="col-sm-12 col-ms-12 col-lg- fs-4 container date text-center pt-3 mx-auto">
                <p>24</p>
                <strong>Feb 2048</strong>
                <h5 className="text-danger">Edinburgh Expo</h5>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------3rd row------------------------- */}
        <div className="row box">
          <div className="col-sm-12 col-md-6 col-lg-4 fs-4 container date text-center pt-3 ">
            <p>30</p>
            <strong>Nov 2023</strong>
            <h5 className="text-danger">Philippine Book Festival</h5>
          </div>

          <div className="col-sm-12 col-ms-12 col-lg-4">
            <img src={BookExpo3} alt="Book Expo3" className="eventImg" />
          </div>

          <div className="col-sm-12 col-ms-12 col-lg-4">
            <div className="custom-block-info eventContent pe-5">
              <Link
                to="#"
                className="events-title mb-3 text-dark-emphasis fs-2"
              >
                International Book Fair
              </Link>

              <p className="text-dark-emphasis">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <div className="d-flex flex-wrap border-top mt-4 pt-3">
                <div className="mb-4 mb-lg-0">
                  <div className="d-flex flex-wrap align-items-center mb-1">
                    <span className="custom-block-span text-dark-emphasis">
                      Location:
                    </span>

                    <p className="mb-0 text-dark-emphasis">
                      World Trade Center, Pasay City
                    </p>
                  </div>

                  <div className="d-flex flex-wrap align-items-center">
                    <span className="custom-block-span text-dark-emphasis">
                      Ticket:
                    </span>

                    <p className="mb-0 text-dark-emphasis">$250</p>
                  </div>
                </div>

                <div className="d-flex align-items-center ms-lg-auto">
                  <Link to="#" className="btn btn-secondary text-dark-emphasis">
                    Buy Ticket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
