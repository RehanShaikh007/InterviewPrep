import React, { useEffect, useState } from "react";
import { fetchSubmissions } from "../services/api.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const LandingSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const getSubmissions = async () => {
      try {
        const { data } = await fetchSubmissions();
        setSubmissions(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSubmissions();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 pb-20 bg-pink-200">
        <section className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-pink-800">Submissions</h1>
        </section>

        <ul className="space-y-4">
          {submissions.map((submission) => (
            <li
              key={submission._id}
              className="p-4 border rounded-lg bg-white shadow transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">{submission.company}</h2>
              <p className="mb-1">
                {submission.name} ({submission.country})
              </p>
              <p className="text-gray-600">{submission.questions.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default LandingSubmissions;
