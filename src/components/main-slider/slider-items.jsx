// import Booba from '../../static/img/sliderItemsPhoto/Booba.jpg';
// import unsetPhoto from '../../static/img/sliderItemsPhoto/unsetPhoto.jpg';
// import Yurina from '../../static/img/sliderItemsPhoto/Yurina.jpg';
// import Dmitry from '../../static/img/sliderItemsPhoto/Dmitry.jpg';


const sliderItems = [
        {sliderPhoto : '/sliderItemsPhoto/Booba.jpg', sliderName: 'Буба Бубенцов', sliderDate: '08.01.2022', sliderDescr: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'},
        {sliderPhoto : '/sliderItemsPhoto/unsetPhoto.jpg', sliderName: 'Илья Анташкевич', sliderDate: '08.01.2022', sliderDescr: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.'},
        {sliderPhoto : '/sliderItemsPhoto/Yurina.jpg', sliderName: 'Юрина Маргарита', sliderDate: '26.12.2021', sliderDescr: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.'},
        {sliderPhoto : '/sliderItemsPhoto/Dmitry.jpg', sliderName: 'Дмитрий Иванов', sliderDate: '16.12.2021', sliderDescr: 'Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.'}
    ]


const SliderItem = () =>{
    
    const renderSliderItems = ({sliderPhoto, sliderName, sliderDate, sliderDescr})=>{

    return(    
    <div className="slider__item">
        <div className="slider__info">
            <div>
                <div className="slider__photo" style={{backgroundImage:`url(${sliderPhoto})`}}/>
                <div className="slider__name">{sliderName}</div>
            </div>
            <div className="slider__date">{sliderDate}</div>
        </div>
        <div className="slider__descr">{sliderDescr}</div>    
    </div>)
    }

    return sliderItems.map(item => renderSliderItems(item));  
}
  



export default SliderItem;