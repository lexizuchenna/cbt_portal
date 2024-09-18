import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Test from "./pages/Test";
import CreateQuestions from "./pages/CreateQuestions";

import Header from  './components/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cbt/test/:uid/start" exact element={<Test />} />
          <Route path="/cbt/test/:uid/" exact element={<Test />} />
          <Route path="/cbt/test/:uid/end" exact element={<Test />} />
          <Route path="/create-questions" exact element={<CreateQuestions />} />
        </Routes>
      </Router>
    <ToastContainer />
  </>
  );
}

export default App;
