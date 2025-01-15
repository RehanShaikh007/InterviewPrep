import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSubmissions } from "../services/api.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const CreateSubmissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    company: "",
    questions: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        questions: formData.questions.split(",").map((q) => q.trim()),
      };
      await createSubmissions(formattedData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-pink-200 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-800 bg-white text-center">
            Post Interview Questions
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="block w-full mb-4 p-2 border rounded text-sm sm:text-base"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Country"
            className="block w-full mb-4 p-2 border rounded text-sm sm:text-base"
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Company"
            className="block w-full mb-4 p-2 border rounded text-sm sm:text-base"
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
          <textarea
            placeholder="Questions (comma-separated)"
            className="block w-full mb-4 p-2 border rounded text-sm sm:text-base"
            onChange={(e) =>
              setFormData({ ...formData, questions: e.target.value })
            }
          />
          <button className="bg-cyan-800 text-white px-4 py-2 rounded w-full sm:w-auto">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateSubmissions;
