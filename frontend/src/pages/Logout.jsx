import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/api.js";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-red-600 transition-all"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
