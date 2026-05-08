const prompt = require('prompt-sync')();

console.log("--- Analisador de Valores Positivos ---");
console.log("(Para encerrar e ver os resultados, digite 0 ou um número negativo)\n");

// 1. Inicialização
let somatorio = 0;
let totalValores = 0;
let media = 0;

// 2. Laço de Iteração (Usando while true com interrupção interna)
while (true) {
    let valor = Number(prompt("Digite um valor: "));

    // Condição de saída: verifica se o valor não é positivo
    if (valor <= 0) {
        break; // Sai do laço imediatamente
    }

    // Processamento dos dados válidos
    somatorio += valor;
    totalValores += 1;
    
    // Atualização da média (dentro do laço para acompanhar o progresso)
    media = somatorio / totalValores;
}

// 4. Saída de Dados (Verifica se algum valor foi lido para evitar divisão por zero)
if (totalValores > 0) {
    console.log("\n--- Resultados Finais ---");
    console.log(`Somatório: ${somatorio.toFixed(2)}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Total de valores lidos: ${totalValores}`);
} else {
    console.log("\nNenhum valor positivo foi inserido.");
} 