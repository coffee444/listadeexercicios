// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Potência ---");

// 1. Entrada de Dados
// Usamos parseInt() pois o exercício pede números inteiros
let base = parseInt(prompt("Digite o valor da base: "));
let expoente = parseInt(prompt("Digite o valor do expoente: "));

// 2. Processamento
// No JavaScript, o operador ** representa a potência (base ** expoente)
// Alternativa clássica: let resultado = Math.pow(base, expoente);
let resultado = base ** expoente;

// 3. Saída de Dados
console.log(`${base} elevado a ${expoente} é igual a: ${resultado}`); 