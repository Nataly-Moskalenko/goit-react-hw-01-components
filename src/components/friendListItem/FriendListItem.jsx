import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <span
        className={isOnline ? css.statusIsOnline : css.statusIsNotOnline}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
        height="48"
      />
      <p className={css.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
