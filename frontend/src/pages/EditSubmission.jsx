import React, { useState } from "react";
import { updateSubmission } from "../services/api.js";

const EditSubmission = ({ submission, closeModal, setSubmissions }) => {
  const [formData, setFormData] = useState({
    name: submission.name,
    country: submission.country,
    company: submission.company,
    questions: submission.questions.join(", "),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        questions: formData.questions.split(",").map((q) => q.trim()),
      };
      const { data } = await updateSubmission(submission._id, updatedData);
      setSubmissions((prev) =>
        prev.map((sub) => (sub._id === submission._id ? data : sub))
      );
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Error updating submission");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        className="bg-white p-6 rounded shadow max-w-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Edit Submission</h2>
        <input
          type="text"
          placeholder="Name"
          className="block w-full mb-4 p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          className="block w-full mb-4 p-2 border rounded"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Company"
          className="block w-full mb-4 p-2 border rounded"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <textarea
          placeholder="Questions (comma-separated)"
          className="block w-full mb-4 p-2 border rounded"
          value={formData.questions}
          onChange={(e) =>
            setFormData({ ...formData, questions: e.target.value })
          }
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSubmission;
