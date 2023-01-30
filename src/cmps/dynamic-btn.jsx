import { Link } from "react-router-dom";

const DynamicBtn = ({
  playersFriends,
  invitedFriends,
  inviteFriendsToGame,
}) => {
  if (!playersFriends) {
    return (
      <Link to="/friends">
        <button className="yellow-btn">לחץ.י כאן כדי להוסיף חברים</button>
      </Link>
    );
  }

  if (invitedFriends === 0) {
    return <button disabled>בחר.י חברים למשחק</button>;
  } else if (invitedFriends === 3) {
    return (
      //   <Link to="/game/:id?">
      <button onClick={inviteFriendsToGame} className="grid-btn pink-btn">
        יאללה, אפשר להתחיל
      </button>
      //   </Link>
    );
  } else return <button disabled>חסרים עוד {3 - invitedFriends} חברים</button>;
};

export default DynamicBtn;
