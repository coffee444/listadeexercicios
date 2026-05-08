const prompt = require('prompt-sync')();

console.log("--- Calculadora de Área Residencial ---");

// 1. Inicialização
let areaTotal = 0;
let continuar = "SIM";

// 2. Laço de Iteração (Utilizando do...while para garantir ao menos uma execução)
do {
    console.log("\n--- Dados do Cômodo ---");
    
    // Entrada de Dados
    let nome = prompt("Nome do cômodo (ex: Sala, Quarto): ");
    let largura = Number(prompt(`Largura da ${nome} (m): `));
    let comprimento = Number(prompt(`Comprimento da ${nome} (m): `));

    // Cálculo da área do cômodo atual
    let areaComodo = largura * comprimento;
    console.log(`Área da ${nome}: ${areaComodo.toFixed(2)} m²`);

    // Acumulando na área total
    areaTotal += areaComodo;

    // Verificação de continuidade
    continuar = prompt("Deseja adicionar outro cômodo? (SIM/NÃO): ").toUpperCase();

} while (continuar === "SIM" || continuar === "S");

// 3. Saída de Dados
console.log("\n========================================");
console.log(`Área total da residência: ${areaTotal.toFixed(2)} metros quadrados.`);
console.log("========================================"); 