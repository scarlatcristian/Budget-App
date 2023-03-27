import React from "react";
import ReactDom from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const root = document.querySelector("#app");

ReactDom.render(<AppRouter />, root);
