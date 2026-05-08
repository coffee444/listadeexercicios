const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de 15 Valores ---");

// 1. Inicialização do Somatório
let somatorio = 0n;

// 2. Laço de Iteração Principal (15 valores)
for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º valor inteiro: `));
    
    // 3. Cálculo da Fatorial
    let fatorial = 1n;
    
    // Laço interno para calcular a fatorial do 'valor' lido
    for (let j = 1; j <= valor; j++) {
        fatorial = fatorial * BigInt(j);
    }
    
    console.log(`Fatorial de ${valor} = ${fatorial}`);
    
    // 4. Atualização do Somatório
    somatorio = somatorio + fatorial;
}

// 5. Saída de Dados
console.log("\n-------------------------------------------");
console.log(`Somatório total das fatoriais: ${somatorio.toString()}`); 