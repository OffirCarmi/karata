import Logo from "../assets/icons/Logo";

const BigHeader = () => {
  return (
    <header className="big">
      <div className="logo">
        <div className="logo-box">
          <Logo />
        </div>
        <h1 className="logo">
          קרעת <br /> אותי...
        </h1>
      </div>
      <h2 className="slogan">משחק אונליין קורע בין חברים</h2>
    </header>
  );
};

export default BigHeader;
