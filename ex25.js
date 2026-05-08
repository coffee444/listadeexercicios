// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor ---");

// 1. Entrada de Dados
// Usamos parseInt pois o exercício especifica um número INTEIRO
let numero = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento
// Sucessor: número + 1
// Antecessor: número - 1
let sucessor = numero + 1;
let antecessor = numero - 1;

// 3. Saída de Dados
console.log(`Sucessor: ${sucessor}`);
console.log(`Antecessor: ${antecessor}`); 