const FriendPreview = ({ friend, invitedFriends, onToggleFriend }) => {
  return (
    <article
      className={`${invitedFriends.includes(friend._id) ? "selected" : ""} friend-preview`}
    >
      <h4 onClick={() => onToggleFriend(friend._id)}>{friend.name}</h4>
    </article>
  );
};

export default FriendPreview;
