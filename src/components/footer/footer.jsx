import "./footer.scss";
import "../container/container";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</span>
        <div className="social">
          <a href="https://vk.com">
            <div className="vk" />
          </a>
          <a href="https://reddit.com">
            <div className="reddit" />
          </a>
          <a href="https://web.telegram.org/z/">
            <div className="telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
