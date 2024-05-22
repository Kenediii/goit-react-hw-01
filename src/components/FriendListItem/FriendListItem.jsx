import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.list_style}>
      <img className={s.img}  src={avatar} alt={name} />
      <p className={s.text_first}>{name}</p>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? "online" : "offline"}
      </p>
    </li>
  );
};

export default FriendListItem;