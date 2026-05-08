// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área da Circunferência ---");

// 1. Entrada de Dados
let raio = Number(prompt("Digite o valor do raio: "));

// 2. Processamento
// Fórmula: área = π * raio²
// Math.PI fornece o valor de 3.14159...
let area = Math.PI * (raio * raio);

// 3. Saída de Dados
// Usamos .toFixed(2) para arredondar como nos exemplos (ex: 78.54)
console.log(`A área da circunferência com raio ${raio} é: ${area.toFixed(2)}`);