import Logo from "../assets/icons/Logo";
import Hr from "./hr";
import MenuWrapper from "./menu/menu-wrapper";

const SmallHeader = () => {
  return (
    <header className="small">
      <MenuWrapper />
      <div className="logo-box">
        <div className="icon">
          <Logo />
        </div>
        <h1 className="name">קרעת אותי...</h1>
      </div>
      <Hr />
    </header>
  );
};

export default SmallHeader;
