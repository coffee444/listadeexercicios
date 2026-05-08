// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Filtro de Números Divisíveis por 2 e 3 ---");

// 1. Entrada de Dados
// Criamos um array para facilitar o processamento dos quatro números
let numeros = [];
for (let i = 1; i <= 4; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i}º número inteiro: `)));
}

console.log("\nValores que atendem ao critério:");

// 2. Processamento e 3. Saída
// Percorremos cada número inserido
numeros.forEach(num => {
    // O operador && significa "E" (AND)
    // Verificamos se o resto da divisão por 2 é zero E se o resto por 3 é zero
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(num);
    }
}); 