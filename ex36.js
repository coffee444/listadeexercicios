// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Verificador de Par ou Ímpar ---");

// 1. Entrada de Dados
let numero = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento e 3. Saída de Dados
// O operador % calcula o resto da divisão por 2
if (numero % 2 === 0) {
    console.log("Resultado: Par");
} else {
    console.log("Resultado: Ímpar");
} 