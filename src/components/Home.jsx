import React from "react";
import MainContent from "./MainContent";
import Testimonial from "./Testimonial";
import Events from "./Events";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to Inkless Reads,
            </h1>
            <p className="lead">
              where the wonders of literature come alive in the digital realm.
              Immerse yourself in a diverse collection of ebooks across genres,
              accessible anytime, anywhere. Discover new worlds, gain knowledge,
              and embark on unforgettable reading experiences with just a few
              clicks. Welcome to a world of endless possibilities.
            </p>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://helpx.adobe.com/content/dam/help/en/indesign/how-to/ebook-cover-design/jcr_content/main-pars/image_307630167/ebook-cover-design_1000x560.jpg.img.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>

      <div>
        <MainContent
          picks="Literature"
          api="https://gutendex.com/books/?page=2&topic=literature"
        />
        <MainContent
          picks="Romance"
          api="https://gutendex.com/books?search=romance"
        />
        <MainContent
          picks="History"
          api="https://gutendex.com/books/?page=2&topic=history"
        />
      </div>

      {/* Events Section */}
      <Events />
      <Testimonial />
    </>
  );
};

export default Home;
