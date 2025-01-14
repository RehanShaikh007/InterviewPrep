import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-pink-200 flex justify-center items-center w-full min-h-screen flex-col pt-20 px-4">
        <form
          className="bg-white p-6 rounded shadow w-full max-w-md mb-20"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Register</h2>

          <input
            type="text"
            placeholder="Username"
            className="block w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-cyan-600"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="block w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-cyan-600"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="block w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-cyan-600"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button className="bg-cyan-800 text-white px-4 py-2 rounded w-full hover:bg-cyan-700 transition">
            Register
          </button>

          <p className="mt-4 text-center">
            Already have an Account?
            <Link to="/login">
              <span className="text-blue-700 cursor-pointer ml-2 hover:underline">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
