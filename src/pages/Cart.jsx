import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className="page">
      <h1>My Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}