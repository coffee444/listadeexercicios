// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Conversor de Moeda: Dólar para Real ---");

// Definindo a cotação conforme os exemplos (5.60)
const cotacaoDolar = 5.60;

// 1. Entrada de Dados
let valorDolar = Number(prompt("Digite o valor em dólar (US$): "));

// 2. Processamento
// Fórmula: valor_em_real = valor_em_dolar * cotacao_do_dolar
let valorReal = valorDolar * cotacaoDolar;

// 3. Saída de Dados
// .toFixed(2) garante que o valor apareça como dinheiro (ex: 280.00)
console.log(`O valor de US$ ${valorDolar.toFixed(2)} em reais é: R$ ${valorReal.toFixed(2)}`); 
