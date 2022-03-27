import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetCard" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
