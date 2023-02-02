import MyFriendPreview from "./my-friend-preview";

const MyFriendList = ({ friends}) => {
  return (
    <section className="my-friend-list">
      {friends.map((friend) => (
        <MyFriendPreview key={friend._id} friend={friend} />
      ))}
    </section>
  );
};

export default MyFriendList;
