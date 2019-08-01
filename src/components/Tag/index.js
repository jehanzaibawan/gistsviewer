import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Tag = props => {
  const files = props.fileList;
  const tags = [];

  for (var file in files) {
    if (files.hasOwnProperty(file)) {
      tags.push(
        <div className="tag" key={file}>
          {files[file].type}
        </div>
      );
    }
  }

  return tags;
};

Tag.propTypes = {
  fileList: PropTypes.object.isRequired
};

export default Tag;
