// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Verificador de Faixa de Valor (1 a 9) ---");

// 1. Entrada de Dados
let valor = parseInt(prompt("Digite um valor inteiro: "));

// 2. Processamento e 3. Saída de Dados
// Usamos o operador lógico && (E) para validar os dois limites ao mesmo tempo
if (valor >= 1 && valor <= 9) {
    console.log("O valor está na faixa permitida");
} else {
    console.log("O valor não está na faixa permitida");
} 