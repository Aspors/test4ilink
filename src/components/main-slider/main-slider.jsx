import './main-slider.scss';
import Button from '../generic/buttons/buttons';
import { useState } from 'react';
import SliderItem from './slider-items';

// TODO говно форматирование, ставь притиер 

const Slider = (prop) =>{
    // TODO чтобы не гадать какая функция к какому стейту относится, называй их одинаково [posSlider, setPosSlider]
    const [posSlider, setPos] = useState(0);
    const [nextActive, setActive] = useState('slider__btn');
    const [activeNav] = useState('active');
    const [prevActive, setPrevActive] = useState('slider__btn  inactive');

    // TODO это не правильно, не работает, так делать категорически нельзя!!!!
    let counter = 0;

    // TODO используй стрелочные функции
    function nextSlide(){
        if(posSlider === -50){
            setPos(-50);
        }else{
            setPos(posSlider - 50);
            setActive('slider__btn  inactive');
            setPrevActive('slider__btn');
        }
    }
    // TODO ну и это ваще пиздец, я бы полностью переработал логику слайдера 
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
            // TODO ну тут ваще какой-то пихздец, зачем хранить классы в стейте, резолви их сразу по месту либой classnames или тернарками 
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
            {/* TODO че с форматирование сука это не читабельно вообще  */}
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