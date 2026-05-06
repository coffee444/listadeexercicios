// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Combustível Gasto ---");

// 1. Entrada de Dados
let distancia = Number(prompt("Digite a distância percorrida (km): "));
let consumo = Number(prompt("Digite o consumo do veículo (km/l): "));

// 2. Processamento
// Fórmula: litros = distância / consumo
let litrosGasto = distancia / consumo;

// 3. Saída de Dados
console.log(`A quantidade de combustível gasta na viagem é de ${litrosGasto} litros.`);
