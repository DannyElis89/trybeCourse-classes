/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import FilterList from './FilterList';
import contextAll from '../context/contextAll';

function FilterNumber() {
  const { setFilterByNumber, filterByNumber } = useContext(contextAll);

  const [filterObjectByNumber, setFilterObjectByNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [columnOptionsFilter, setColumnOptionsFilter] = useState({
    source: ['population', 'orbital_period', 'diameter', 'rotation_period',
      'surface_water'],
    current: ['population', 'orbital_period', 'diameter', 'rotation_period',
      'surface_water'],
  });

  useEffect(() => {
    const notFound = -1;

    const newColumnOptionsFilter = filterByNumber.reduce((acum, { column }) => {
      const i = acum.findIndex((option) => option === column);

      const newAcum = [...acum];
      newAcum.splice(i, 1);

      return (i !== notFound) ? newAcum : acum;
    }, columnOptionsFilter.source);

    setColumnOptionsFilter({
      ...columnOptionsFilter,
      current: newColumnOptionsFilter,
    });
  }, [filterByNumber]);

  useEffect(() => {
    setFilterObjectByNumber({
      ...filterObjectByNumber,
      column: columnOptionsFilter.current[0],
    });
  }, [columnOptionsFilter]);

  return (
    <>
      <section>
        <label htmlFor="column-filter">
          Coluna
          {' '}
          <select
            id="column-filter"
            data-testid="column-filter"
            value={ filterObjectByNumber.column }
            onChange={ (event) => setFilterObjectByNumber({
              ...filterObjectByNumber,
              column: event.target.value,
            }) }
          >
            { columnOptionsFilter.current.map((opValue) => (
              <option
                key={ opValue }
                value={ opValue }
              >
                {opValue}
              </option>
            ))}
          </select>
        </label>
        {' '}
        <label htmlFor="filter-comparison">
          Operador
          {' '}
          <select
            id="filter-comparison"
            data-testid="comparison-filter"
            value={ filterObjectByNumber.comparison }
            onChange={ ({ target }) => setFilterObjectByNumber({
              ...filterObjectByNumber,
              comparison: target.value,
            }) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        {' '}
        <label htmlFor="value-filter">
          Valor
          {' '}
          <input
            id="value-filter"
            data-testid="value-filter"
            type="number"
            value={ filterObjectByNumber.value }
            onChange={ ({ target }) => setFilterObjectByNumber({
              ...filterObjectByNumber,
              value: target.value,
            }) }
          />
        </label>
        {' '}
        <button
          data-testid="button-filter"
          type="button"
          onClick={
            () => setFilterByNumber((prevState) => (
              [...prevState, filterObjectByNumber]))
          }
        >
          Filtrar
        </button>
        {' '}
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setFilterByNumber([]) }
        >
          Remover todas filtragens
        </button>
      </section>
      <FilterList />
    </>
  );
}

export default FilterNumber;
