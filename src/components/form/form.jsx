import { useState } from "react";
import "./form.scss";

const Form = ({ modal, setModal }) => {
  const data = {
    feedback: "",
    file: "",
    name: "",
  };

  const [taValue, setTaValue] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [anim, setAnim] = useState(0);

  function handleChange(e) {
    setTaValue(e.target.value);
  }
  function saveName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    data["name"] = name;
    data["feedback"] = taValue;
    data["file"] = file;
    setName("");
    setTaValue("");
    setFile("");
    setAnim(0);
    console.log(data);
    setModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal__close" onClick={() => setModal(false)}>
        &times;
      </div>
      <div className="modal__title">Отзыв</div>
      <label htmlFor="username">
        <span>Как вас зовут?</span>
      </label>
      <div className="wyn">
        <input
          value={name}
          type="text"
          id="username"
          placeholder="Имя Фамилия"
          onChange={saveName}
          required
        />
        <button className="plus" type="button">
          <label htmlFor="sendFile">
            <span>Загрузить фото</span>
            <input
              type="file"
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
                setTimeout(() => setAnim(1), 100);
                setTimeout(() => setAnim(100), 800);
              }}
              id="sendFile"
            />
          </label>
        </button>
      </div>

      <div className={anim ? "loader" : "loader loaderInactive"}>
        <div className="file_icon"></div>
        <span className="file_name">{file.slice(12, file.length)}</span>
        <div className="loading_status">
          <div style={{ width: `${anim}%` }}></div>
        </div>
        <div
          className="spinner"
          onClick={() => {
            setAnim(0);
            setFile("");
          }}
          style={{
            background: `url(${
              anim === 100 ? "./Delete.svg" : "./spinner.svg"
            })`,
          }}></div>
      </div>

      <label htmlFor="feedback_field">
        <span>Все ли вам понравилось?</span>
      </label>
      <div className="feedback">
        <textarea
          onChange={handleChange}
          value={taValue}
          name="feedback"
          maxLength="200"
          id="feedback_field"
          placeholder="Напишите пару слов о вашем опыте..."
          required></textarea>
        <span id="counter">{taValue.length}/200</span>
      </div>
      <div className="submit">
        <button span="Отправть отзыв" type="submit">
          <span>Отправть отзыв</span>
        </button>
        <span className="alert">
          Все отзывы проходят модерацию в течение 2 часов
        </span>
      </div>
    </form>
  );
};

export default Form;
