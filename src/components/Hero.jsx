import React from "react";
import "./Hero.css";
import HeroImage from "../assets/images/IKhero.png";

export default function Hero() {
  return (
    <div class="container col-xxl-8 px-4">
      <div class="row flex-lg-row-reverse align-items-center g-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={HeroImage}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Inkless Reads
          </h1>
          <p class="lead">
            Welcome to our ebook website, where the wonders of literature come
            alive in the digital realm. Immerse yourself in a diverse collection
            of ebooks across genres, accessible anytime, anywhere. Discover new
            worlds, gain knowledge, and embark on unforgettable reading
            experiences with just a few clicks. Welcome to a world of endless
            possibilities at our ebook website.
            <br />
            <br />
            At our ebook website, we celebrate the marriage of convenience and
            literature, offering you a seamless and immersive reading experience
            like no other. Whether you're an avid reader, a casual explorer, or
            a student seeking scholarly resources, our digital library houses an
            extensive collection of ebooks across diverse genres and
            disciplines.
          </p>
        </div>
      </div>
    </div>
  );
}
