import './main.scss';
import '../container/container';
import Maincard from '../main-card/main-card';
import Slider from '../main-slider/main-slider';

const Main = () =>{
    return(
    <main>
        <div className="container">
            <h1>Добро пожаловать в академию!</h1>
            <Maincard></Maincard>
            <Slider></Slider>
        </div>
    </main>
    );
};

export default Main;