const prompt = require('prompt-sync')();

console.log("--- Cálculo de Somatório e Média (10 Valores) ---");

// 1. Inicialização
let somatorio = 0;
let contador = 0;

// 2. Laço de Iteração
while (contador < 10) {
    // Solicita o valor e converte para número real
    let valor = Number(prompt(`Digite o ${contador + 1}º valor: `));
    
    // Adiciona ao acumulador
    somatorio += valor;
    
    // Incrementa o contador
    contador++;
}

// 3. Cálculo da Média
let media = somatorio / 10;

// 4. Saída de Dados
console.log("\n--- Resultados ---");
console.log(`Somatório total: ${somatorio.toFixed(2)}`);
console.log(`Média aritmética: ${media.toFixed(2)}`); 