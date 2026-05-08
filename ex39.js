// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Filtro: Múltiplos de 3 E 5 ---");

// 1. Entrada de Dados
let numero = parseInt(prompt("Digite um número inteiro: "));

// 2. Processamento e 3. Saída de Dados
// O operador && garante que o código só execute se AMBAS as condições forem verdadeiras
if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`Resultado: ${numero}`);
}
// Se não atender aos dois critérios, o programa encerra sem exibir nada, conforme solicitado. 