// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Sistema de Notas com Recuperação (Exame) ---");

// 1. Entrada de Dados Inicial
let n1 = Number(prompt("Nota 1: "));
let n2 = Number(prompt("Nota 2: "));
let n3 = Number(prompt("Nota 3: "));
let n4 = Number(prompt("Nota 4: "));

// 2. Processamento da primeira média
let media = (n1 + n2 + n3 + n4) / 4;

// 3. Verificação de Situação
if (media > 7) {
    // Caso 1: Aprovado Direto
    console.log(`Média: ${media.toFixed(2)}, Aprovado!`);
} else {
    // Caso 2: Não atingiu 7, precisa de exame
    console.log(`Média: ${media.toFixed(2)}, Situação: EXAME.`);
    
    // Solicita a nota do exame apenas se caiu nesta condição
    let notaExame = Number(prompt("Digite a nota do exame: "));
    
    // Calcula a nova média (geralmente a média simples entre a anterior e o exame)
    let novaMedia = (media + notaExame) / 2;
    
    if (novaMedia > 5) {
        console.log(`Nova Média: ${novaMedia.toFixed(2)}, Aprovado em Exame!`);
    } else {
        console.log(`Nova Média: ${novaMedia.toFixed(2)}, Reprovado.`);
    }
} 