import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../API/useFetch";
import "./BookDetails.css";

const Book = ({ cart, setCart }) => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://gutendex.com/books?ids=${id}`
  );
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  const handleClick = () => {
    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      alert("Item already exists in the cart.");
    } else {
      const newCart = [...cart, { id: id, title: data[0].title }];
      console.log(newCart);
      setCart(newCart);
    }
  };

  return (
    <div className="container-fluid">
      <div
        className={`row book py-5 p-md-5 ${
          animationLoaded ? "animate-book" : ""
        }`}
      >
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
            <div className="book-details m-0 col-12 row" key={item.id}>
              <div className="book-details-img p-3 col-12 col-md-3 col-lg-2">
                <img src={item.formats["image/jpeg"]} alt="Book Cover" />
              </div>

              <div className="book-details-body p-3 col-12 col-md-9 col-lg-10">
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
                <div className="button-container mt-4">
                  <button className="btn" onClick={handleClick}>
                    <p className="user-icon fa-solid fa-cart-shopping"></p>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Book;
