console.log("--- Tabela de Conversão: Celsius para Fahrenheit ---");
console.log("----------------------------------------------------");

// 1. Laço de Iteração
// Começamos em 10, vamos até 100, e aumentamos de 10 em 10 (i += 10)
for (let celsius = 10; celsius <= 100; celsius += 10) {
    
    // Aplicação da fórmula de conversão
    // F = (C * 9/5) + 32
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    // 2. Saída de Dados
    console.log(`${celsius}°C equivale a ${fahrenheit.toFixed(1)}°F`);
}

console.log("----------------------------------------------------"); 