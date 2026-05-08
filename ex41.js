// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Multiplicação com Filtro de Limite ---");

// 1. Entrada de Dados
let numero = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento
let resultado = numero * 2;

// 3. Verificação e 4. Saída de Dados
// A condição só é verdadeira se o resultado ultrapassar 30
if (resultado > 30) {
    console.log(`Resultado da multiplicação: ${resultado}`);
} 