import { useParams } from "react-router-dom";
import useFetch from "../API/useFetch";

const Book = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://gutendex.com/books?ids=${id}`
  );

  return (
    <div className="container-fluid">
      <div className="row book p-md-5">
        {error && <div>{error}</div>}
        {loading && (
          <h4 className="col-12" style={{ textAlign: "center" }}>
            Loading...
          </h4>
        )}
        {data &&
          data.map((item) => (
            <div className="book-details p-3 col-12 row" key={item.id}>
              <img
                className="p-3 col-12 col-md-3 col-lg-2"
                src={item.formats["image/jpeg"]}
              />
              <div className="p-3 col-12 col-md-9 col-lg-10">
                <div>
                  <h3>{item.title}</h3>
                  <h5>By {item.authors.map((author) => author.name)}</h5>
                </div>
                <div>
                  <p>Language/s: {item.languages}</p>
                  <p>Downloads: {item.download_count}</p>
                  <small>Tags: {item.subjects}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Book;
