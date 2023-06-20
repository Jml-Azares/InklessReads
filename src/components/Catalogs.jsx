import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./catalog.css";

function Catalog({ api, catalog }) {
  const { data, loading, error } = useFetch(api);

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="row px-4">
          <h2 className="col-12 pb-5" style={{ textAlign: "left" }}>
            {catalog}
          </h2>
        </div>
        <div className="row m-0">
          {error && <div>{error}</div>}
          {loading && (
            <div className="col-12 d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {data &&
            data.map((item) => (
              <div
                className="gallery-card-parent-div col-4 col-lg-2 p-4"
                key={item.id}
                style={{ position: "relative" }}
              >
<<<<<<< HEAD
                <div className="gallery-card-img p-2">
=======
                <div
                  className="gallery-card-img py-2"
                  style={{ position: "relative", overflow: "hidden" }}
                >
>>>>>>> main
                  <Link to={`/book/${item.id}`}>
                    <img
                      src={item.formats["image/jpeg"]}
                      style={{ width: "100%" }}
                      alt={item.title}
                      className="book-cover-image"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
