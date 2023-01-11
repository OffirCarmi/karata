import Logo from "../assets/icons/Logo";
import Hr from "./hr";
import MenuBtn from "./menu/menu-btn/menu-btn";

const SmallHeader = () => {
  return (
    <header className="small">
      <MenuBtn />
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
