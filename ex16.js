// Importando o módulo para entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Aumento Salarial ---");

// 1. Entrada de Dados
let salario = Number(prompt("Digite o valor do salário mensal: "));
let porcentagemAumento = Number(prompt("Digite a porcentagem de aumento (%): "));

// 2. Processamento
// Calculamos primeiro o valor em dinheiro do aumento
let valorAumento = salario * (porcentagemAumento / 100);

// Somamos o aumento ao salário antigo para obter o novo
let novoSalario = salario + valorAumento;

// 3. Saída de Dados
console.log(`Aumento concedido: R$ ${valorAumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);