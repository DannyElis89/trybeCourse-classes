import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      timer: null,
      counter: 30,
    };
  }

  componentDidMount() {
    this.funcTimer();
  }

  componentWillUnmount() {
    const { timer } = this.state;
    this.clearInterval(timer);
  }

  funcTimer = () => {
    const milSec = 1000;
    const timer = setInterval(this.tick, milSec);
    this.setState({ timer });
  }

  tick = () => {
    const { pause } = this.props;
    if (!pause) {
      const { counter } = this.state;
      if (counter > 0) {
        this.setState({
          counter: counter - 1,
        });
      } else {
        const { handleStateButton, showAnswer } = this.props;
        handleStateButton();
        showAnswer();
      }
    }
  }

  refresh = () => {
    this.setState({ counter: 30 });
  }

  render() {
    const { counter } = this.state;
    return (

      <div>
        <p className="timerCount">{counter}</p>
        <button
          type="button"
          onClick={ () => this.pause() }
        >
          pause
        </button>
        <button
          type="button"
          onClick={ () => this.refresh() }
        >
          refresh
        </button>
      </div>
    );
  }
}

Timer.propTypes = {
  handleStateButton: PropTypes.func,
}.isRequired;

export default Timer;
