import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container product-detail-container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="col-md-6">
          <h6 className="product-category">{product.category}</h6>
          <h2 className="product-title">{product.title}</h2>

          {/* ⭐ Star Rating */}
          <div className="star-rating mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} style={{ color: star <= 4 ? "gold" : "#555" }} />
            ))}
          </div>

          <p className="product-description">{product.description}</p>
          <h4 className="product-price">${product.price}</h4>

          {/* 🔢 Quantity Selector */}
          <div className="mb-3 d-flex align-items-center gap-2">
            <label htmlFor="quantity" className="text-white">Qty:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="form-control form-control-sm"
              style={{ width: "90px" }}
            />
          </div>

          <button
            className="btn btn-success product-add-btn"
            onClick={() => addToCart({ ...product, qty: quantity })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
