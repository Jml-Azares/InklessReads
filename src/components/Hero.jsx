import React from "react";
import "./Hero.css";
import HeroImage from "../assets/images/heroimg.jpg";

export default function Hero() {
  return (
    <div class="container my-5 hero">
      <div class="row p-4 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
            Inkless Reads
          </h1>
          <p class="lead">
            Welcome to Inkless Reads, where the wonders of literature come alive
            in the digital realm. Immerse yourself in a diverse collection of
            ebooks across genres, accessible anytime, anywhere. Discover new
            worlds, gain knowledge, and embark on unforgettable reading
            experiences with just a few clicks. Welcome to a world of endless
            possibilities at our ebook website.
          </p>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={HeroImage} alt="" width="720" />
        </div>
      </div>
    </div>
  );
}
