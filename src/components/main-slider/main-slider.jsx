import "./main-slider.scss";
import "../generic/buttons/buttons";
import { useRef, useState } from "react";
import { SliderItem, sliderItemsNum } from "./slider-items";

const Slider = ({ modal, setModal }) => {
  const [posSlider, setPos] = useState(0);
  const sliderWindowWidth = useRef(0);
  const numberOfNav =
    window.innerWidth <= 768 ? sliderItemsNum : sliderItemsNum / 2;

  function nextSlide() {
    if (posSlider === -sliderWindowWidth.current.clientWidth - 24) {
      setPos(-sliderWindowWidth.current.clientWidth - 24);
    } else {
      setPos(posSlider - sliderWindowWidth.current.clientWidth - 24);
    }
  }

  function prevSlide() {
    if (posSlider === 0) {
      setPos(0);
    } else {
      setPos(posSlider + sliderWindowWidth.current.clientWidth + 24);
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
          <div
            className={posSlider === 0 ? "slider__btn inactive" : "slider__btn"}
            onClick={prevSlide}
            id="prev"
          />
        </div>
        <div className="pillow">
          <div
            className={
              posSlider ===
              (numberOfNav - 1) * (-sliderWindowWidth.current.clientWidth - 24)
                ? "slider__btn inactive"
                : "slider__btn"
            }
            id="next"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
