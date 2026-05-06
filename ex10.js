// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Números ---");

// 1. Entrada de Dados
// Usamos parseInt conforme solicitado para números inteiros
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

// 2. Processamento
// Cálculo da diferença: primeiro menos o segundo
let diferenca = num1 - num2;

// 3. Saída de Dados
console.log(`A diferença entre ${num1} e ${num2} é: ${diferenca}`); 
