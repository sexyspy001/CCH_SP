import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Google Analytics
const GA_ID = "G-JN9GXS6VFF";

const script1 = document.createElement("script");
script1.async = true;
script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`;
document.head.appendChild(script2);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
