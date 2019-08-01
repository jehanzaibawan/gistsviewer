import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Avatar = props => {
  const forks = props.forkList.slice(0, 3);

  return forks.map((fork, index) => {
    return (
      <img
        key={`avatar-${index + 1}`}
        className="avatar"
        src={fork.owner.avatar_url}
        alt={fork.login}
        onClick={() => window.open(`${fork.owner.html_url}`, "_blank")}
      />
    );
  });
};

Avatar.propTypes = {
  forkList: PropTypes.array.isRequired
};

export default Avatar;
