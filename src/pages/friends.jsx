import SmallHeader from "../cmps/small-header";
import SearchFriends from "../cmps/friends/search-friends";
import { authService } from "../services/auth.service";
import MyFriends from "../cmps/friends/my-friends";
import { useState } from "react";
import { useEffect } from "react";
import { playerService } from "../services/player.service";

const Friends = () => {
  const [player, setPlayer] = useState(authService.getLoggedinUser());

  // useEffect(() => {
  //    setPlayer(authService.getLoggedinUser());
  // }, []);

  const onAddFriend = async (friendId) => {
    const updatedPlayer = await playerService.addFriend(friendId);
    console.log(updatedPlayer);
  };

  const onRemoveFriend = (friendId) => {};

  return (
    <main className="friends">
      <SmallHeader />
      <h2>החברים שלי</h2>
      <SearchFriends onAddFriend={onAddFriend} />
      <MyFriends friends={player.friends} />
    </main>
  );
};

export default Friends;
