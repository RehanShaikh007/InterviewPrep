import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <section className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white flex justify-between items-center p-4 sm:p-6 relative">
        <Link to="/">
          <h1 className="uppercase font-bold text-xl sm:text-2xl">
            Interview Prep
          </h1>
        </Link>

        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          &#9776;
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[100%] left-0  bg-cyan-700 sm:bg-transparent sm:static sm:flex sm:items-center w-full sm:w-auto sm:gap-4 p-4 sm:p-0 z-10`}
        >
          {!token ? (
            <Link
              to="/submissions-for-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="block sm:inline-block hover:underline mb-2 sm:mb-0">
                Submissions
              </li>
            </Link>
          ) : (
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <li className="block sm:inline-block hover:underline mb-2 sm:mb-0">
                Submission Dashboard
              </li>
            </Link>
          )}

          {token ? (
            <>
              <li className="block sm:inline-block mb-2 sm:mb-0">
                Welcome Back!{" "}
                <span className="font-bold text-lg">{username}</span>
              </li>
              <li
                className="bg-pink-900 p-2 rounded-md cursor-pointer hover:bg-pink-700 transition block sm:inline-block mb-2 sm:mb-0"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                Logout
              </li>
            </>
          ) : (
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <li className="bg-pink-900 p-2 rounded-md hover:bg-pink-700 transition block sm:inline-block mb-2 sm:mb-0">
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
