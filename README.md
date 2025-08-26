# Funções em JavaScript

Esse projetinho tem 3 funções em **JavaScript**. A ideia é treinar
lógica de programação e ver como colocar isso em um README simples.

------------------------------------------------------------------------

## 1. Par ou Ímpar

``` javascript
function verificaParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par`;
  } else {
    return `${numero} é ímpar`;
  }
}
```

### Pra que serve?

Diz se um número é **par** ou **ímpar**.

### Exemplo:

``` javascript
console.log(verificaParOuImpar(10)); // "10 é par"
console.log(verificaParOuImpar(7));  // "7 é ímpar"
```

------------------------------------------------------------------------

## 2. Fatorial

``` javascript
function fatorial(n) {
  if (n < 0) return "Fatorial não definido para números negativos";

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
```

### Pra que serve?

Calcula o **fatorial** de um número.\
Exemplo: `5! = 5 x 4 x 3 x 2 x 1 = 120`.

### Exemplo:

``` javascript
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
```

------------------------------------------------------------------------

## 3. Maior número do array

``` javascript
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
```

### Pra que serve?

Olha um array e fala qual número é o maior.

### Exemplo:

``` javascript
console.log(maiorNumero([10, 25, 7, 30, 18])); // 30
```

------------------------------------------------------------------------

## Como rodar

1.  Copie o código pra um arquivo `.js` (ex: `funcoes.js`).\

2.  Abra o terminal e rode com Node.js:

    ``` bash
    node funcoes.js
    ```

3.  Veja os resultados no console.