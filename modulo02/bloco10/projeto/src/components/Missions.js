import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    const missoesLista = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ `${name}-${year}` }
      />));

    return (
      <div className="cardsMissoes" data-testid="missions">
        <Title headline="Missões" />
        { missoesLista }
      </div>
    );
  }
}

export default Missions;
