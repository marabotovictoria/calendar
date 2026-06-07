import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

// All references made can be found in the reading material for this Level, unless stated otherwise.
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./sites/Login";
import Register from "./sites/Register";
import Dashboard from "./sites/Dashboard";
import AddEvent from "./sites/AddEvent";
import EditEvent from "./sites/EditEvent";
import Help from "./sites/Help";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { registeredUser } = useAuth();

  return (
    <>
      <NavBar />

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              registeredUser ? (
                <Navigate to="/login" />
              ) : (
                <Navigate to="/register" />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />

          <Route path="/help" element={<Help />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
