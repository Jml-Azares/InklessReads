import { useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState(null);

  return (
    <>
      {/* canvas body header */}
      <div className="row">
        <div className="col-1 bookQty">
          <h5>#</h5>
        </div>
        <div className="col-7 bookName">
          <h5>Book Name</h5>
        </div>
        <div className="col-4 bookPrice">
          <h5>Amount</h5>
        </div>
      </div>

      <hr />

      {/* canvas body content */}

      <hr />

      {/* canvas body content */}
      <div className="row">
        <div className="col-1 bookQty text-center">
          <h5>6</h5>
        </div>
        <div className="col-7 bookName">
          <h5>Books</h5>
        </div>
        <div className="col-4 bookPrice">
          <h5>1040 pesos</h5>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
