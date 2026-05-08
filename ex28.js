// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Classificador de Números ---");

// 1. Entrada de Dados
let numero = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento e 3. Saída de Dados
// Verificamos as três possibilidades:
if (numero > 0) {
    // Caso o número seja maior que zero
    console.log("Resultado: Positivo");
} else if (numero < 0) {
    // Caso a primeira condição falhe, testamos se é menor que zero
    console.log("Resultado: Negativo");
} else {
    // Se não for maior nem menor que zero, obrigatoriamente é zero
    console.log("Resultado: Neutro (Zero)");
} 