import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 display-6 fw-bold text-white">
        🛒 Your Shopping Cart
      </h2>

      {/* 🔙 Back Button */}
      <div className="text-center mb-5">
        <Link to="/products" className="btn btn-outline-primary">
          ← Back to Products
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted fs-5">Your cart is empty.</div>
      ) : (
        <>
          <div className="row justify-content-center">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="cart-card d-flex align-items-center mb-4"
                style={{
                  width: "95%",
                  maxWidth: "1100px",
                  backgroundColor: "#2c2f33",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  borderRadius: "20px",
                  padding: "30px",
                  gap: "30px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "14px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
                  }}
                />
                <div className="text-white flex-grow-1">
                  <h4 className="fw-bold mb-3 fs-4">{item.title}</h4>
                  <p className="mb-0 fs-5 text-light">
                    ${item.price} <span className="ms-3">× {item.qty}</span>
                  </p>
                </div>
                <button
                  className="btn btn-outline-danger btn-lg"
                  onClick={() => removeFromCart(item._id)}
                  title="Remove from Cart"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total and Checkout */}
          <div className="text-center mt-5">
            <h3 className="text-white mb-4">🧾 Total: ${totalAmount.toFixed(2)}</h3>
            <button
              className="btn btn-success px-5 py-2 fs-5 shadow"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
