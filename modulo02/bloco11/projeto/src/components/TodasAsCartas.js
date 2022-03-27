import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class TodasAsCartas extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeCarta,
    } = this.props;

    return (
      <div className="card">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo
          ? <h2 data-testid="trunfo-card">Super Trunfo</h2>
          : ''}
        <button
          type="button"
          name={ cardName }
          data-testid="delete-button"
          id={ cardTrunfo ? 'trunfo' : 'regular' }
          onClick={ removeCarta }
        >
          Apagar carta
        </button>
      </div>
    );
  }
}

TodasAsCartas.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeCarta: PropTypes.func.isRequired,
};

export default TodasAsCartas;
