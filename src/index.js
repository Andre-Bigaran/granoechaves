import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Onepage from "./pages/onepage/index";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/index";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Onepage />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
