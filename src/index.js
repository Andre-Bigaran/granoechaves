import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Onepage from "./pages/onepage/index";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Onepage />
  </React.StrictMode>
);

reportWebVitals();
