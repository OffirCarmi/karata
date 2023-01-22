import { Link } from "react-router-dom";
import BigHeader from "../cmps/big-header";

const Root = () => {
  return (
    <main className="root">
      <BigHeader />
      <div className="btns-box frame">
        <Link to="/auth">
          <button className="pink-btn">כניסה למערכת</button>
        </Link>
        <Link to="/rules">
          <button className="green-btn">איך משחקים?</button>
        </Link>
        <Link to="/about">
          <button className="blue-btn">על המשחק</button>
        </Link>
      </div>
    </main>
  );
};

export default Root;
