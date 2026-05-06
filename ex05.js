// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Prestação em Atraso ---");

// 1. Entrada de Dados
let valorOriginal = Number(prompt("Digite o valor original da prestação: "));
let mesesAtraso = Number(prompt("Digite a quantidade de meses em atraso: "));
let taxaJuros = Number(prompt("Digite a taxa de juros mensal (%): "));

// 2. Processamento
// Fórmula: valor = valor_original * (1 + (taxa_juros / 100) * meses_atraso)
let valorFinal = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);

// 3. Saída de Dados
console.log(`O valor da prestação em atraso é de ${valorFinal} reais.`); 
