import './main-slider.scss';
import Button from '../generic/buttons/buttons';
import { useState } from 'react';
import SliderItem from './slider-items';


const Slider = (prop) =>{
    const [posSlider, setPos] = useState(0);
    const [nextActive, setActive] = useState('slider__btn');
    const [activeNav] = useState('active');
    const [prevActive, setPrevActive] = useState('slider__btn  inactive');
    let counter = 0;

    function nextSlide(){
        if(posSlider === -50){
            setPos(-50);
        }else{
            setPos(posSlider - 50);
            setActive('slider__btn  inactive');
            setPrevActive('slider__btn');
        }
    }
    switch(posSlider){
        case(0):{
            counter = 0;
            break;
        }
        case(-50):{
            counter = 1;
            break;
        }
        default:{
            counter = 2;
            break;
        }
    }
    function prevSlide(){
        if(posSlider === 0){
            setPos(0);
        }else{
            setPos(posSlider + 50);
            setPrevActive('slider__btn  inactive');
            setActive('slider__btn');

        }
    }

    return(
        <div className="slider">
            <h3>Отзывы</h3>
            <Button span='Добавить отзыв' name='plus'/>
            <div className="slider__window_wrapper">
                <div className="slider__window" style={{transform: 'translateX(' + posSlider + '%)' }}>
                    <SliderItem></SliderItem>
                </div>
            </div>
            <div className="nav">
                <div className={counter === 0 ? activeNav : '' }/>
                <div className={counter === 1 ? activeNav : '' }/>
            </div>
            <div className="slider__buttons">
                <div className="pillow">
                <div 
                className={prevActive}
                onClick={prevSlide}
                id="prev"/></div>
                <div className="pillow">
                <div 
                className={nextActive} 
                id="next"
                onClick={nextSlide}
                />
                </div>
            </div>
        </div>
    )
}

export default Slider;