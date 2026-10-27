
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="container">
      <h1>Мій кошик</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Кошик поки що порожній.</p>
          <Link to="/">Перейти до товарів</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Ціна: {item.price} грн</p>

                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>

                  <p>
                    Сума: {item.price * item.quantity} грн
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Видалити товар
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="total-price">
            Загальна сума: {totalPrice} грн
          </h2>
        </>
      )}
    </main>
  );
}

export default Cart;
