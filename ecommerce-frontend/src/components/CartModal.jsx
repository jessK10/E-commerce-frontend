import { useCart } from "../context/CartContext";
import "../styles/CartModal.css";

function CartModal({ isOpen, onClose }) {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h5>{item.title}</h5>
                  <p>${item.price} × {item.qty}</p>
                </div>
              </div>
            ))}
            <hr />
            <h4>Total: ${total}</h4>
            <button className="btn btn-success w-100 mt-3">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
