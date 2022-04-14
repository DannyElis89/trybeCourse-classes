import React from 'react';
import PropTypes from 'prop-types';

class NextButton extends React.Component {
  render() {
    // console.log(this.props);
    const { nextQuestion } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => nextQuestion() }
      >
        Próximo
      </button>
    );
  }
}

NextButton.propTypes = {
  nextQuestion: PropTypes.func,
}.isRequired;

export default NextButton;
