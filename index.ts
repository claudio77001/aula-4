// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
// zero.
// function verificarNumero(numero: number): string {
//   if (numero > 0) {
//     return "Positivo";
//   } else if (numero < 0) {
//     return "Negativo";
//   } else {
//     return "Igual a zero";
//   }
// }

// const numeroLido = parseInt(prompt("Digite um número inteiro:"));
// const resultado = verificarNumero(numeroLido);
// console.log(`O número ${numeroLido} é ${resultado}.`);

// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.

// function verificarIdade(idade: number): void {
//   if (idade >= 18) {
//     console.log("Maior de idade");
//   } else {
//     console.log("Menor de idade");
//   }
// }
// const idadeDaPessoa = prompt("Digite sua idade:");
// verificarIdade(verificarIdade);

// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
// iguais.

// function main() {
//   const num1 = parseInt(prompt("Informe o primeiro número:"));
//   const num2 = parseInt(prompt("Informe o segundo número:"));

//   if (num1 > num2) {
//     console.log(`${num1} é maior que ${num2}.`);
//   } else if (num2 > num1) {
//     console.log(`${num2} é maior que ${num1}.`);
//   } else {
//     console.log("Os números são iguais.");
//   }
// }

// main();

// 4. Faça um programa que verifique se um número é par ou ímpar.

// function verificarParOuImpar(numero: number): void {
//   if (numero % 2 === 0) {
//     console.log(`${numero} é um número par`);
//   } else {
//     console.log(`${numero} é um número ímpar`);
//   }
// }

// // Exemplo de uso:
// const numero: = prompt("Digite um numero:");
// verificarParOuImpar(numero);

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

// function calcularMedia(nota1: number, nota2: number, nota3: number): number {
//   return (nota1 + nota2 + nota3) / 3;
// }

// function verificarAprovacao(media: number): string {
//   if (media >= 70) {
//     return "APROVADO";
//   } else {
//     return "REPROVADO";
//   }
// }

// // Exemplo de uso
// const nota1 = prompt("Digite nota 1:");
// const nota2 = prompt("Digite nota 2:");
// const nota3 = prompt("Digite nota 3:");

// const mediaAluno = calcularMedia(nota1, nota2, nota3);
// const situacao = verificarAprovacao(mediaAluno);

// console.log(`Média do aluno: ${mediaAluno.toFixed(2)}`);
// console.log(`Situação: ${situacao}`);

// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.

// function compararNomes(nome1: string, nome2: string): string {
//   const tamanhoNome1 = nome1.length;
//   const tamanhoNome2 = nome2.length;

//   if (tamanhoNome1 > tamanhoNome2) {
//     return `${nome1} tem mais caracteres do que ${nome2}.`;
//   } else if (tamanhoNome2 > tamanhoNome1) {
//     return `${nome2} tem mais caracteres do que ${nome1}.`;
//   } else {
//     return `Os nomes têm o mesmo número de caracteres.`;
//   }
// }

// // Exemplo de uso
// const primeiroNome = prompt("Primeiro Nome:");
// const segundoNome = prompt("Segundo Nome:");

// const resultado = compararNomes(primeiroNome, segundoNome);
// console.log(resultado);

// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

// function verificarVogalOuConsoante(caractere: string): string {
//   const vogais = "aeiouAEIOU";

//   if (vogais.includes(caractere)) {
//     return "Vogal";
//   } else {
//     return "Consoante";
//   }
// }

// // Exemplo de uso
// const caractereLido = prompt("Digite um caractere:");
// const resultado = verificarVogalOuConsoante(caractereLido);

// console.log(`O caractere "${caractereLido}" é uma ${resultado}.`);

// 8. Faça um programa que receba três números e os imprima em ordem crescente.

// function ordenarNumeros(a: number, b: number, c: number): void {
//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   if (b > c) {
//     [b, c] = [c, b];
//   }
//   if (a > b) {
//     [a, b] = [b, a];
//   }

//   console.log(`Números em ordem crescente: ${a}, ${b} e ${c}`);
// }

// // Exemplo de uso
// const num1 = prompt("Digite o primeiro numero:");
// const num2 = prompt("Digite o segundo numero:");
// const num3 = prompt("Digite o terceiro numero :");

// ordenarNumeros(num1, num2, num3);

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.

// function calcularIMC(peso: number, altura: number): number {
//   return peso / (altura * altura);
// }

// function interpretarIMC(imc: number): string {
//   if (imc < 18.5) {
//     return "Abaixo do peso";
//   } else if (imc < 25) {
//     return "Peso normal";
//   } else if (imc < 30) {
//     return "Sobrepeso";
//   } else if (imc < 35) {
//     return "Obesidade grau 1";
//   } else if (imc < 40) {
//     return "Obesidade grau 2";
//   } else {
//     return "Obesidade grau 3";
//   }
// }

// const peso = prompt("Digite seu peso:");
// const altura = prompt("Digite sua altura:");

// const imcCalculado = calcularIMC(peso, altura);
// const interpretacao = interpretarIMC(imcCalculado);

// console.log(`Seu IMC é ${imcCalculado.toFixed(2)} (${interpretacao}).`);

// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.

// function getMonthName(monthNumber: number): string {
//   switch (monthNumber) {
//     case 1:
//       return "Janeiro";
//     case 2:
//       return "Fevereiro";
//     case 3:
//       return "Março";
//     case 4:
//       return "Abril";
//     case 5:
//       return "Maio";
//     case 6:
//       return "Junho";
//     case 7:
//       return "Julho";
//     case 8:
//       return "Agosto";
//     case 9:
//       return "Setembro";
//     case 10:
//       return "Outubro";
//     case 11:
//       return "Novembro";
//     case 12:
//       return "Dezembro";
//     default:
//       return "Mês inválido";
//   }
// }

// const monthInput = prompt("Digite o número do mês (1 a 12):");
// const monthNumber = parseInt(monthInput);

// const monthName = getMonthName(monthNumber);

// console.log(`O número ${monthNumber} corresponde ao mês de ${monthName}.`);

// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.

// function calcularAumentoSalario(salario: number): number {
//   if (salario > 1500) {
//     return salario * 0.1;
//   } else {
//     return salario * 0.15;
//   }
// }

// // Exemplo de uso:
// const salarioAtual = parseFloat(
//   prompt("Digite o salário atual do funcionário:")
// );
// const aumento = calcularAumentoSalario(salarioAtual);
// const novoSalario = salarioAtual + aumento;
// console.log(`O aumento salarial foi de R$ ${aumento.toFixed(2)}.`);
// console.log(`O novo salário do funcionário é R$ ${novoSalario.toFixed(2)}.`);

// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.

// function verificarDivisibilidade(numero: number): string {
//   if (numero % 3 === 0 && numero % 5 === 0) {
//     return `${numero} é divisível por 3 e por 5 ao mesmo tempo.`;
//   } else {
//     return `${numero} não é divisível por 3 e por 5 ao mesmo tempo.`;
//   }
// }

// const numero = parseInt(prompt("Digite um número inteiro:"));
// const mensagem = verificarDivisibilidade(numero);
// console.log(mensagem);

// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.

// function verificarDiaUtil(dia: string): string {
//   const diaLowerCase = dia.toLowerCase();

//   switch (diaLowerCase) {
//     case "segunda-feira":
//     case "terça-feira":
//     case "quarta-feira":
//     case "quinta-feira":
//     case "sexta-feira":
//       return `${dia} é um dia útil.`;
//     case "sábado":
//     case "domingo":
//       return `${dia} é fim de semana.`;
//     default:
//       return `Dia inválido.`;
//   }
// }
// const diaDaSemana = prompt(
//   "Digite o dia da semana por extenso (ex: segunda-feira):"
// );
// const mensagem = verificarDiaUtil(diaDaSemana);
// console.log(mensagem);

// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom", "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.

// function classificarDesempenho(nota: number): string {
//   switch (nota) {
//     case 5:
//       return "Muito bom";
//     case 4:
//       return "Bom";
//     case 3:
//       return "Regular";
//     case 2:
//       return "Insuficiente";
//     case 1:
//       return "Muito insuficiente";
//     default:
//       return "Nota inválida. Informe um número de 1 a 5.";
//   }
// }

// // Exemplo de uso:
// const nota = parseInt(prompt("Digite uma nota de 1 a 5:"));

// const mensagem = classificarDesempenho(nota);
// console.log(mensagem);
