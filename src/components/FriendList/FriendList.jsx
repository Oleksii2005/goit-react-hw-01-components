export const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
