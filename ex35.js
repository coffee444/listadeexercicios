// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Localizador de Maior e Menor Valor ---");

// 1. Entrada de Dados
let n1 = parseInt(prompt("Digite o 1º número: "));
let n2 = parseInt(prompt("Digite o 2º número: "));
let n3 = parseInt(prompt("Digite o 3º número: "));
let n4 = parseInt(prompt("Digite o 4º número: "));
let n5 = parseInt(prompt("Digite o 5º número: "));

// 2. Processamento
// Inicializamos o maior e o menor com o primeiro valor lido
let maior = n1;
let menor = n1;

// Testando o 2º número
if (n2 > maior) maior = n2;
if (n2 < menor) menor = n2;

// Testando o 3º número
if (n3 > maior) maior = n3;
if (n3 < menor) menor = n3;

// Testando o 4º número
if (n4 > maior) maior = n4;
if (n4 < menor) menor = n4;

// Testando o 5º número
if (n5 > maior) maior = n5;
if (n5 < menor) menor = n5;

// 3. Saída de Dados
console.log(`\nMaior valor: ${maior}`);
console.log(`Menor valor: ${menor}`); 