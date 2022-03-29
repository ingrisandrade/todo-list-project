const button = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');

// Ao clicar no botão um novo item é criado ao final da lista e o texto do input é removido.
function criaElemento() {
  const criaLi = document.createElement('li');
  const textoInput = document.querySelector('#texto-tarefa');
  criaLi.innerText = textoInput.value;
  if (criaLi.innerText === '') {
    alert('Adicione um texto!');
  } else {
    orderList.appendChild(criaLi);
  }
  textoInput.value = '';
}
criaElemento();
button.addEventListener('click', criaElemento);

// Ao clicar em um item da lista, altera a cor de fundo do item para cinza.
const selecionaLi = document.querySelector('#lista-tarefas');

function adicionaGray(event) {
  const itemList = document.querySelectorAll('li');
  const evento = event.target;
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].style.backgroundColor = 'white';
  }
  evento.style.backgroundColor = 'gray';
}
selecionaLi.addEventListener('click', adicionaGray);

// Risca o item da lista com duplo clique.
function riscaLi(event) {
  const evento = event.target;
  evento.classList.toggle('completed');
}
selecionaLi.addEventListener('dblclick', riscaLi);
