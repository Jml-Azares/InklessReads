import { Link } from "react-router-dom";

const AddToCart = ({ cart, setCart }) => {
  const handleClick = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      {cart.map((item) => (
        <div className="row" key={item.id}>
          <small className="col-9">{item.title}</small>
          <div className="btn-close-container col-3">
            <Link
              className="btn-close-trash"
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <i class="fa-regular fa-trash-can"></i>
            </Link>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default AddToCart;
