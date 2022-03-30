import "./main-slider.scss";
import "../generic/buttons/buttons";
import { useRef, useState } from "react";
import { SliderItem, sliderItemsNum } from "./slider-items";

const Slider = ({ modal, setModal }) => {
  const [posSlider, setPos] = useState(0);
  const [touchTranslate, setTouchTranslate] = useState(0);
  const sliderWindowWidth = useRef(0);
  const [numberOfNav] = useState(
    window.innerWidth <= 768 ? sliderItemsNum : sliderItemsNum / 2
  );
  const [start, setStart] = useState(0);

  function nextSlide() {
    if (
      Math.abs(posSlider - sliderWindowWidth.current.clientWidth) >
      Math.abs(sliderWindowWidth.current.clientWidth * numberOfNav)
    ) {
    } else {
      if (posSlider !== 0) {
        setPos(posSlider - sliderWindowWidth.current.clientWidth);
      } else {
        setPos(-sliderWindowWidth.current.clientWidth - 24);
      }
    }
  }

  function prevSlide() {
    if (posSlider === 0) {
      setPos(0);
    } else {
      if (
        Math.abs(posSlider + sliderWindowWidth.current.clientWidth + 24) === 0
      ) {
        setPos(posSlider + sliderWindowWidth.current.clientWidth + 24);
      } else {
        setPos(posSlider + sliderWindowWidth.current.clientWidth);
      }
    }
  }

  function handleTouchStart(e) {
    setStart(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchTranslate(-(start - e.touches[0].clientX));
  }
  function handleTouchCancel() {
    if (-200 > touchTranslate) {
      setTouchTranslate(0);
      nextSlide();
    }
    if (200 < touchTranslate) {
      setTouchTranslate(0);
      prevSlide();
    } else {
      setTouchTranslate(0);
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
      <div
        ref={sliderWindowWidth}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchCancel}
        onTouchMove={handleTouchMove}
        className="slider__window_wrapper">
        <div
          className="slider__window"
          style={{
            transform: `translateX(${posSlider + touchTranslate}px)`,
          }}>
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
