import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUsername(decodedToken.username || "User");
    } else {
      setUsername("");
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername("");
    navigate("/");
  };

  return (
    <>
      <section className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white flex flex-wrap justify-between items-center h-auto p-4 sm:p-6">
        <Link to="/">
          <h1 className="uppercase font-bold text-xl sm:text-2xl">
            Interview Prep
          </h1>
        </Link>

        <ul
          className={`flex flex-wrap justify-center items-center gap-4 mt-4 sm:mt-0 ${
            token ? "w-full sm:w-[40%]" : "w-full sm:w-[18%]"
          }`}
        >
          {!token ? (
            <>
              <Link to="/submissions-for-all">
                <li className="hover:underline">Submissions</li>
              </Link>
            </>
          ) : (
            <Link to="/dashboard">
              <li className="hover:underline">Submission Dashboard</li>
            </Link>
          )}

          {token ? (
            <>
              <li>
                Welcome Back!{" "}
                <span className="font-bold text-lg">{username}</span>
              </li>
              <li
                className="bg-pink-900 p-2 rounded-md cursor-pointer hover:bg-pink-700 transition"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <Link to="/register">
              <li className="bg-pink-900 p-2 rounded-md hover:bg-pink-700 transition">
                Register
              </li>
            </Link>
          )}
        </ul>
      </section>
    </>
  );
};

export default Navbar;
