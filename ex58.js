const prompt = require('prompt-sync')();

console.log("--- Localizador de Maior e Menor Valor ---");
console.log("(Digite um número negativo para encerrar)\n");

// 1. Inicialização
let maior = -1;
let menor = -1;

// 2. Laço de Leitura
while (true) {
    let valor = parseInt(prompt("Informe um valor positivo: "));

    // Verificação de saída
    if (valor < 0) {
        break; 
    }

    // Lógica para o Maior
    if (valor > maior) {
        maior = valor;
    }

    // Lógica para o Menor
    // Se for o primeiro valor lido (menor ainda é -1) ou se o novo valor for menor que o atual
    if (menor === -1 || valor < menor) {
        menor = valor;
    }
}

// 3. Saída de Dados
console.log("\n---------------------------------------");
if (maior !== -1) {
    console.log(`Maior valor informado: ${maior}`);
    console.log(`Menor valor informado: ${menor}`);
} else {
    console.log("Nenhum valor positivo foi informado.");
}
console.log("---------------------------------------"); 