import React, { useContext } from 'react';
// import fetchListPlanet from '../api/fetchApi';
import contextAll from '../context/contextAll';

function Table() {
  const arrHeadTabl = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];

  const { filteredPlanets } = useContext(contextAll);

  return (
    <table>
      <thead className="table-header">
        <tr>
          {arrHeadTabl.map((tableHeader) => (
            <th
              key={ tableHeader }

            >
              {tableHeader}

            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td className="table-items">{planet.name}</td>
            <td className="table-items">{planet.rotation_period}</td>
            <td className="table-items">{planet.orbital_period}</td>
            <td className="table-items">{planet.diameter}</td>
            <td className="table-items">{planet.climate}</td>
            <td className="table-items">{planet.gravity}</td>
            <td className="table-items">{planet.terrain}</td>
            <td className="table-items">{planet.surface_water}</td>
            <td className="table-items">{planet.population}</td>
            <td className="table-items">{planet.films}</td>
            <td className="table-items">{planet.created}</td>
            <td className="table-items">{planet.edited}</td>
            <td className="table-items">{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
