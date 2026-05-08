// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- As Quatro Operações Básicas ---");

// 1. Entrada de Dados
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

// 2. Processamento
// Realizando os quatro cálculos fundamentais
let adicao = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

// 3. Saída de Dados
console.log(`\nResultados:`);
console.log(`Adição: ${valor1} + ${valor2} = ${adicao}`);
console.log(`Subtração: ${valor1} - ${valor2} = ${subtracao}`);
console.log(`Multiplicação: ${valor1} * ${valor2} = ${multiplicacao}`);
console.log(`Divisão: ${valor1} / ${valor2} = ${divisao}`); 