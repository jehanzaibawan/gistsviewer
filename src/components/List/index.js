import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import Avatar from "../Avatar";
import "./style.scss";

const List = props => {
  return (
    <div className="list">
      {props.data.map((gist, index) => (
        <div className="list-item" key={`list-item-${index + 1}`}>
          <div className="description">
            {gist.description ? gist.description : gist.id}
          </div>
          <div className="file-tags-wrapper">
            <Tag fileList={gist.files} />
          </div>
          {gist.forks.length > 0 && (
            <div className="fork-avatar-wrapper">
              <Avatar forkList={gist.forks} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
