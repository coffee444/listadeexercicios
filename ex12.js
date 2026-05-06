// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Conversor de Moeda: Real para Dólar ---");

// Definindo a cotação conforme os exemplos (5.60)
const cotacaoDolar = 5.60;

// 1. Entrada de Dados
let valorReal = Number(prompt("Digite o valor em real (R$): "));

// 2. Processamento
// Fórmula: valor_em_dolar = valor_em_real / cotacao_do_dolar
let valorDolar = valorReal / cotacaoDolar;

// 3. Saída de Dados
// Usamos .toFixed(2) para arredondar para duas casas decimais, como nos exemplos
console.log(`O valor de R$ ${valorReal.toFixed(2)} em dólares é: US$ ${valorDolar.toFixed(2)}`); 
