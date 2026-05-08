console.log("--- Fatorial dos Valores Ímpares (1 a 100) ---");

// 1. Laço de Iteração Principal (Somente ímpares)
for (let i = 1; i <= 100; i += 2) {
    
    // 2. Inicialização do Resultado da Fatorial para o número atual
    let fatorial = 1n; // Reinicia a cada novo número ímpar
    
    // 3. Cálculo da Fatorial do número 'i'
    for (let j = 1n; j <= BigInt(i); j++) {
        fatorial *= j;
    }
    
    // 4. Saída de Dados
    console.log(`Fatorial de ${i} = ${fatorial.toString()}`);
    console.log("--------------------------------------------------");
} 