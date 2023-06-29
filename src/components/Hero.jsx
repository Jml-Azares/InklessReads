import React, { useEffect, useState } from "react";
import Search from "./search";
import "./Hero.css";

export default function Hero() {
  const [text, setText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const aText = [
    "Welcome to Inkless Reads, where the wonders of literature come alive in the digital realm.",
    "Immerse yourself in a diverse collection of ebooks across genres, accessible anytime, anywhere.",
    "Discover new worlds, gain knowledge, and embark on unforgettable reading experiences with just a few clicks.",
    "Welcome to a world of endless possibilities.",
  ];
  const iSpeed = 100; // time delay of print out
  const iScrollAt = 20; // start scrolling up at this many lines

  let iIndex = 0; // start printing array at this position
  let iTextPos = 0; // initialize text position
  let iArrLength = aText[0].length; // the length of the text array

  useEffect(() => {
    const typewriter = () => {
      let sContents = "";
      let iRow = Math.max(0, iIndex - iScrollAt);

      if (iIndex === aText.length) {
        setTypingComplete(true);
        return;
      }

      while (iRow < iIndex) {
        sContents += aText[iRow++] + "\n";
      }
      setText(sContents + aText[iIndex].substring(0, iTextPos) + "");

      if (iTextPos++ === iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    };

    typewriter();
  }, []);

  return (
    <>
      <div className="px-4 py-5 text-center container-fluid hero-container">
        <h1 className="display-5 fw-bold text-light mb-3 IK">INKLESS READS</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-light">
            <span dangerouslySetInnerHTML={{ __html: text }} />
            {typingComplete && <span className="cursor">|</span>}
          </p>
        </div>
        <div className="mx-auto">
          <Search />
        </div>
      </div>
    </>
  );
}
