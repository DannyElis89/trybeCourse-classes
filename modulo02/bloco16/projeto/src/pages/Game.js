import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getQuestions from '../services/getQuestions';
import { sendInformation } from '../actions/sendQuestions';
import Feedback from './Feedback';
import NextButton from '../components/NextButton';

class Game extends Component {
  constructor() {
    super();

    this.handleAPI = this.handleAPI.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);

    this.state = {
      feedbackTest: true,
      count: 0,
      questions: [],
      category: '',
      text: '',
      correct: '',
      disabled: false,
      nextButton: false,
      pause: false,
      timer: null,
      counter: 30,
    };
  }

  async componentDidMount() {
    await getQuestions();
    this.handleAPI();
    this.funcTimer();
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  funcTimer = () => {
    const milSec = 1000;
    const timer = setInterval(this.tick, milSec);
    this.setState({ timer });
  }

  tick = () => {
    const { counter, pause } = this.state;
    if (!pause) {
      if (counter > 0) {
        this.setState({
          counter: counter - 1,
        });
      } else {
        this.showAnswer();
      }
    }
  }

  pause = () => {
    const { pause } = this.state;
    if (pause) {
      this.setState({ pause: false });
    } else {
      this.setState({ pause: true });
    }
  }

  refresh = () => {
    this.setState({ counter: 30 });
  }

  handleStateButton = () => {
    const { disabled } = this.state;
    if (!disabled) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  shuffleArray(array = []) {
    const randomNumbers = [];
    while (array.length !== randomNumbers.length) {
      const random = Math.floor(Math.random() * array.length);
      if (!randomNumbers.includes(random)) {
        randomNumbers.push(random);
      }
    }
    return randomNumbers.map((e) => array[e]);
  }

  handleAPI() {
    const { questions: { results } } = this.props;

    const { count } = this.state;
    const arrayQuestions = [];
    results.map((e) => arrayQuestions.push([...e.incorrect_answers, e.correct_answer]));
    arrayQuestions[count] = this.shuffleArray(arrayQuestions[count]);
    this.setState(() => ({
      difficulty: results[count].difficulty,
      category: results[count].category,
      text: results[count].question,
      correct: results[count].correct_answer,
      questions: arrayQuestions[count],
    }));
  }

  async nextQuestion() {
    const quatro = 4;
    this.setState({ nextButton: false });
    this.handleStateButton();
    await this.setState(({ count, questions }) => ({
      count: (count !== questions.length ? count + 1 : count),
      feedbackTest: count < quatro,
    }));
    this.handleAPI();
    this.refresh();
    this.pause();
  }

  showAnswer(boll) {
    const { counter, difficulty } = this.state;
    const { sendScore } = this.props;
    if (boll) {
      const points = 10;
      const um = 1;
      const dois = 2;
      const tres = 3;
      let score = 0;

      switch (difficulty) {
      case 'hard':
        score = points + (counter * um);
        break;
      case 'medium':
        score = points + (counter * dois);
        break;

      case 'easy':
        score = points + (counter * tres);
        break;

      default:
        break;
      }
      sendScore(score, 1);
    }
    const correctAnswer = 'correct-answer';
    const wrongAnswer = 'wrong-answer';
    const green = document.getElementsByClassName(correctAnswer);
    const red = document.getElementsByClassName(wrongAnswer);
    const borderGreen = '3px solid rgb(6, 240, 15)';
    const borderRed = '3px solid rgb(255, 0, 0)';

    green[0].style.border = borderGreen;

    if (red.length > 1) {
      red[0].style.border = borderRed;
      red[1].style.border = borderRed;
      red[2].style.border = borderRed;
    } else {
      red[0].style.border = borderRed;
    }
    this.handleStateButton();
    this.setState({ nextButton: true });
    this.pause();
  }

  renderQuestions() {
    const {
      questions,
      category,
      text,
      correct,
      disabled,
      nextButton,
      counter,
    } = this.state;
    const correctAnswer = 'correct-answer';
    console.log(correct);
    const wrongAnswer = 'wrong-answer';
    return (
      <div>

        <h3 data-testid="question-category">
          {`Category: ${category}`}
        </h3>

        <h2 data-testid="question-text">
          {`Question: ${text}`}
        </h2>

        <div data-testid="answer-options">
          { this.shuffleArray(questions.map((e, i) => (
            <button
              type="button"
              className={ e === correct ? correctAnswer : wrongAnswer }
              data-testid={ e === correct
                ? correctAnswer
                : `${wrongAnswer}-${i}` }
              onClick={ () => this.showAnswer(e === correct) }
              key={ e }
              disabled={ disabled }
            >
              { e }
            </button>))) }
        </div>
        <p>{ counter }</p>
        {
          nextButton
            ? <NextButton nextQuestion={ this.nextQuestion } />
            : ''
        }
      </div>
    );
  }

  render() {
    const { feedbackTest } = this.state;
    return (
      feedbackTest ? this.renderQuestions() : <Feedback { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    questions: state.questions.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendScore: (score, point) => dispatch(sendInformation(score, point)),
  };
}

Game.propTypes = {
  questions: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
