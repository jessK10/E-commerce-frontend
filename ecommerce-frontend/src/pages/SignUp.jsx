import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Signup failed");
        return;
      }

      setSuccessMsg("Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-75">
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          width: "300%",
          maxWidth: "500px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2 className="text-center mb-4 text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control bg-transparent text-white border-0 border-bottom"
              id="username"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username" className="text-white-50">Username</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-transparent text-white border-0 border-bottom"
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="text-white-50">Email</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control bg-transparent text-white border-0 border-bottom"
              id="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="text-white-50">Password</label>
          </div>

          {errorMsg && <div className="alert alert-danger py-2">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success py-2">{successMsg}</div>}

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign Up
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-white-50">or</span>
            <hr className="flex-grow-1" />
          </div>

          <div className="text-center text-white-50">
            Already have an account? <Link to="/login" className="text-primary">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
