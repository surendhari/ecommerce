import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <h1>E-commerce</h1>
      <div>
        <Link to="/">Home</Link>    
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}