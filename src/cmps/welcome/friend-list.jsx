import FriendPreview from "./friend-preview";

const FriendList = ({ friends, invitedFriends, onToggleFriend }) => {
  return (
    <section className="friend-list">
      {friends.map((friend) => (
        <FriendPreview
          key={friend._id}
          friend={friend}
          invitedFriends={invitedFriends}
          onToggleFriend={onToggleFriend}
        />
      ))}
    </section>
  );
};

export default FriendList;
