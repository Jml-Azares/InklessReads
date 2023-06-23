import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import BookExpo from "../assets/images/bookExpo.jpg";
import BookExpo2 from "../assets/images/bookExpo2.jpg";
import BookExpo3 from "../assets/images/bookExpo3.jpg";
import BookExpo4 from "../assets/images/bookExpo4.jpg";

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
    <div className="container mx-auto Events">
      <h1 className="">Upcoming Events</h1>

      {/* ----------------1st row event slider animation---------------- */}
      <div className="row box mb-2">
        <div className="col-md-6">
          <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2">
                Jacob Javits Center in New York City
              </strong>
              <h3 className=" mb-0">Book Expo</h3>
              <div className="mb-1 text-danger">Nov 12 2023</div>
              <p className="card-text mb-auto">
                BookExpo Online 2023 will also present an additional day of
                bookseller programming in late July that will include education
                sessions, speed dating, UnBound content, and publisher
                showcases.
              </p>
              <Link to="#" className="icon-link gap-1">
                Buy Tickets
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={BookExpo}
                alt="Book Expo"
                className="eventImg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2">
                Edinburgh EH2 4YN, United Kingdom
              </strong>
              <h3 className=" mb-0">Edinburgh Book Festival</h3>
              <div className="mb-1 text-danger">Aug 11 2024</div>
              <p className="mb-auto">
                We are the largest public celebration of the written word in the
                world. Every August, we bring around more than 500 writers and
                thinkers across the planet.
              </p>
              <Link to="#" className="icon-link gap-1">
                Buy Tickets
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={BookExpo2}
                alt="Book Expo2"
                className="eventImg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/*---------------- 2nd row event slider animation----------------- */}
      <div className="row box mb-2">
        <div className="col-md-6">
          <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2">
                World Trade Center Pasay City
              </strong>
              <h3 className=" mb-0">Philippine Book Festival</h3>
              <div className="mb-1 text-danger">December 2 2023</div>
              <p className="card-text mb-auto">
                From December 2 to 4, bibliophiles can feast on the stalls of
                over 140 publishers whose wide range of books for all ages
                offerings are all Filipino-authored.
              </p>
              <Link to="#" className="icon-link gap-1">
                Buy Tickets
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={BookExpo3}
                alt="Book Expo3"
                className="eventImg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2">Online</strong>
              <h3 className=" mb-0"> Manila International Book Fair</h3>
              <div className="mb-1 text-danger">Nov 24 2023</div>
              <p className="mb-auto">
                From the smell of fresh ink and digital paper to the buzz of
                enthusiastic readers, there's nothing quite like the energy of
                the Manila International Book Fair!
              </p>
              <Link to="#" className="icon-link gap-1 ">
                Buy Tickets
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={BookExpo4}
                alt="Book Expo4"
                className="eventImg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
