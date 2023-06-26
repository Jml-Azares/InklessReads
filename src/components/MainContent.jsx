// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1513,2701,145,2641,67979,100

import { useState, useEffect } from "react";
import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./MainContent.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MainContent({ picks, api }) {
  const { data, loading, error } = useFetch(api);
  const [perPage, setPerPage] = useState(10);
  const [sliderWidth, setSliderWidth] = useState(null);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setPerPage(3);
      setSliderWidth("small");
    } else if (window.innerWidth < 1024) {
      setPerPage(6);
      setSliderWidth("medium");
    } else {
      setPerPage(10);
      setSliderWidth("large");
    }
  };
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div className={`container-fluid ${sliderWidth !== "small" && "w-75"}`}>
      <div className="row my-5 py-3">
        <div className="row px-5">
          <h2 className="col-12 pb-5" style={{ textAlign: "left" }}>
            {picks}
          </h2>
          {error && <div>{error}</div>}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <Splide
          hasTrack={false}
          className="media-scroller p-1 m-0"
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage,
          }}
        >
          <SplideTrack>
            {data &&
              data.map((item) => (
                <SplideSlide className="media-element px-1" key={item.id}>
                  <Link to={`/book/${item.id}`}>
                    <div className="book-cover-wrapper p-2">
                      <img
                        src={item.formats["image/jpeg"]}
                        alt={item.title}
                        className="book-cover-image"
                      />
                    </div>
                  </Link>
                </SplideSlide>
              ))}
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  );
}
