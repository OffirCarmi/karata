import MyFriendList from "./my-friend-list";

const MyFriends = ({ friends }) => {
  console.log(friends);

  return (
    <section className="my-friends">
      <span>חברים ברשימה שלי</span>
      <div className="friends-box">
        {!friends.length && (
          <div className="no-friends">
            <p className="no-friends">רשימת החברים שלך ריקה</p>
          </div>
        )}
        {friends.length > 0 && <MyFriendList friends={friends} />}
      </div>
    </section>
  );
};

export default MyFriends;
