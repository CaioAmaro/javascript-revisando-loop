/* Você está criando um sistema de análise para um cliente que precisa 
identificar todos os números pares dentro de um intervalo informado. 
Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

Exemplo de entrada:
const numeroFinal = 10;

Saída esperada:
2
4
6
8
10 */

const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite um número \n>', (numero) => {
    for(let i = 1; i <= numero; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

    leitor.close()
})