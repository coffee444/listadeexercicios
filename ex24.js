/ Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Raiz de Qualquer Índice ---");

// 1. Entrada de Dados
let base = Number(prompt("Digite o valor da base (número dentro da raiz): "));
let indice = Number(prompt("Digite o valor do índice (ex: 2 para quadrada, 3 para cúbica): "));

// 2. Processamento
// Usamos a propriedade matemática: raiz = base elevado a (1 / índice)
let raiz = base ** (1 / indice);

// Alternativa usando Math.pow: 
// let raiz = Math.pow(base, 1 / indice);

// 3. Saída de Dados
console.log(`A raiz de índice ${indice} da base ${base} é: ${raiz.toFixed(2)}`); 