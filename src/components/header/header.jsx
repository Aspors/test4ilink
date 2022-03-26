import "./header.scss";
import "../container/container";
import "../generic/buttons/buttons.scss";
import logo from "../../static/img/icons/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="profile_wrapper">
          <div className="profile_photo" />
          <span className="name">Никита Негодяев</span>
        </div>
        <img src={logo} alt="logo.svg" className="logo" />
        <button>
          <span>Панель управления</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
