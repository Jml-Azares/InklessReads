import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";

function ScienceFiction() {
  const { data, loading, error } = useFetch(
    "https://gutendex.com/books?search=science%20fiction"
  );

  return (
    <div className="container-fluid">
      <div className="row my-5 py-5">
        <div className="row px-5">
          <h2 className="col-12 pb-5" style={{ textAlign: "center" }}>
            Science Fiction
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

                className="gallery-card-parent-div col-4 col-lg-2 p-2"

                key={item.id}
              >
                <div className="gallery-card-img p-1">
                  <Link to={`/book/${item.id}`}>
                    <img src={item.formats["image/jpeg"]} />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ScienceFiction;
