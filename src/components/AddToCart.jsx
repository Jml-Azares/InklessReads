const AddToCart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default AddToCart;
