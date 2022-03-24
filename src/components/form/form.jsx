import './form.scss';

const Form = ({modalClose}) => {
 return(
    <form>
        <div className="modal__close" onClick={modalClose}>&times;</div>
        <div className="modal__title">Отзыв</div>
        <label htmlFor="username">
                <span>Как вас зовут?</span>
        </label>
        <div className="wyn">
            <input type="text" id='username' placeholder="Имя Фамилия"  required/>
            <button className="plus" type="button">
                <label htmlFor="sendFile">
                    <span>Загрузить фото</span>
                    <input type="file" id="sendFile" />
                </label>
            </button>
        </div>
        <label htmlFor="feedback_field"><span>Все ли вам понравилось?</span></label>
        <div className="feedback">
                <textarea 
                name="feedback" 
                id="feedback_field"
                placeholder="Напишите пару слов о вашем опыте..."
                required>
                </textarea>
                <span id="counter">0/200</span>
        </div>
        <div className="submit">
            <button span='Отправть отзыв' type="submit">
                    <span>Отправть отзыв</span>
            </button>
            <span className="alert">
                Все отзывы проходят модерацию в течение 2 часов
            </span>
        </div>
    </form>
 )
}

export default Form;