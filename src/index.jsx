import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./static/fonts/fonts.scss";
import "./index.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);
