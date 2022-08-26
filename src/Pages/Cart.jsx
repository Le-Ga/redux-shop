import { useSelector } from "react-redux/es/exports";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import { CartItem } from "../Components/cart/CartItem";

function Cart() {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="container">
      <h3 className="total-price">Total price: $ {totalPrice.toFixed(2)}</h3>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length ? (
        <button className="btn indigo darken-4" style={{ margin: "20px 0" }}>
          Check out
        </button>
      ) : (
        <p className="cart-empty">Cart is empty...</p>
      )}
    </div>
  );
}

export { Cart };
