// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Apuração de Eleição Sindical ---");

// 1. Entrada de Dados
let cand1 = Number(prompt("Votos válidos para o Candidato 1: "));
let cand2 = Number(prompt("Votos válidos para o Candidato 2: "));
let cand3 = Number(prompt("Votos válidos para o Candidato 3: "));
let nulos = Number(prompt("Quantidade de votos nulos: "));
let brancos = Number(prompt("Quantidade de votos em branco: "));

// 2. Processamento
// Primeiro, calculamos o universo total de eleitores
let totalEleitores = cand1 + cand2 + cand3 + nulos + brancos;

// Agora calculamos os percentuais (parte / total * 100)
let perc1 = (cand1 / totalEleitores) * 100;
let perc2 = (cand2 / totalEleitores) * 100;
let perc3 = (cand3 / totalEleitores) * 100;
let percNulos = (nulos / totalEleitores) * 100;
let percBrancos = (brancos / totalEleitores) * 100;

// 3. Saída de Dados
console.log(`\nTotal de eleitores: ${totalEleitores}`);
console.log(`Percentual de votos válidos:`);
console.log(` - Candidato 1: ${perc1.toFixed(2)}%`);
console.log(` - Candidato 2: ${perc2.toFixed(2)}%`);
console.log(` - Candidato 3: ${perc3.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percNulos.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${percBrancos.toFixed(2)}%`); 