import { Link } from "react-router-dom";
import "./ProductCard.css"; // ✅ Make sure you create this CSS file

function ProductCard({ product }) {
  return (
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <div className="custom-product-card">
        <img
          src={product.image || "/images/placeholder.jpg"}
          alt={product.title}
          className="card-img-top"
        />
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold">{product.name}</h5>
            <p className="card-text small text-light" style={{ height: "50px", overflow: "hidden" }}>
              {product.description}
            </p>
          </div>
          <div className="mt-3">
            <p className="fw-bold fs-5 text-info">${product.price}</p>
            <Link to={`/products/${product._id}`} className="btn btn-outline-primary btn-sm px-4">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
