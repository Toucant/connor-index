import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Task } from "./components/Task";
import Home from "./Home";
import CreateTask from "./routes/createTask";
import CreateUser from "./routes/createUser";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create-task" element={<CreateTask />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="/task/edit/:id" element={<Task />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
