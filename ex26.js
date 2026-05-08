// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Quadrado da Divisão de Dois Números ---");

// 1. Entrada de Dados
// Usamos parseInt() para garantir que os valores sejam tratados como inteiros
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro (divisor): "));

// 2. Processamento
// Passo 1: Realiza a divisão
let resultadoDivisao = num1 / num2;

// Passo 2: Eleva o resultado ao quadrado
let resultadoQuadrado = resultadoDivisao ** 2;

// 3. Saída de Dados
console.log(`Resultado: (${num1} / ${num2})² = ${resultadoQuadrado}`); 