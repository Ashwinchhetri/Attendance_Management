import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Mark from "./views/mark";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="mark" element={<Mark />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();