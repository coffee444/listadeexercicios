console.log("--- Quadrados de 15 a 200 (Passo 3) ---");

// 1. Inicialização do Número
let numero = 15;

// 2. Laço de Iteração
// O laço continuará enquanto o número não ultrapassar 200
while (numero <= 200) {
    
    // Cálculo do quadrado: número elevado a 2
    let quadrado = numero ** 2;
    
    // Saída de Dados
    console.log(`O quadrado de ${numero} é: ${quadrado}`);
    
    // Incremento de 3 unidades (Passo 3)
    numero += 3;
}

console.log("--- Fim do Processamento ---"); 