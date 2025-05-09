import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar({ theme, setTheme }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const openSearch = () => {
    setSearchOpen(true);
    setSearchQuery("");
  };
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`You searched for: ${searchQuery}`);
      setSearchQuery("");
      closeSearch();
    }
  };

  const navLinkStyle = (path) => ({
    position: "relative",
    color: theme === "dark" ? "white" : "black",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: location.pathname === path ? "600" : "400",
    padding: "5px 0",
    marginRight: "20px",
    borderBottom: location.pathname === path ? "2px solid #0d6efd" : "2px solid transparent",
    transition: "all 0.3s ease",
  });

  return (
    <>
      <nav
        className="d-flex justify-content-between align-items-center px-5"
        style={{
          height: "80px",
          backgroundColor: theme === "dark" ? "#1f1f1f" : "#f8f9fa",
          color: theme === "dark" ? "white" : "black",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          position: "relative",
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          className="navbar-brand mb-0 h1"
          style={{
            fontSize: "30px",
            fontWeight: "800",
            textDecoration: "none",
            color: theme === "dark" ? "white" : "black",
            letterSpacing: "1px",
          }}
        >
          🚀 TechXpress
        </Link>

        <div className="d-flex align-items-center">
          <Link to="/" style={navLinkStyle("/")}>Home</Link>
          <Link to="/products" style={navLinkStyle("/products")}>Products</Link>
          <Link to="/about" style={navLinkStyle("/about")}>About</Link>
        </div>

        <div className="d-flex align-items-center gap-4">
          <FaSearch
            size={20}
            style={{ cursor: "pointer", color: theme === "dark" ? "white" : "black" }}
            onClick={openSearch}
          />

          {/* 🛒 CART ICON that navigates to /cart */}
          <div style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
            <FaShoppingCart size={22} style={{ color: theme === "dark" ? "white" : "black" }} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>

          {/* 👤 User dropdown */}
          <div className="position-relative">
            <button
              className="btn btn-link nav-link p-0 border-0"
              onClick={toggleDropdown}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              <FaUser size={20} />
            </button>
            {dropdownOpen && (
              <div
                className="position-absolute end-0 mt-2 p-2 rounded-3"
                style={{
                  backgroundColor: "#1f1f1f",
                  border: "1px solid #333",
                  width: "150px",
                  zIndex: 500,
                }}
              >
                <Link to="/login" className="dropdown-item text-white mb-2">Login</Link>
                <hr className="my-1" style={{ borderColor: "#444" }} />
                <Link to="/signup" className="dropdown-item text-white">Sign Up</Link>
              </div>
            )}
          </div>

          {/* 🌙 Theme Toggle */}
          <button
            className="btn btn-outline-light btn-sm"
            onClick={toggleTheme}
            style={{ fontSize: "14px" }}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* 🔎 Search Bar */}
      {searchOpen && (
        <div
          className="d-flex justify-content-center align-items-center position-relative"
          style={{
            backgroundColor: theme === "dark" ? "#2c2c2c" : "#e9ecef",
            padding: "15px",
            animation: "slideDown 0.5s ease forwards",
          }}
        >
          <form onSubmit={handleSearchSubmit} className="d-flex w-75 position-relative">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                backgroundColor: theme === "dark" ? "#333" : "#fff",
                color: theme === "dark" ? "white" : "black",
                border: "none",
                borderRadius: "10px",
                paddingLeft: "20px",
              }}
            />
            <FaTimes
              size={22}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: theme === "dark" ? "white" : "black",
              }}
              onClick={closeSearch}
            />
          </form>
        </div>
      )}

      {/* 🔄 Keyframes for slideDown animation */}
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
