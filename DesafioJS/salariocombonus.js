// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var name  = 'joao';
var salary = parseFloat(500.00);
var sales  = parseFloat(1230.30);

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var valorTotal =  sales*15.0/100  +    salary     ;

console.log("TOTAL = R$ " + valorTotal.toFixed(2));