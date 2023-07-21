import React from "react";
import MainContent from "./MainContent";
import Testimonial from "./Testimonial";
import Events from "./Events";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* hero */}
      <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to Inkless Reads,
            </h1>
            <p class="lead">
              where the wonders of literature come alive in the digital realm.
              Immerse yourself in a diverse collection of ebooks across genres,
              accessible anytime, anywhere. Discover new worlds, gain knowledge,
              and embark on unforgettable reading experiences with just a few
              clicks. Welcome to a world of endless possibilities.
            </p>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src="https://helpx.adobe.com/content/dam/help/en/indesign/how-to/ebook-cover-design/jcr_content/main-pars/image_307630167/ebook-cover-design_1000x560.jpg.img.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>

      <div>
        <MainContent
          picks="Featured Picks"
          api="https://gutendex.com/books/?page=2&topic=mystery"
        />
        <MainContent
          picks="Adult"
          api="https://gutendex.com/books?search=romance"
        />
        <MainContent
          picks="Kids"
          api="https://gutendex.com/books/?page=2&topic=children"
        />
      </div>

      {/* Events Section */}
      <Events />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
