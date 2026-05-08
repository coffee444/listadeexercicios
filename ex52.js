console.log("--- Somatório de Grãos no Tabuleiro de Xadrez ---");

// 1. Inicialização do Somatório
// Usamos BigInt (adicionando 'n' ao final) para números gigantescos
let totalGraos = 0n; 
let quadro = 1;

// 2. Laço de Iteração (WHILE)
while (quadro <= 64) {
    
    // Fórmula: 2 ^ (quadro - 1)
    // No quadro 1: 2^(0) = 1
    // No quadro 2: 2^(1) = 2
    // No quadro 3: 2^(2) = 4...
    let graosNoQuadro = 2n ** BigInt(quadro - 1);
    
    // 3. Atualização do Somatório
    totalGraos += graosNoQuadro;
    
    // Incremento do quadro
    quadro++;
}

// 4. Saída de Dados
console.log(`Total de grãos de trigo: ${totalGraos.toString()}`); 