const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira por Subtração Sucessiva ---");

// 1. Entrada de Dados
let dividendoInput = parseInt(prompt("Digite o dividendo (número a ser dividido): "));
let divisorInput = parseInt(prompt("Digite o divisor (número que divide): "));

// 2. Cálculo da Divisão Inteira
let resultado = 0;
let dividendo = dividendoInput;
let divisor = divisorInput;

// Proteção contra divisão por zero
if (divisor === 0) {
    console.log("Erro: Divisão por zero não é permitida.");
} else {
    // Enquanto houver "espaço" para subtrair o divisor
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        resultado = resultado + 1;
    }

    // 3. Saída de Dados
    console.log(`\nO resultado inteiro de ${dividendoInput} ÷ ${divisorInput} é: ${resultado}`);
    console.log(`O resto da divisão é: ${dividendo}`);
} 