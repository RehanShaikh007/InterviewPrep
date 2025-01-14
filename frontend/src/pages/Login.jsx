import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser(formData);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-pink-200 min-h-screen pt-20 px-4">
        <form
          className="bg-white p-6 rounded shadow w-full max-w-md mb-20"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Login</h2>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="block w-full mb-4 p-2 border rounded"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="block w-full mb-4 p-2 border rounded"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button className="bg-cyan-800 text-white px-4 py-2 rounded w-full hover:bg-cyan-700 transition">
            Login
          </button>

          <p className="mt-4 text-center">
            New User?{" "}
            <Link to="/register">
              <span className="text-blue-700 cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
