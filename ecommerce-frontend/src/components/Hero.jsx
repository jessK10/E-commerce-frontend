import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 900.99,
    description: "Good and modern",
    image: "/images/iphone.jpg",
  },
  {
    id: 2,
    name: "Computer",
    price: 649.99,
    description: "Powerful desktop",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "iPad",
    price: 499.99,
    description: "Latest iPad model",
    image: "/images/ipad.jpg",
  },
];

function Hero() {
  const navigate = useNavigate();
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Welcome to TechXpress";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedTitle((prev) => prev + fullTitle[indexRef.current]);
      indexRef.current += 1;
      if (indexRef.current === fullTitle.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        {/* Hero Banner */}
        <div className="hero-banner-container">
          <img src="/images/hero-banner.png" alt="Hero" className="hero-banner-img" />
          <div className="hero-banner-overlay">
            <h1 className="display-4 fw-bold">Built for Apple Intelligence</h1>
            <p className="lead">MacBook Pro – Experience next-gen performance.</p>
            <button className="btn btn-primary btn-lg mt-3" onClick={() => navigate("/products")}>
              Buy Now
            </button>
          </div>
        </div>

        {/* Typing Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="d-flex flex-column align-items-center justify-content-center text-center p-5"
          style={{
            minHeight: "500px",
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            color: "white",
            borderRadius: "10px",
            margin: "20px",
            marginTop: "-100px",
          }}
        >
          <h1 className="fw-bold display-5 mb-3">{typedTitle}</h1>
          <p className="lead mb-4">
            Your destination for powerful gadgets & next-gen accessories.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </motion.div>

        {/* Centered AI Banner Image */}
        <motion.div
          className="fade-iphone-banner-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="container d-flex justify-content-center">
            <img
              src="/images/ai-iphone-center.png"
              alt="AI Possibilities"
              className="fade-iphone-img"
              style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
            />
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          className="text-center my-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold" style={{ color: "#0d6efd", fontSize: "36px" }}>
            Featured Products
          </h2>
          <hr
            style={{
              width: "80px",
              border: "2px solid #0d6efd",
              margin: "auto",
            }}
          />
        </motion.div>

        <div className="container-fluid px-5">
          <div className="row g-4 justify-content-center">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="card p-3 text-white"
                  style={{
                    backgroundColor: "#1f1f1f",
                    borderRadius: "20px",
                    width: "120%",
                    maxWidth: "320px",
                    height: "460px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="card-body text-center p-2">
                    <h5 className="card-title mb-1">{product.name}</h5>
                    <h4 style={{ color: "#0d6efd" }}>${product.price}</h4>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                      {product.description}
                    </p>
                    <div className="d-flex justify-content-around mt-2">
                      <button className="btn btn-primary btn-sm">Add to Cart</button>
                      <button className="btn btn-secondary btn-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra Features */}
        <motion.div
          className="container my-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row g-4">
            {[
              { icon: "bi-truck", title: "Fast Shipping", desc: "Free shipping on all orders over $50" },
              { icon: "bi-arrow-counterclockwise", title: "Easy Returns", desc: "30 day money back guarantee" },
              { icon: "bi-lock", title: "Secure Checkout", desc: "Safe & secure payment processing" },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-4">
                <div className="bg-dark text-white text-center p-4 rounded feature-card">
                  <i className={`bi ${feature.icon} fs-1 text-primary`}></i>
                  <h5 className="mt-3">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Styles */}
      <style>{`
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 1, 1, 0.5);
        }
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(8, 8, 2, 0.5);
        }
        .hero-banner-container {
          position: relative;
          width: 100%;
          height: 1000px;
          overflow: hidden;
        }
        .hero-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
          animation: zoomFade 2s ease forwards;
        }
        .hero-banner-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
        }
        @keyframes zoomFade {
          from { transform: scale(1.05); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default Hero;
