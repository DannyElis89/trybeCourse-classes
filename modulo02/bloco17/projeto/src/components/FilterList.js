import React, { useContext } from 'react';
import contextAll from '../context/contextAll';

function FilterList() {
  const { setFilterByNumber, filterByNumber } = useContext(contextAll);

  const handleButtonDelete = (i) => {
    setFilterByNumber((estadoAnterior) => {
      const novoEstado = [...estadoAnterior];
      novoEstado.splice(i, 1);

      return novoEstado;
    });
  };

  return (
    <section>
      {filterByNumber.map(({ column, comparison, value }, i) => (
        <div
          key={ column }
          data-testid="filter"
        >
          {`${column} ${comparison} ${value} `}
          <button
            onClick={ () => handleButtonDelete(i) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}

export default FilterList;
