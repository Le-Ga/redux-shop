import { useState } from "react";
import { ChangeQuantity } from "../cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function Product(props) {
  const {
    name,
    image,
    flavor,
    price,
    product,
    showAlert = Function.prototype,
  } = props;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <h6>{flavor}</h6>
        </div>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <div className="card-action">
          <button
            onClick={() =>
              dispatch(addItemToCart({ product, quantity }), showAlert(name))
            }
            className="btn blue-grey darken-2"
          >
            Buy
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            $ {price}
          </span>
        </div>
      </div>
    </>
  );
}

export { Product };
