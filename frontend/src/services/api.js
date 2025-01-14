import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const fetchSubmissions = () => API.get("/submissions");
export const createSubmissions = (data) => API.post("/submissions", data);
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const updateSubmission = (id, data) =>
  API.put(`/submissions/${id}`, data);
export const deleteSubmission = (id) => API.delete(`/submissions/${id}`);
export const logoutUser = () => API.get("/users/logout");
