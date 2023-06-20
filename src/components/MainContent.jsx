// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1513,2701,145,2641,67979,100

import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./MainContent.css";

export default function MainContent({ picks, api }) {
  const { data, loading, error } = useFetch(api);

  return (
    <div className="container-fluid w-75">
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
        <div className="media-scroller p-1 m-0">
          {data &&
            data.map((item) => (
              <div className="media-element p-2" key={item.id}>
                <Link to={`/book/${item.id}`}>
                  <div className="book-cover-wrapper">
                    <img
                      src={item.formats["image/jpeg"]}
                      alt={item.title}
                      className="book-cover-image"
                    />
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
