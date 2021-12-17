import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Home from './Home'
import CreateTask from './routes/createTask';
import CreateUser from './routes/createUser';
import Task from './routes/[id]';
ReactDOM.render(
  <Router>
   
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="create-task" element={<CreateTask/>} />
    <Route path="create-user" element={<CreateUser/>} />
    <Route path="*" element={<div>Not Found</div>} />
  </Routes>
  </Router>,
  document.getElementById('root')
);