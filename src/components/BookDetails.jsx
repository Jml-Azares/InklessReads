import { useParams } from "react-router-dom";
import useFetch from "../API/useFetch";

const Book = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://gutendex.com/books?ids=${id}`
  );

  return (
    <div className="container-fluid ">
      <div className="row book py-5 p-md-5">
        {error && <div>{error}</div>}
        {loading && (
          <div className="col-12 d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {data &&
          data.map((item) => (
            <div className="book-details m-0 col-12 row" key={item.id}>
              <img
                className="p-3 col-12 col-md-3 col-lg-2"
                src={item.formats["image/jpeg"]}
              />
              <div className="p-3 col-12 col-md-9 col-lg-10">
                <div>
                  <h3>{item.title}</h3>
                  <h5>By {item.authors.map((author) => author.name)}</h5>
                </div>
                <hr />
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
