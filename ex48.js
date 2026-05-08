console.log("--- Potências de Base 3 (Expoentes 0 a 15) ---");

// 1. Inicialização do Contador
let expoente = 0;

// 2. Laço de Iteração
while (expoente <= 15) {
    
    // Cálculo da potência: 3 elevado ao expoente atual
    // Usamos o operador ** (exponenciação)
    let potencia = 3 ** expoente;
    
    // Saída de Dados formatada
    console.log(`3^${expoente} = ${potencia}`);
    
    // Incremento do contador
    expoente++;
}

console.log("--- Fim da Sequência ---"); 