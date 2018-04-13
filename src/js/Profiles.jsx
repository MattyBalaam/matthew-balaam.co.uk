import React from 'react';
import PropTypes from 'prop-types';

const Profiles = props => props.content.map((profile, i) => Profile(profile,i));

const Profile = (profile, i) => (
  <p key={i} className="contact__profile">
    <a title={profile.network} href={profile.url} target="_blank">
      {profile.username}
    </a>
  </p>
)

Profiles.propTypes = {
  content: PropTypes.array.isRequired,
}

Profile.propTypes = {
  content: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default Profiles;
