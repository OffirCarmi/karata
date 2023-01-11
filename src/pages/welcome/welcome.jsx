import { Link } from "react-router-dom";

import BigHeader from "../../cmps/big-header";
import Footer from "../../cmps/footer/footer";
import Rules from "./cmps/rules";

const Welcome = () => {
  return (
    <main className="welcome">
      <BigHeader />
      <div className="btns-box">
        <Link to="/auth">
          <button className="btn-pink">כניסה למערכת</button>
        </Link>
        <Link to="/rules">
          <button className="btn-green">איך משחקים?</button>
        </Link>
        <Link to="/about">
          <button className="btn-blue">על המשחק</button>
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
