window.addEventListener('load', start);
// variável global
var valorBTC = null;
var valorCompraReal = null;
var valorVendaLiquida = null;
var taxaBtc = null;
var lucro = null;
var taxaRetirada = null;

function start() {
  valorBTC = document.querySelector('#valorBTC');
  // previni enviar o form
  preventFormSubimt();
  // focus
  activateInput();
  // mostra na tela os resultados do cálculo
}
function preventFormSubimt() {
  // impede de enviar o form
  function handleFormSubimt(event) {
    event.preventDefault();
  }
  var form = document.querySelector('#formulario');
  form.addEventListener('submit', handleFormSubimt);
}
function activateInput() {
  valorBTC.focus();
}
function getInputValue() {
  // pega os valores para o cálculo
  valorBTC = document.getElementById('valorBTC').value;
  valorCompraReal = document.getElementById('valorCompraReal').value;
  valorVendaLiquida = document.getElementById('valorVendaLiquida').value;
  taxaBtc = valorBTC * 0.0005;
  lucro = valorVendaLiquida - (valorCompraReal - taxaBtc);
  taxaRetirada = 2.9 + (lucro * 2) / 100;
  if (
    valorVendaLiquida !== null &&
    valorBTC !== null &&
    valorCompraReal !== null
  ) {
    return render();
  }
}
function render() {
  // mostra o cálculo na tela
  var divNames = document.querySelector('#resultado');
  var ul = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  li1.textContent = `Seu lucro foi  R$ ${lucro.toFixed(2)} `;
  li2.textContent = `Taxa de retirada para depósito em C.C R$ ${taxaRetirada.toFixed(
    2
  )}`;
  li3.textContent = `Valor de depósito em Conta Corrente R$ ${(
    lucro - taxaRetirada
  ).toFixed(2)}`;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  divNames.appendChild(ul);
}
