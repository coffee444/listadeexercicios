// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Conversor de Fahrenheit para Celsius ---");

// 1. Entrada de Dados
// Solicitamos a temperatura e convertemos o texto lido para número
let fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit: "));

// 2. Processamento
// Aplicando a fórmula: C = (F - 32) * 5/9
// Os parênteses são essenciais para subtrair 32 antes de multiplicar/dividir
let celsius = (fahrenheit - 32) * 5 / 9;

// 3. Saída de Dados
// Exibindo o resultado com Template String
// .toFixed(1) é opcional, serve para mostrar apenas uma casa decimal
console.log(`${fahrenheit}°F equivalem a ${celsius.toFixed(1)}°C`);