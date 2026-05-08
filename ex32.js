// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números ---");

// 1. Entrada de Dados
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));

// 2. Processamento (Lógica de Troca - Swap)
let temp;

// Comparamos o 1º com o 2º
if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

// Comparamos o 1º com o 3º
if (num1 > num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
}

// Comparamos o 2º com o 3º
if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}

// 3. Saída de Dados
console.log(`Valores em ordem crescente: ${num1}, ${num2}, ${num3}`); 