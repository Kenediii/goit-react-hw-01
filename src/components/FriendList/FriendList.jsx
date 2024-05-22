import FriendListItem from "../FriendListItem/FriendListItem";
import s from '../FriendListItem/FriendListItem.module.css'

const FriendList = ({ friends }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>  
  );
};

export default FriendList;