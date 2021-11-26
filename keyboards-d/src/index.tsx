import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home'
import CreateTask from './routes/createTask';
import SignIn from './routes/signIn';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create-task" element={<CreateTask />} />
      <Route path="sign-in" element={<SignIn />} />
    
    </ Routes>
  </BrowserRouter>,
  document.getElementById('root')
);