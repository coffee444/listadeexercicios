/ Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Velocidade do Projétil ---");

// 1. Entrada de Dados
let distanciaKm = Number(prompt("Digite a distância percorrida (km): "));
let tempoHoras = Number(prompt("Digite o tempo gasto (horas): "));

// 2. Processamento
// Primeiro calculamos em km/h e depois dividimos por 3.6 para chegar em m/s
// Fórmula: velocidade = (distancia / tempo) / 3.6
let velocidadeMS = (distanciaKm / tempoHoras) / 3.6;

// 3. Saída de Dados
// Usamos .toFixed(2) para arredondar como nos exemplos (ex: 27.78)
console.log(`Velocidade = ${velocidadeMS.toFixed(2)} m/s`); 