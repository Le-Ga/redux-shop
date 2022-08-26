import { data } from "../../data";
import { useDispatch } from "react-redux/es/exports";
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem(props) {
  const { cartItem } = props;
  const cartProducts = data.find((item) => item.id === cartItem.productId);
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={cartProducts.image} alt={cartItem.name} width="150px" />
      <div className="cart-item-body">
        <div className="item-name">{cartProducts.name}</div>
        <div className="item-quantity">Item per: {cartItem.quantity}</div>
        <div className="item-price">
          Price: $ {(cartProducts.price * cartItem.quantity).toFixed(2)}
        </div>
      </div>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img
          className="icon"
          src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
          alt="delete"
        />
      </span>
    </div>
  );
}

export { CartItem };
