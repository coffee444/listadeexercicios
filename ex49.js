// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Potência Manual ---");

// Entrada de Dados
let base = parseInt(prompt("Digite o valor da base: "));
let expoente = parseInt(prompt("Digite o valor do expoente: "));

// 1. Inicialização
// Começamos com 1 para que a multiplicação funcione corretamente 
// mesmo se o expoente for zero.
let resultado = 1;

// 2. Laço de Iteração
// O laço executa 'expoente' vezes, multiplicando o acumulador pela base
for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base;
}

// 3. Saída de Dados
console.log(`\n${base} elevado a ${expoente} é igual a: ${resultado}`); 