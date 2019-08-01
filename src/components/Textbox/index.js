import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class TextBox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { hideLabel: false };
  }

  textboxOnChnageHandler = event => {
    const value = event.target.value;

    if (value.length === 0) {
      this.setState({ hideLabel: false });
    } else {
      this.setState({ hideLabel: true });
    }
  };

  render() {
    const { name, label } = this.props;
    const { hideLabel } = this.state;
    return (
      <div className="textbox-wrapper">
        <div className={`label${hideLabel ? " label-visible" : ""}`}>
          {label}
        </div>
        <input
          ref={ref => {
            this.inputRef = ref;
          }}
          className="textbox"
          type="text"
          name={name}
          placeholder={label}
          autoComplete="off"
          onChange={this.textboxOnChnageHandler}
        />
      </div>
    );
  }
}

export default TextBox;
