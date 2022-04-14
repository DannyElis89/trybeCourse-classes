import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ButtonPlayAgain extends React.Component {
  state = { }

  render() {
    const { history } = this.props;
    console.log(this.props);
    return (
      <button
        type="button"
        data-testid="btn-play-again"
        onClick={ () => {
          history.push('/');
        } }
      >
        Play Again
      </button>
    );
  }
}

ButtonPlayAgain.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

export default connect()(ButtonPlayAgain);
