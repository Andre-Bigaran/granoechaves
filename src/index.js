import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Onepage from "./pages/onepage/index";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Verifica se o dispositivo é móvel
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Função para bloquear o scroll horizontal
function disableHorizontalScroll() {
  if (isMobileDevice()) {
    // Salva a posição atual do scroll
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollLeft =
      window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft ||
      0;

    // Bloqueia o scroll horizontal
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    // Restaura o scroll vertical
    document.body.style.overflowY = "scroll";
    document.documentElement.style.overflowY = "scroll";

    window.scrollTo(scrollLeft, scrollTop);
  }
}

// Função para habilitar o scroll horizontal
function enableHorizontalScroll() {
  document.body.style.overflowX = "";
  document.documentElement.style.overflowX = "";
}

// Adiciona os listeners para bloquear/desbloquear o scroll horizontal
window.addEventListener("load", disableHorizontalScroll);
window.addEventListener("resize", disableHorizontalScroll);
window.addEventListener("orientationchange", disableHorizontalScroll);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Onepage />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
