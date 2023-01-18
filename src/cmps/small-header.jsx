import Logo from "../assets/icons/Logo";
import Hr from "./hr";
import MenuWrapper from "./menu/menu-wrapper";

const SmallHeader = () => {
  return (
    <header className="small">
      <MenuWrapper />
      <div className="logo">
        <div className="logo-box">
          <Logo />
        </div>
        <h1 className="logo">קרעת אותי...</h1>
      </div>
      <Hr />
    </header>
  );
};

export default SmallHeader;
