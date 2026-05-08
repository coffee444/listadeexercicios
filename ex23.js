// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Conversor: Pés para Metros ---");

// 1. Entrada de Dados
// Usamos Number() para permitir medidas quebradas (ex: 5.5 pés)
let pes = Number(prompt("Digite a medida em pés (ft): "));

// 2. Processamento
// Fórmula: metros = pés * 0.3048
let metros = pes * 0.3048;

// 3. Saída de Dados
// Exibimos o resultado. Note que nos exemplos são usadas 3 casas decimais.
console.log(`${pes} pés equivalem a: ${metros.toFixed(3)} metros`); 