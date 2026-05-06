// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de um Número ---");

// 1. Entrada de Dados
// Usamos parseInt para garantir que o número seja tratado como inteiro
let num = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento
// Calculando o quadrado (multiplicando o número por ele mesmo)
let quadrado = num * num;

// Alternativa moderna: let quadrado = num ** 2;

// 3. Saída de Dados
console.log(`O resultado de ${num} elevado ao quadrado é: ${quadrado}`);
