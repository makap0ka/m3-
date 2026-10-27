import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">
        TikTok Shop
      </Link>

      <nav>
        <Link to="/">Товари</Link>
        <Link to="/cart">🛒 Кошик ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
