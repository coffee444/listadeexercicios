console.log("--- Soma dos 100 Primeiros Números Naturais (1 a 100) ---");

// 1. Inicialização da Soma
// Esta variável funciona como um "balde" onde vamos jogando os números
let soma = 0;
let contador = 1;

// 2. Laço de Iteração
// O loop vai rodar exatamente 100 vezes
while (contador <= 100) {
    // Acumulamos o valor do contador na variável soma
    soma = soma + contador; 
    
    // Incrementamos o contador para passar para o próximo número
    contador++;
}

// 3. Saída de Dados
console.log(`A soma total dos números de 1 a 100 é: ${soma}`); 