import React from 'react';

const Profiles = props => props.content.map((profile, i) => 
  <p key={i} className="contact__profile">
    <a title={profile.network}
      href={profile.url} target="_blank"
      >{profile.username}</a>
  </p>
);

export default Profiles;
