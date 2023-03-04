export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">{friends.map(friend => FriendListItem(friend))}</ul>
  );
}

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
