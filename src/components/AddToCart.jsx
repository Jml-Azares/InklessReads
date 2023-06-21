import useFetch from "../API/useFetch";

const AddToCart = ({ cart }) => {
  return (
    <>
      {cart.map((item) => (
        <div className="row" key={item.id}>
          <small className="col-8">{item.title}</small>
        </div>
      ))}
    </>
  );
};

export default AddToCart;
