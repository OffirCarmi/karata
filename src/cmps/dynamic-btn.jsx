import { Link } from "react-router-dom";

const DynamicBtn = ({ friendsNum, inviteFriendsToGame }) => {
  if (friendsNum === 0) {
    return (
      //   <Link to="/friends">
      <button disabled className="grid-btn">
        בחר.י חברים למשחק
      </button>
      //   </Link>
    );
  }

  if (friendsNum === 3) {
    return (
      //   <Link to="/game/:id?">
      <button onClick={inviteFriendsToGame} className="grid-btn pink-btn">
        יאללה, אפשר להתחיל
      </button>
      //   </Link>
    );
  } else
    return (
      //   <Link to="/friends">
      <button
        disabled
        className="grid-btn"
        // style={{ color: "#da447d" }}
      >
        חסרים עוד {3 - friendsNum} חברים
      </button>
      //   </Link>
    );
};

export default DynamicBtn;
