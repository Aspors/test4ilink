import "./main.scss";
import "../container/container";
import Maincard from "../main-card/main-card";
import Slider from "../main-slider/main-slider";
import Modal from "../modal/modal";
import { useState } from "react";

const Main = () => {
  const [modal, setModal] = useState(false);
  console.log(`main:${modal}`);
  return (
    <main>
      <div className="container">
        <h1>Добро пожаловать в академию!</h1>
        <Maincard></Maincard>
        <Slider modal={modal} setModal={setModal}></Slider>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </main>
  );
};

export default Main;
