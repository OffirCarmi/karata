import FriendPreview from "./friend-preview";

const FriendsList = ({ friends, invitedFriends, onToggleFriend }) => {
  return friends.map((friend) => (
    <FriendPreview
      key={friend._id}
      friend={friend}
      invitedFriends={invitedFriends}
      onToggleFriend={onToggleFriend}
    />
  ));
};

export default FriendsList;
