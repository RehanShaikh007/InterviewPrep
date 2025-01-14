import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateSubmissions from "./pages/CreateSubmissions.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import EditSubmission from "./pages/EditSubmission.jsx";
import LandingSubmissions from "./pages/LandingSubmissions.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/submissions-for-all" element={<LandingSubmissions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateSubmissions />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditSubmission />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
