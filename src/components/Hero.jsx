import React from "react";
import Search from "./search";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="px-4 py-5 text-center container-fluid hero-container">
        <h1 className="display-5 fw-bold text-light mb-3 IK">INKLESS READS</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-light">
            Welcome to Inkless Reads, where the wonders of literature come alive
            in the digital realm. Immerse yourself in a diverse collection of
            ebooks across genres, accessible anytime, anywhere. Discover new
            worlds, gain knowledge, and embark on unforgettable reading
            experiences with just a few clicks. Welcome to a world of endless
            possibilities.
          </p>
        </div>
        <div className="mx-auto">
          <Search />
        </div>
      </div>
    </>
  );
}
