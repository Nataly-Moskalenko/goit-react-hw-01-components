import FriendListItem from 'components/friend-item/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact(FriendListItem.propTypes)),
};
