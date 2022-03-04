import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    const cadaConteudo = (materia) => {
      return(
        <div
          key={materia.conteudo}
        >
          <p>O conteúdo é: {materia.conteudo}</p>
          <p>Status: {materia.status}</p>
          <p>Bloco: {materia.bloco}</p>
        </div>
      )
    }

    return(
      <div>{conteudos.map(conteudo => cadaConteudo(conteudo))}</div>
    )
  }
}

export default Content;
