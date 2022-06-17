import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const setRem = () => {
  let designSize = 1600;
  let html = document.documentElement;
  let windowWidth = html.clientWidth;
  let rem = (windowWidth * 100) / designSize;
  document.documentElement.style.fontSize = rem + "px";
};
window.addEventListener("load", setRem);
window.addEventListener("resize", setRem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
