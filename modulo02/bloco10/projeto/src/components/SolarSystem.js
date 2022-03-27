import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // const { name, image } = this.props;
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map(({ name, image, id }) => (
          <PlanetCard
            planetName={ name }
            planetImage={ image }
            key={ id }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
