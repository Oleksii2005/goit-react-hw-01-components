import user from 'user.json';
import css from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = () => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt={user.username} className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsElement}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className={css.statsElement}>
          <span className={css.label}>Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className={css.statsElement}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
