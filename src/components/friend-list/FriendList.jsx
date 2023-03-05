import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
}

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.item} key={id}>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" height="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
