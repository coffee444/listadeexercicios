// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Caixa Retangular ---");

// 1. Entrada de Dados
let comprimento = Number(prompt("Digite o valor do comprimento: "));
let largura = Number(prompt("Digite o valor da largura: "));
let altura = Number(prompt("Digite o valor da altura: "));

// 2. Processamento
// Fórmula: volume = comprimento * largura * altura
let volume = comprimento * largura * altura;

// 3. Saída de Dados
console.log(`O volume da caixa retangular é: ${volume}`);
