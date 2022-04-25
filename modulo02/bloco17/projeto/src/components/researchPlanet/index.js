import React, { useContext } from 'react';
import contextAll from '../../context/contextAll';

function ResearchPlanet() {
  const {
    filterByName,
    setFilterByName,
  } = useContext(contextAll);

  return (
    <label htmlFor="filter-name">
      Filtros:
      {' '}
      <input
        type="text"
        name="filterByName"
        id="filter-name"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
    </label>
  );
}

export default ResearchPlanet;
