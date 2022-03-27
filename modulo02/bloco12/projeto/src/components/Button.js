import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  state = { }

  render() {
    const {
      datatestid,
      name,
      disabled,
      onClick,
      text,
    } = this.props;

    return (
      <button
        data-testid={ datatestid }
        type="button"
        name={ name }
        disabled={ disabled }
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
