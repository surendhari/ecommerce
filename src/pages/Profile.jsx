import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Profile() {
  const { cart } = useContext(CartContext);

  return (
    <div className="page">
      <h1>Profile</h1>
    </div>
  );
}