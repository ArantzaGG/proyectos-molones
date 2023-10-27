import logo from "../../images/solo-logo.png";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <p className="header__text">Proyectos Molones</p>
      </header>
    </div>
  );
};

export default Header;
