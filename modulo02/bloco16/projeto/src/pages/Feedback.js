import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonPlayAgain from '../components/ButtonPlayAgain';

class Feedback extends React.Component {
  componentDidMount() {
    const { dispatch, player } = this.props;
    dispatch({ type: 'RANKING', payload: player });
  }

  componentWillUnmount() {
    const { dispatch, player: { players } } = this.props;
    dispatch({ type: 'ZERAR' });
    localStorage.setItem('ranking', JSON.stringify(players));
  }

  render() {
    const { assertions, score } = this.props;
    const magicNumber = 3;
    return (
      <div>

        <p
          data-testid="feedback-total-score"
        >
          { score }
        </p>
        <p
          data-testid="feedback-total-question"
        >
          { assertions }
        </p>
        {
          assertions < magicNumber
            ? <p data-testid="feedback-text">Could be better...</p>
            : <p data-testid="feedback-text">Well Done!</p>
        }
        <ButtonPlayAgain { ...this.props } />

      </div>
    );
  }
}

function mapStateToProps({ player }) {
  return {
    player,
    assertions: player.assertions,
    score: player.score,
  };
}

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
