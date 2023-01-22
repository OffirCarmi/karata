import { useState, useEffect } from "react";
import DynamicBtn from "../cmps/dynamic-btn";

import FriendsList from "../cmps/friends/friends-list";
import SmallHeader from "../cmps/small-header";

const Welcome = () => {
  const player = {
    name: "גילי",
    friends: [
      { name: "משה", _id: "moshe" },
      { name: "דודו", _id: "dudu" },
      { name: "הילה", _id: "hila" },
      { name: "גלית", _id: "galit" },
      { name: "ירון", _id: "yaron" },
      { name: "sivan99", _id: "sivan99" },
      { name: "סיווני", _id: "sivani" },
      { name: "עומר87", _id: "omer87" },
      { name: "אבי", _id: "avi" },
      { name: "ניר", _id: "nir" },
    ],
  };

  const [invitedFriends, setInvitedFriends] = useState([]);

  // useEffect(() => {
  //   console.log("invitedFriends:", invitedFriends);
  // }, [invitedFriends]);

  const onToggleFriend = (friendId) => {
    if (invitedFriends.includes(friendId)) {
      // console.log("removing from the list");
      setInvitedFriends((currState) =>
        currState.filter((friend) => friend !== friendId)
      );
    } else if (invitedFriends.length < 3) {
      // console.log("adding to the list");
      setInvitedFriends((currState) => [...currState, friendId]);
    } else {
      // console.log("cant add more");
      return;
    }
  };

  const inviteFriendsToGame = () => {
    console.log(invitedFriends);
  };

  return (
    <main className="welcome">
      <SmallHeader />
      <p>
        <span>{player.name}</span>, איזה כיף שאת.ה כאן !
      </p>
      <div className="call-to-action">
        <h3 className="slogan">
          כי אם כבר כולם שקועים במסך, <br /> לפחות שיהיה קורע...
        </h3>
      </div>
      <pre>בוחרים 3 חברים ומזמינים אותם למשחק חדש</pre>
      <div className="friends-area frame">
        {!player.friends.length && <p>רשימת החברים שלך ריקה</p>}
        {player.friends.length > 0 && (
          <FriendsList
            friends={player.friends}
            invitedFriends={invitedFriends}
            onToggleFriend={onToggleFriend}
          />
        )}
        <DynamicBtn
          friendsNum={invitedFriends.length}
          inviteFriendsToGame={inviteFriendsToGame}
        />
      </div>
    </main>
  );
};

export default Welcome;
