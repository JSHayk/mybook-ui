import "./index.scss"
import basketIcon from "../../assets/icons/basket.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>MYBOOK</h1>
        <div className="icon">
          <img src={basketIcon} alt="basket" />
        </div>
      </div>
    </header>
  );
};

export default Header;
