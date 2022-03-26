import "./main-slider.scss";
import "../generic/buttons/buttons";
import { useRef, useState } from "react";
import { SliderItem, sliderItemsNum } from "./slider-items";

const Slider = ({ modal, setModal }) => {
  const [posSlider, setPos] = useState(0);
  const [nextActive, setActive] = useState("slider__btn");
  const [prevActive, setPrevActive] = useState("slider__btn  inactive");
  const sliderWindowWidth = useRef(0);
  const numberOfNav =
    window.innerWidth <= 768 ? sliderItemsNum : sliderItemsNum / 2;

  function nextSlide() {
    if (posSlider === -sliderWindowWidth.current.clientWidth - 24) {
      setPos(-sliderWindowWidth.current.clientWidth - 24);
    } else {
      setPos(posSlider - sliderWindowWidth.current.clientWidth - 24);
      setActive("slider__btn  inactive");
      setPrevActive("slider__btn");
    }
  }

  function prevSlide() {
    if (posSlider === 0) {
      setPos(0);
    } else {
      setPos(posSlider + sliderWindowWidth.current.clientWidth + 24);
      setPrevActive("slider__btn  inactive");
      setActive("slider__btn");
    }
  }

  return (
    <div className="slider">
      <h3>Отзывы</h3>
      <button
        className="plus"
        onClick={() => setTimeout(() => setModal(true), 350)}>
        <span>Добавить отзыв</span>
      </button>
      <div ref={sliderWindowWidth} className="slider__window_wrapper">
        <div
          className="slider__window"
          style={{ transform: "translateX(" + posSlider + "px)" }}>
          <SliderItem></SliderItem>
        </div>
      </div>
      <div className="nav">
        {Array.from({ length: numberOfNav }).map((item, index) => (
          <div
            key={index}
            id={index}
            onClick={(e) =>
              setPos(
                sliderWindowWidth.current.clientWidth * e.target.id !== 0
                  ? -sliderWindowWidth.current.clientWidth * index - 24
                  : 0
              )
            }
            className={
              posSlider ===
                index * -sliderWindowWidth.current.clientWidth - 24 ||
              posSlider === index * -sliderWindowWidth.current.clientWidth ||
              posSlider === index
                ? "active"
                : ""
            }></div>
        ))}
      </div>
      <div className="slider__buttons">
        <div className="pillow">
          <div className={prevActive} onClick={prevSlide} id="prev" />
        </div>
        <div className="pillow">
          <div className={nextActive} id="next" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
