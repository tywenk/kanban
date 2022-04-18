import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Boards from "./pages/Boards";
import Board from "./pages/Board";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/:id" element={<Board />}>
          <Route path="tasks/:id" element={<TaskEdit />}></Route>
        </Route>
        <Route path="*" element={<p>There's nothing here: 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
