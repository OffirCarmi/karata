import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Menu from "./menu";

const MenuWrapper = () => {
  const [isOpen, setOpen] = useState(false);

  const btnStyle = () => {
    const purple = "#715cbc";
    const bg = "#1e0664";
    
    if (isOpen) return { backgroundColor: bg };
    else return { backgroundColor: purple };
  };

  return (
    <section className="menu-wrapper">
      <div className="menu-btn" style={btnStyle()}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={15} />
      </div>
      {isOpen && <Menu setOpen={setOpen} />}
    </section>
  );
};

export default MenuWrapper;
