import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Home from './Home'
import CreateTask from './routes/createTask';
import SignIn from './routes/signin';
import SignUp from './routes/singup';
ReactDOM.render(
  <Router>
   
  <Routes>
  <Route path="/" element={<Home/>} />
      <Route path="create-task" element={<CreateTask/>} />
      <Route path="sign-up" element={<SignUp/>} />
      <Route path="sign-in" element={<SignIn/>}>Login</Route>
  </Routes>
  </Router>,
  document.getElementById('root')
);