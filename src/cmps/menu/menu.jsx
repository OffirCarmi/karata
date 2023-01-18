import { NavLink } from "react-router-dom";

const Menu = ({ setOpen }) => {
  return (
    <>
      <div
        className="screen"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      ></div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">עמוד ראשי</NavLink>
          </li>
          <li>
            <NavLink to="/game">המשחקים שלי</NavLink>
          </li>
          <li>
            <NavLink to="/profile">הפרופיל שלי</NavLink>
          </li>
          <li>
            <NavLink to="/friends">החברים שלי</NavLink>
          </li>
          <li>
            <NavLink to="/rules">איך משחקים?</NavLink>
          </li>
          <li>
            <NavLink to="/about">על המשחק</NavLink>
          </li>
          <li>
            <NavLink to="/">התנתקות מהמערכת</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
