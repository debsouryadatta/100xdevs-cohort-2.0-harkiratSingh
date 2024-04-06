import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import App2 from "./App2.jsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App2 />
  </RecoilRoot>
);
