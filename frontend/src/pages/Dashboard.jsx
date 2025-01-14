import React, { useEffect, useState } from "react";
import { fetchSubmissions, deleteSubmission } from "../services/api.js";
import { Link } from "react-router-dom";
import EditSubmission from "./EditSubmission.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [submissionToEdit, setSubmissionToEdit] = useState(null);

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

  const handleDelete = async (id) => {
    console.log("Deleting submission with ID:", id);
    if (!id) {
      alert("Invalid submission ID");
      return;
    }
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        await deleteSubmission(id);
        setSubmissions(
          submissions.filter((submission) => submission._id !== id)
        );
      } catch (err) {
        console.error(err);
        alert("Error deleting submission");
      }
    }
  };

  const handleEdit = (submission) => {
    setSubmissionToEdit(submission);
    setEditModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 pb-20 bg-pink-200">
        <section className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-pink-800">Submissions</h1>
          <Link to="/create">
            <span>
              <button className="bg-pink-800 text-white px-4 py-2 rounded-lg">
                Create Submission
              </button>
            </span>
          </Link>
        </section>

        <ul className="space-y-4">
          {submissions.map((submission) => (
            <li
              key={submission._id}
              className="p-4 border rounded-lg shadow bg-white hover:scale-y-105 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold">{submission.company}</h2>
              <p className="text-sm md:text-base">
                {submission.name} ({submission.country})
              </p>
              <p className="text-sm md:text-base">
                {submission.questions.join(", ")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => handleEdit(submission)}
                  className="bg-cyan-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(submission._id)}
                  className="bg-pink-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {editModalOpen && (
          <EditSubmission
            submission={submissionToEdit}
            closeModal={() => setEditModalOpen(false)}
            setSubmissions={setSubmissions}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
