// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Resolução de Equação de Segundo Grau (Bhaskara) ---");

// 1. Entrada de Dados
let a = parseInt(prompt("Digite o valor de 'a': "));
let b = parseInt(prompt("Digite o valor de 'b': "));
let c = parseInt(prompt("Digite o valor de 'c': "));

// 2. Processamento
// Passo 1: Calcular o Delta (Δ = b² - 4ac)
let delta = (b ** 2) - (4 * a * c);

// 3. Verificação e Saída de Dados
if (delta >= 0) {
    // Calculando as duas raízes
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    console.log(`x1 = ${x1}, x2 = ${x2} (raízes da equação)`);
} else {
    // Caso delta seja negativo, não há raiz quadrada real
    console.log("Não existem raízes reais para esta equação (Delta negativo).");
} 