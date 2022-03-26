import "./main-card.scss";

const Maincard = () => {
  return (
    <div className="main-card">
      <div className="main-card__image" />
      <div className="main-card__bio">
        <div className="main-card__info">
          <h2>Негодяев Никита</h2>
          <span>04.05.2001</span>
        </div>
        <div className="main-card__data">
          <p>
            <span>Город:</span> Томск
          </p>
          <p id="gender">
            <span>Пол:</span> мужчина
          </p>
          <p>
            <span>Возраст:</span> 20
          </p>
        </div>
        <p>
          <span>О себе:</span> Насколько же в моем стиле - пропустить набор:) Я
          слишком устал, чтобы писать тут что-то о себе, да и не думаю, что я
          пройду. А ещё я 2 часа выбирал фото:) <br /> <br />{" "}
          <i>//но если пройду - расскажу всё в подробностях\\</i>
        </p>
        <p id="pet">
          <span>Домашнее животное:</span> есть
        </p>
      </div>
    </div>
  );
};

export default Maincard;
