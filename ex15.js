// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Produto e Soma Específicos ---");

// 1. Entrada de Dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));

// 2. Processamento
// Produto do primeiro (num1) com o terceiro (num3)
let produto = num1 * num3;

// Soma do segundo (num2) com o quarto (num4)
let soma = num2 + num4;

// 3. Saída de Dados
console.log(`Produto (1º x 3º): ${produto}`);
console.log(`Soma (2º + 4º): ${soma}`); 