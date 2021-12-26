//Requisito obrigatório 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
//Requisito obrigatório 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

let botaoAdicionarTarefas = document.getElementById('criar-tarefa');
let caixaDeTexto = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionarTarefas.addEventListener('click', function () {
  adicionaTarefas(caixaDeTexto.value, 'tarefas');
});

// adiciona escutador de eventos, adiciona tarefa ao clicar no botão;

function adicionaTarefas(texto, classe) {
  if (texto === '') {
    window.alert('Por favor, digite nova tarefa para depois adicioná-la.');
    return;
  }

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = texto;
  novaTarefa.setAttribute('class', classe);

  listaTarefas.appendChild(novaTarefa);

  novaTarefa.addEventListener('click', mudaCorDeFundoItem);
  novaTarefa.addEventListener('dblclick', mudaTarefaCompleta);

  caixaDeTexto.value = '';
}


//evento e função para adicionar itens à lista com a tecla enter

caixaDeTexto.addEventListener('keyup', adicionaTarefas1);

function adicionaTarefas1(parametroTeclaEnter) {
  // let conteudoCaixaDeTexto = caixaDeTexto.value;

  if (parametroTeclaEnter.key === 'Enter') {
    adicionaTarefas(caixaDeTexto.value, 'tarefas');
  }
}

//Requisito obrigatório 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

//Requisito obrigatório 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function mudaCorDeFundoItem (itemClicado){
  let itemListaTarget = itemClicado.target;
  // if (itemListaTarget.classList.contains("selected")) {
  //   itemListaTarget.classList.remove("selected");
  //   return;
  // }

  let itensListaDeTarefas = document.getElementsByClassName('tarefas');

  for(let i = 0; i < itensListaDeTarefas.length; i += 1){
    let cadaItem = itensListaDeTarefas[i];
    if (cadaItem.classList.contains('selected')){
      cadaItem.classList.remove("selected");
    }

    itemListaTarget.classList.add('selected');
  }
}



//Requisito obrigatório 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function mudaTarefaCompleta (itemClicado){
  let itemListaTarget = itemClicado.target;

  if (!itemListaTarget.classList.contains('completed')){
    itemListaTarget.classList.add("completed");
  } else {
    itemListaTarget.classList.remove("completed");
  }
}

// Requisito obrigatório 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener('click', apagaListaDeTarefas);

function apagaListaDeTarefas (parametroBotaoApaga){
  // let botaoApagaTarget = parametroBotaoApaga.target;
  let ol = document.getElementById('lista-tarefas')
  // ol.removeChild(listaTarefas);
  ol.innerHTML = ''
}


// Requisito obrigatório 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

botaoRemoverFinalizados = document.getElementById('remover-finalizados');
botaoRemoverFinalizados.addEventListener('click', removeItensFinalizados);

function removeItensFinalizados(){
  console.log("Aqui")
  let itensFinalizados = document.getElementsByClassName('completed');
  // let listaTarefas = document.getElementsByClassName('tarefas');

  for(let i = (itensFinalizados.length - 1); i >= 0; i -= 1){
    let cadaItem = itensFinalizados[i];

    if(cadaItem.classList.contains('completed')){
      listaTarefas.removeChild(cadaItem);
    }
  }

}


// Requisito Bônus 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

let botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click', salvaLista)

function salvaLista (){
  let arrayObjetos = [];
  let itensLista = document.getElementsByClassName('tarefas');

  for (let i = 0; i < itensLista.length; i += 1){
    let cadaItem = itensLista[i]

    let novoObjeto = {
      conteudo: cadaItem.innerText,
      class: cadaItem.className
    };

    arrayObjetos.push(novoObjeto);
  }

  localStorage.setItem('conteudo', JSON.stringify(arrayObjetos));
}



function recarregaElementos (){
  if(localStorage.conteudo !== undefined){
    // buscando na memoria do localStorage o valor armazenado na função anterior
    let valorLido = localStorage.getItem('conteudo');
    let valorLidoConvertido = JSON.parse(valorLido);

    for(let i = 0; i < valorLidoConvertido.length; i += 1){
      let novaTarefa = document.createElement('li');
      let cadaObjeto = valorLidoConvertido[i];

      adicionaTarefas(cadaObjeto.conteudo, cadaObjeto.class)
    }
  }
}
recarregaElementos();

// Requisito Bônus 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

const botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', moverItemParaCima);

function moverItemParaCima() {
  let itemListaSelecionado = document.getElementsByClassName('selected')[0];
  if (!itemListaSelecionado) return;
  let itensLista = document.getElementsByClassName('tarefas');
  if(itemListaSelecionado === itensLista[0]){
    return
  }
  itemListaSelecionado.insertAdjacentElement("afterend", itemListaSelecionado.previousElementSibling)
}


const botaoMoverBaixo = document.getElementById('mover-baixo');
botaoMoverBaixo.addEventListener('click', moverItemParaBaixo);

function moverItemParaBaixo() {
  let itemListaSelecionado = document.getElementsByClassName('selected')[0];
  if (!itemListaSelecionado) return;
  let itensLista = document.getElementsByClassName('tarefas');
  if(itemListaSelecionado === itensLista[itensLista.length -1]){
    return
  }
  itemListaSelecionado.insertAdjacentElement("beforebegin", itemListaSelecionado.nextElementSibling);
}

// Requisito Bônus 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado

const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', removerItemSelecionado);

function removerItemSelecionado() {
  let itemListaSelecionado = document.getElementsByClassName('selected')[0];
  listaTarefas.removeChild(itemListaSelecionado);

}
