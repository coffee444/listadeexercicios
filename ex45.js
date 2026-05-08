console.log("--- Somatório de Valores Pares (1 a 500) ---");

// 1. Inicialização da Soma
let somaPares = 0;

// 2. Laço de Iteração
// Começamos em 2 (primeiro par)
// A condição continua até 500
// O incremento é de 2 em 2 (i += 2)
for (let i = 2; i <= 500; i += 2) {
    somaPares += i; // Acumula o valor atual de 'i'
}

// 3. Saída de Dados
console.log(`O somatório dos valores pares de 1 a 500 é: ${somaPares}`); 