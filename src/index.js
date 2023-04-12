import React from "react";
import ReactDOMClient from "react-dom/client";
import "./css/main.css";
import App from "./app";

const link = ReactDOMClient.createRoot(document.getElementById("main"));
link.render(<App />);
