import { useState, useEffect } from "react";
import DynamicBtn from "../cmps/dynamic-btn";

import FriendList from "../cmps/welcome/friend-list";
import SmallHeader from "../cmps/small-header";
import { authService } from "../services/auth.service";

const Welcome = () => {
  const [player, setPlayer] = useState(authService.getLoggedinUser());

  // useEffect(() => {
  //   setPlayer(loadPlayer());
  // }, []);

  const loadPlayer = () => {
    return authService.getLoggedinUser();
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
      <p className="player-welcome">
        <span>{player.name}</span>, איזה כיף שאת.ה כאן !
      </p>
      <div className="call-to-action">
        <h3 className="slogan">
          כי אם כבר כולם שקועים במסך, <br /> לפחות שיהיה קורע...
        </h3>
      </div>
      <pre>בוחרים 3 חברים ומזמינים אותם למשחק חדש</pre>
      <div className="friends-area frame">
        {!player.friends.length && (
          <div className="no-friends">
            <p className="no-friends">רשימת החברים שלך ריקה</p>
          </div>
        )}
        {player.friends.length > 0 && (
          <FriendList
            friends={player.friends}
            invitedFriends={invitedFriends}
            onToggleFriend={onToggleFriend}
          />
        )}
        <DynamicBtn
          playersFriends={player.friends.length}
          invitedFriends={invitedFriends.length}
          inviteFriendsToGame={inviteFriendsToGame}
        />
      </div>
    </main>
  );
};

export default Welcome;
