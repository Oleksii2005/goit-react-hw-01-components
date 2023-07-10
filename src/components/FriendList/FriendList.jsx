import css from './FriendList.module.css';
// import classNames from 'classnames';
export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

// Компонент FriendListItem
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.item}>
      <div
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
