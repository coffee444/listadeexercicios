// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Gerador de Tabuada ---");

// 1. Entrada de Dados
let numero = parseInt(prompt("De qual número você deseja ver a tabuada? "));

// 2. Inicialização
let multiplicador = 1;

// 3. Laço de Repetição (Enquanto o multiplicador for <= 10)
console.log(`\nTabuada do ${numero}:`);

while (multiplicador <= 10) {
    // Cálculo do produto
    let produto = numero * multiplicador;
    
    // Saída de Dados formatada
    console.log(`${numero} x ${multiplicador} = ${produto}`);
    
    // Incremento (Fundamental para não criar um loop infinito!)
    multiplicador++;
}

console.log("\n--- Tabuada Finalizada ---"); 