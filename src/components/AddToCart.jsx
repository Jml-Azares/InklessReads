import useFetch from "../API/useFetch";

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
            <button
              className="btn-close"
              onClick={() => {
                handleClick(item.id);
              }}
            ></button>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default AddToCart;
