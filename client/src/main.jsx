import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/login" component={<Login />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/boards" component={<Boards />}>
          <Route path=":id" component={<Board />}></Route>
          <Route path="tasks/:id" component={<TaskEdit />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
