// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1513,2701,145,2641,67979,100

import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./MainContent.css";

export default function MainContent({ picks, api }) {
  const { data, loading, error } = useFetch(api);

  return (
    <div className="container-fluid">
      <div className="row my-5 py-5">
        <div className="row px-5">
          <h2 className="col-12 pb-5" style={{ textAlign: "center" }}>
            {picks}
          </h2>
        </div>
        <div className="row px-5">
          {error && <div>{error}</div>}
          {loading && (
            <h4 className="col-12" style={{ textAlign: "center" }}>
              Loading...
            </h4>
          )}
          {data &&
            data.map((item) => (
              <div
                className="card-parent-div col-12 col-md-4 col-lg-2 p-3"
                key={item.id}
              >
                <div className="card-img p-1">
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
