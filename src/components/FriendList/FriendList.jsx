import css from './FriendList.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <span className={css.main_title}>Third task</span>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
