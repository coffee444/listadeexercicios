// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Diferença entre o Maior e o Menor ---");

// 1. Entrada de Dados
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

// 2. Processamento
let diferenca;

// Estrutura Condicional para identificar o maior
if (num1 > num2) {
    // Se o primeiro for maior, subtraímos o segundo dele
    diferenca = num1 - num2;
} else {
    // Caso contrário (num2 maior ou igual), subtraímos o primeiro do segundo
    diferenca = num2 - num1;
}

// 3. Saída de Dados
console.log(`A diferença entre o maior e o menor é: ${diferenca}`); 