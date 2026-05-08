// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Sistema de Notas e Aprovação ---");

// 1. Entrada de Dados
let nota1 = Number(prompt("Digite a 1ª nota: "));
let nota2 = Number(prompt("Digite a 2ª nota: "));
let nota3 = Number(prompt("Digite a 3ª nota: "));
let nota4 = Number(prompt("Digite a 4ª nota: "));

// 2. Processamento
// Calculamos a média aritmética (soma das notas dividida pela quantidade)
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// 3. Saída de Dados e Verificação
// A nota de corte é 5.0
if (media >= 5) {
    console.log(`\nMédia: ${media.toFixed(2)} - Situação: APROVADO`);
} else {
    console.log(`\nMédia: ${media.toFixed(2)} - Situação: REPROVADO`);
} 