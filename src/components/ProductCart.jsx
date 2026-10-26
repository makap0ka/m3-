
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price} грн</p>

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          Додати в кошик
        </button>

        {isInCart && (
          <button
            className="remove-button"
            onClick={() => removeFromCart(product.id)}
          >
            Видалити з кошика
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
