import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      
      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: product })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}