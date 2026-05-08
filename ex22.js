// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Esfera ---");

// 1. Entrada de Dados
let raio = Number(prompt("Digite o valor do raio da esfera: "));

// 2. Processamento
// Fórmula: V = (4/3) * π * r³
// Math.PI fornece o valor de pi
// raio ** 3 eleva o raio ao cubo
let volume = (4 / 3) * Math.PI * (raio ** 3);

// 3. Saída de Dados
// .toFixed(2) para arredondar conforme os exemplos
console.log(`O volume da esfera com raio ${raio} é: ${volume.toFixed(2)}`); 