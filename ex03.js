// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo ---");

// 1. Entrada de Dados
let raio = Number(prompt("Digite o raio da base da lata (cm): "));
let altura = Number(prompt("Digite a altura da lata (cm): "));

// 2. Processamento
// Fórmula: V = π * raio² * altura
// Math.PI fornece o valor de 3.14159...
// Math.pow(raio, 2) ou (raio ** 2) calcula o raio ao quadrado
let volume = Math.PI * Math.pow(raio, 2) * altura;

// 3. Saída de Dados
console.log(`O volume da lata de óleo é: ${volume} cm³`);