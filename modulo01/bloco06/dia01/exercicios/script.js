const listaEstados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goías', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraíma', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];

const selectEstado = document.getElementById('input-estado');

for (let i = 0; i < listaEstados.length; i += 1) {
  const newOption = document.createElement('option');
  const cadaEstado = listaEstados[i];
  newOption.setAttribute('value', cadaEstado);
  newOption.innerText = cadaEstado;
  selectEstado.appendChild(newOption);
}

const botaoEviar = document.getElementById('submeter');
botaoEviar.addEventListener('click', () => {

})
