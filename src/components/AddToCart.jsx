const AddToCart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      {cart.map((item, i) => (
        <div className="row">
          <small className="col-8">{item}</small>
        </div>
      ))}
    </>
  );
};

export default AddToCart;
