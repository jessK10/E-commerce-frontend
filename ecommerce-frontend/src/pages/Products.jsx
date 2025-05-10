import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products/all`);
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-section container">
      <h1 className="products-title text-center my-5 display-5 fw-bold text-white">
        🛒 Our Products
      </h1>

      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product._id} className="col-md-6 col-lg-4 d-flex justify-content-center mb-5">
            <div
              className="bg-dark text-white p-4 rounded shadow-lg"
              style={{
                width: "350%",
                maxWidth: "450px",
                minHeight: "560px",
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => navigate(`/products/${product._id}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
  src={product.image || "https://via.placeholder.com/450x350?text=No+Image"}
  alt={product.title}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/450x350?text=Image+Not+Found";
  }}
  style={{
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  }}
  className="mb-3"
/>


              <h6 className="text-muted mt-1">{product.category}</h6>
              <h4 className="fw-bold text-center my-2">{product.title}</h4>
              <p
                className="text-light text-center small"
                style={{ height: "60px", overflow: "hidden" }}
              >
                {product.description}
              </p>
              <h5 className="text-info mt-2 mb-3">${product.price}</h5>

              <button
                className="btn btn-outline-info btn-sm mt-auto px-4"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${product._id}`);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
