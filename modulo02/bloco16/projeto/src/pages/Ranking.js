import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      mapPlayers: [],
    };
  }

  componentDidMount() {
    const magicNumber = -1;
    const POG = document.getElementById('POG');
    if (POG) {
      POG.remove();
    }
    const players = JSON.parse(localStorage.getItem('ranking'));
    this.setState(() => ({
      mapPlayers: players && players.sort((a, b) => {
        if (a.score > b.score) {
          return magicNumber;
        } return 1;
      }),
    }));
  }

  render() {
    const { mapPlayers } = this.state;
    return (
      <div>
        <h2
          data-testid="ranking-title"
        >
          Ranking
        </h2>
        <br />

        { mapPlayers.map((e, i) => (
          <div key={ i }>
            <img
              alt="Ranking_Image"
              src={ e.gravatarImage }
            />
            <br />

            <p
              data-testid={ `player-name-${i}` }
            >
              { e.name }
            </p>
            <br />

            <p
              data-testid={ `player-score-${i}` }
            >
              { e.score }
            </p>
            <br />

          </div>))}

        <Link
          to="/"
        >
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Play Again
          </button>
        </Link>
      </div>
    );
  }
}

export default connect()(Ranking);
