// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Operações Combinadas (4 Números) ---");

// 1. Entrada de Dados
// Usamos parseInt pois o exercício especifica números INTEIROS
let A = parseInt(prompt("Digite o primeiro número (A): "));
let B = parseInt(prompt("Digite o segundo número (B): "));
let C = parseInt(prompt("Digite o terceiro número (C): "));
let D = parseInt(prompt("Digite o quarto número (D): "));

// 2. Processamento e 3. Saída de Dados
console.log("\n--- RESULTADOS DAS ADIÇÕES ---");
console.log(`${A} + ${B} = ${A + B}`);
console.log(`${A} + ${C} = ${A + C}`);
console.log(`${A} + ${D} = ${A + D}`);
console.log(`${B} + ${C} = ${B + C}`);
console.log(`${B} + ${D} = ${B + D}`);
console.log(`${C} + ${D} = ${C + D}`);

console.log("\n--- RESULTADOS DAS MULTIPLICAÇÕES ---");
console.log(`${A} x ${B} = ${A * B}`);
console.log(`${A} x ${C} = ${A * C}`);
console.log(`${A} x ${D} = ${A * D}`);
console.log(`${B} x ${C} = ${B * C}`);
console.log(`${B} x ${D} = ${B * D}`);
console.log(`${C} x ${D} = ${C * D}`);
