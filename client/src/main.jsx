import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Boards from "./pages/Boards";
import Board from "./pages/Board";
import TaskEdit from "./components/TaskEdit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/:id" element={<Board />}>
          <Route path="tasks/:id" element={<TaskEdit />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
