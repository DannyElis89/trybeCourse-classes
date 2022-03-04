import React from 'react';

class Task extends React.Component {
  render() {
    const listaCompromissos = [
      'Revisar dia 10.1',
      'Refazer exercicios dia 10.1',
      'Revisar dia 10.2',
      'Refazer exercicios dia 10.2',
      'Revisar dia 11.1',
      'Refazer exercicios dia 11.1',
      'Revisar dia 11.2',
      'Refazer exercicios dia 11.2',
      'Estudar dia 12.1',
      'Fazer exercícios dia 12.1',
      'Estudar exercicios dia 11.2',
      'Fazer exercícios dia 11.2'
    ];

    const task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    return(
      <ul>
        {listaCompromissos.map(compromisso => task(compromisso))}
      </ul>
    )
  }
}

export default Task;
