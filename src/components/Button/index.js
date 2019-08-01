import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = props => {
  return (
    <div className="button-wrapper">
      <input
        className="button"
        type="button"
        value={props.caption}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </div>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  caption: "Button",
  onClick: () => {},
  disabled: false
};

export default Button;
