// 1. Função que verifica se um número é par ou ímpar
function verificaParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par`;
  } else {
    return `${numero} é ímpar`;
  }
}

// 2. Função que calcula o fatorial de um número usando loop
function fatorial(n) {
  if (n < 0) return "Fatorial não definido para números negativos";

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 3. Função que encontra o maior número em um array
function maiorNumero(array) {
  if (array.length === 0) return "Array vazio";

  let maior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}