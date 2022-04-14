import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { gravatarImage, name, score } = this.props;
    return (
      <header>
        <img
          className="logo"
          data-testid="header-profile-picture"
          alt="imagem de perfil"
          src={ gravatarImage }
        />
        <span
          id="POG"
          className="nome"
          data-testid="header-player-name"
        >
          { name }
        </span>
        <span
          className="score"
          data-testid="header-score"
        >
          { score }
        </span>
        <span>
          <Link
            to="/ranking"
          >
            <button
              type="button"
              data-testid="btn-ranking"
            >
              Ranking
            </button>
          </Link>
        </span>

      </header>
    );
  }
}

function mapStateToProps({ player: { gravatarImage, name, score } }) {
  return {
    gravatarImage,
    name,
    score,
  };
}

Header.propTypes = {
  gravatarImage: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
