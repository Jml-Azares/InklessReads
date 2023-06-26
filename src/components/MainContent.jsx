import { useState, useEffect } from "react";
import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./MainContent.css";

export default function MainContent({ picks, api }) {
  const { data, loading, error } = useFetch(api);
  const [sliderWidth, setSliderWidth] = useState(null);
  const [perPage, setPerPage] = useState(10);
  let resizeTimeout;

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const windowWidth = window.innerWidth;
      let newPerPage = 10; // Default value for large screens

      if (windowWidth < 768) {
        newPerPage = 3;
        setSliderWidth("small");
      } else if (windowWidth < 1024) {
        newPerPage = 6;
        setSliderWidth("medium");
      } else {
        setSliderWidth("large");
      }

      setPerPage(newPerPage);
    }, 250); // Adjust the debounce delay as needed
  };

  useEffect(() => {
    handleResize();

    // Cleanup function
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const [sliderId] = useState(
    `splide-${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    if (data) {
      const splide = new Splide(`#${sliderId}`, {
        perPage,
        rewind: true,
        pagination: false,
      });

      splide.mount();
    }
  }, [data, perPage]);

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
        {picks && (
          <section className="media-scroller p-1 m-0 splide" id={sliderId}>
            <div className="splide__track">
              <ul className="splide__list">
                {data &&
                  data.map((item) => (
                    <li
                      className="splide__slide media-element px-1"
                      key={item.id}
                    >
                      <Link to={`/book/${item.id}`}>
                        <div className="book-cover-wrapper p-2">
                          <img
                            src={item.formats["image/jpeg"]}
                            alt={item.title}
                            className="book-cover-image"
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
