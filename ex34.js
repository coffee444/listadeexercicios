// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Filtro de Números Divisíveis por 2 OU 3 ---");

// 1. Entrada de Dados
let n1 = parseInt(prompt("Digite o 1º número: "));
let n2 = parseInt(prompt("Digite o 2º número: "));
let n3 = parseInt(prompt("Digite o 3º número: "));
let n4 = parseInt(prompt("Digite o 4º número: "));

console.log("\nValores divisíveis por 2 ou 3:");

// 2. Processamento e 3. Saída de Dados
// O operador || representa o "OU" (OR) lógico no JavaScript

if (n1 % 2 === 0 || n1 % 3 === 0) console.log(n1);
if (n2 % 2 === 0 || n2 % 3 === 0) console.log(n2);
if (n3 % 2 === 0 || n3 % 3 === 0) console.log(n3);
if (n4 % 2 === 0 || n4 % 3 === 0) console.log(n4); 