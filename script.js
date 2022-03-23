const button = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');

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
