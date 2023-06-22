import React from "react";
import "./Testimonial.css";
import Review1 from "../assets/images/review1.jpg";
import Review2 from "../assets/images/review2.jpg";
import Review3 from "../assets/images/review3.jpg";

const Testimonial = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Review1} className="d-block reviewImg" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Brad Pitt</h5>
              <p>
                <cite>Celebrity</cite>
              </p>
              <blockquote>
                "Wow! Napadpad ako sa online na website ng ebook na ito, at
                nabigla ako sa koleksyong inaalok nila. Ang interface ay
                user-friendly, na ginagawang madali ang pag-browse at pagtuklas
                ng mga bagong pamagat. Ang pinakamagandang bahagi ay ang mga
                ebook ay available sa iba't ibang format, para mabasa ko ang mga
                ito sa anumang device. Salamat sa kamangha-manghang platform na
                ito!"
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Review2} className="d-block reviewImg" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Dwayne Johnson</h5>
              <p>
                <cite>Celebrity</cite>
              </p>
              <blockquote>
                "Matagal ko nang ginagamit ang online ebook na website na ito,
                at hindi ko ito mairerekomenda nang sapat. Ang hanay ng mga
                genre at may-akda ay kahanga-hanga, na tumutugon sa lahat ng uri
                ng mga mambabasa. Ang layout ng website ay malinis at
                kaakit-akit sa paningin, Dagdag pa, ang abot-kayang presyo para
                sa mga ebook ay ginagawa itong naa-access sa lahat. Ipagpatuloy
                ang mahusay na trabaho!"
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Review3} className="d-block reviewImg" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Leonardo DiCarpio</h5>
              <p>
                <cite>Celebrity</cite>
              </p>
              <blockquote>
                "Bilang isang masugid na mambabasa, sinubukan ko ang ilang
                online na platform ng ebook, ngunit ang isang ito ay
                namumukod-tangi sa iba. Ang paggana ng paghahanap ng website ay
                nangunguna, na nagpapahintulot sa akin na makahanap ng mga
                partikular na pamagat o mag-explore ng mga rekomendasyon nang
                walang kahirap-hirap. Ang kalidad ng mga ebook ay mahusay, may
                tumpak na pag-format at kaunting mga error. Pinahahalagahan ko
                ang pagsisikap na ginagawa ng koponan sa pag-curate ng
                magkakaibang at nakakaengganyo na koleksyon. Ito ang aking
                pupuntahan para sa lahat ng aking pangangailangan sa digital na
                pagbabasa!"
              </blockquote>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonial;
