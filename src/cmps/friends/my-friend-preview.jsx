import IRemove from "../../assets/icons/i-remove";

const MyFriendPreview = ({ friend }) => {
  return (
    <article className="my-friend-preview">
      <IRemove />
      <h4>{friend.name}</h4>
    </article>
  );
};

export default MyFriendPreview;
