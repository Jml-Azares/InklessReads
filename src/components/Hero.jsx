import React from "react";
import "./Hero.css";
import HeroImage from "../assets/images/Header-Jumbo.jpg";

export default function Hero() {
  return (
    <div
      className="px-4 py-5 text-center container-fluid"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-5 fw-bold text-light">Inkless Reads</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-light">
          Welcome to our ebook website, where the wonders of literature come
          alive in the digital realm. Immerse yourself in a diverse collection
          of ebooks across genres, accessible anytime, anywhere. Discover new
          worlds, gain knowledge, and embark on unforgettable reading
          experiences with just a few clicks. Welcome to a world of endless
          possibilities at our ebook website.
        </p>
      </div>
    </div>
  );
}
