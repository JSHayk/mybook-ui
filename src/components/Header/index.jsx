import "./index.scss"
import basketIcon from "../../assets/icons/basket.svg";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-logo">
          <h1>MYBOOK</h1>
          <div className="icon">
            <img src={basketIcon} alt="basket" />
          </div>
        </div>
        <div className="row">
          <Nav />
          <button className="login">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
