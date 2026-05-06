// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Troca de Valores ---");

// 1. Entrada de Dados
let A = prompt("Digite o valor da variável A: ");
let B = prompt("Digite o valor da variável B: ");

// Exibindo os valores ANTES da troca
console.log(`Antes da troca: A = ${A}, B = ${B}`);

// 2. Processamento (Lógica da Variável Temporária)
// Imagine que A é um copo de suco e B um copo de água. 
// O 'temp' é o copo vazio.
let temp = A; // Passo 1: Guardamos o valor de A no temp
A = B;        // Passo 2: A agora recebe o valor de B (o valor original de A sumiria aqui se não estivesse no temp)
B = temp;     // Passo 3: B recebe o valor que estava guardado no temp (o antigo A)

// 3. Saída de Dados
console.log(`Após a troca: A = ${A}, B = ${B}`);
