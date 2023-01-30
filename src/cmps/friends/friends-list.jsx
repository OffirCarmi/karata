import FriendPreview from "./friend-preview";

const FriendsList = ({ friends, invitedFriends, onToggleFriend }) => {
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

export default FriendsList;
