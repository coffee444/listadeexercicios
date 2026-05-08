// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Filtro de Valor (Máximo 3) ---");

// 1. Entrada de Dados
let valor = parseInt(prompt("Digite um valor inteiro: "));

// 2. Processamento e 3. Saída de Dados
// Verificamos se o valor NÃO é maior que 3 (ou seja, <= 3)
if (valor <= 3) {
    console.log(`Resultado: ${valor}`);
} 
// Note que não incluímos o 'else', pois o exercício pede para não exibir nada caso seja maior que 3. 