// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados ---");

// 1. Entrada de Dados
// Usamos Number() para permitir tanto números inteiros quanto decimais
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// 2. Processamento
// Calculamos o quadrado de cada um e somamos os resultados
// A fórmula segue a ordem: (n1²) + (n2²) + (n3²)
let somaQuadrados = (num1 * num1) + (num2 * num2) + (num3 * num3);

// 3. Saída de Dados
console.log(`A soma dos quadrados de ${num1}, ${num2} e ${num3} é: ${somaQuadrados}`); 