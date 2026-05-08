// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Soma Condicional (Mínimo 100) ---");

// 1. Entrada de Dados
let v1 = Number(prompt("Digite o 1º valor: "));
let v2 = Number(prompt("Digite o 2º valor: "));
let v3 = Number(prompt("Digite o 3º valor: "));

// 2. Processamento
// Somamos os três valores inseridos
let soma = v1 + v2 + v3;

// 3. Verificação e 4. Saída de Dados
// Utilizamos o operador '>' (maior que) conforme solicitado
if (soma > 100) {
    console.log(`Resultado da soma: ${soma}`);
}
// Se a soma for 100 ou menos, o programa encerra em silêncio. 