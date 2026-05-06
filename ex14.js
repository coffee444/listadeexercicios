// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado da Soma ---");

// 1. Entrada de Dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// 2. Processamento
// Primeiro passo: somar os três valores
let soma = num1 + num2 + num3;

// Segundo passo: elevar o resultado da soma ao quadrado
let quadradoDaSoma = soma * soma;

// 3. Saída de Dados
console.log(`O quadrado da soma de (${num1} + ${num2} + ${num3}) é: ${quadradoDaSoma}`); 